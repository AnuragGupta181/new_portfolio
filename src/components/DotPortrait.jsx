import { useEffect, useRef } from "react";

// Particle portrait. Loose gold particles drift as a rotating sphere, spread
// into a cloud, then slowly fly in and settle so that together they build the
// real photo (each particle takes the colour of its pixel). The crisp photo
// then fades in inside a circle, framed by a twinkling ring of particles.
const SRC = "/images/man.jpg";
const CROP = { x: 24, y: 28, s: 262 }; // square crop on the face (source px)

const T_SPHERE = 1.6; // sphere only
const T_SPREAD = 1.2; // sphere -> cloud
const T_GATHER = 4.2; // cloud -> portrait (includes per-particle delays)
const T_FADE = 1.4; // particles -> real photo

const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;

const DotPortrait = ({ name = "Portrait", className = "" }) => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let size = 0;
    let dpr = 1;
    let img = null;
    let parts = [];
    let ring = [];
    let inner = 0;
    let raf = 0;
    let started = false;
    let t0 = 0;
    let visible = false;
    let done = false;

    const build = () => {
      if (!img) return;
      size = Math.round(wrap.getBoundingClientRect().width);
      if (!size) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      inner = size * 0.82;
      const G = size < 300 ? 50 : 70;
      const off = document.createElement("canvas");
      off.width = G;
      off.height = G;
      const octx = off.getContext("2d", { willReadFrequently: true });
      octx.drawImage(img, CROP.x, CROP.y, CROP.s, CROP.s, 0, 0, G, G);
      const data = octx.getImageData(0, 0, G, G).data;

      const step = inner / G;
      const origin = (size - inner) / 2;
      const R = inner / 2;
      const cx = size / 2;
      const cy = size / 2;
      parts = [];
      let n = 0;
      for (let gy = 0; gy < G; gy++) {
        for (let gx = 0; gx < G; gx++) {
          const hx = origin + (gx + 0.5) * step;
          const hy = origin + (gy + 0.5) * step;
          if (Math.hypot(hx - cx, hy - cy) > R) continue;
          const i = (gy * G + gx) * 4;
          // fibonacci sphere point for the opening shape
          const k = n++;
          parts.push({
            hx,
            hy,
            rgb: [data[i], data[i + 1], data[i + 2]],
            k,
            d: Math.random() * 0.42,
            ca: Math.random() * Math.PI * 2, // scattered-cloud angle/radius
            cr: Math.sqrt(Math.random()) * size * 0.46,
            ph: Math.random() * 6.28,
            tone: Math.random(),
          });
        }
      }
      parts.forEach((p) => {
        const f = (p.k + 0.5) / parts.length;
        const phi = Math.acos(1 - 2 * f);
        const th = Math.PI * (1 + Math.sqrt(5)) * p.k;
        p.sx = Math.sin(phi) * Math.cos(th);
        p.sy = Math.cos(phi);
        p.sz = Math.sin(phi) * Math.sin(th);
        p.size = Math.max(1.1, step * 0.62);
      });

      ring = Array.from({ length: 110 }, (_, k) => ({
        a: (k / 110) * Math.PI * 2 + Math.random() * 0.05,
        o: (Math.random() - 0.5) * size * 0.035,
        s: 0.6 + Math.random() * 1.5,
        tw: Math.random() * 6.28,
      }));
    };

    const drawPhoto = (alpha) => {
      if (alpha <= 0) return;
      const R = inner / 2;
      const o = (size - inner) / 2;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, R, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, CROP.x, CROP.y, CROP.s, CROP.s, o, o, inner, inner);
      ctx.restore();
      ctx.globalAlpha = alpha * 0.5;
      ctx.strokeStyle = "rgba(207,163,85,0.55)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, R + 1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const drawRing = (T, alpha) => {
      const cx = size / 2;
      const cy = size / 2;
      const rr = size * 0.465;
      const rot = T * 0.05;
      for (const p of ring) {
        const a = p.a + rot;
        const tw = 0.35 + 0.65 * Math.abs(Math.sin(T * 1.4 + p.tw));
        ctx.globalAlpha = alpha * tw;
        ctx.fillStyle = p.tw > 3.4 ? "#e8d5a8" : "#cfa355";
        ctx.beginPath();
        ctx.arc(cx + Math.cos(a) * (rr + p.o), cy + Math.sin(a) * (rr + p.o), p.s * (size / 340), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const draw = (T) => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;
      const gatherStart = T_SPHERE + T_SPREAD;
      const intro = clamp01(T / 0.8);
      const fade = clamp01((T - (gatherStart + T_GATHER)) / T_FADE);
      const sB = ease(clamp01((T - T_SPHERE) / T_SPREAD));
      const sphereR = size * 0.3;
      const ang = T * 0.9;
      const ca = Math.cos(ang);
      const sa = Math.sin(ang);

      if (fade < 1) {
        for (const p of parts) {
          // 1) rotating sphere
          const rx = p.sx * ca - p.sz * sa;
          const rz = p.sx * sa + p.sz * ca;
          const sx = cx + rx * sphereR;
          const sy = cy + p.sy * sphereR;
          // 2) loose cloud (slowly drifting)
          const drift = 1 + 0.06 * Math.sin(T * 1.2 + p.ph);
          const px = cx + Math.cos(p.ca + T * 0.15) * p.cr * drift;
          const py = cy + Math.sin(p.ca + T * 0.15) * p.cr * drift;
          let x = lerp(sx, px, sB);
          let y = lerp(sy, py, sB);
          // 3) fly home, each particle on its own delay
          const c = ease(clamp01((T - gatherStart - p.d * T_GATHER * 0.9) / (T_GATHER * 0.58)));
          x = lerp(x, p.hx, c);
          y = lerp(y, p.hy, c);

          const depth = 0.55 + 0.45 * ((rz + 1) / 2) * (1 - sB) + 0.45 * sB;
          const r = lerp(Math.max(1, p.size * 0.5) * (0.8 + depth * 0.6), p.size * 0.62, c);
          // colour: warm gold-cream while loose, true pixel colour once home
          const gr = p.tone < 0.2 ? 233 : 207;
          const gg = p.tone < 0.2 ? 168 : 163;
          const gb = p.tone < 0.2 ? 110 : 85;
          const R = Math.round(lerp(gr, p.rgb[0], c));
          const Gc = Math.round(lerp(gg, p.rgb[1], c));
          const B = Math.round(lerp(gb, p.rgb[2], c));
          ctx.globalAlpha = intro * (1 - fade) * lerp(0.35 + depth * 0.65, 1, c);
          ctx.fillStyle = `rgb(${R},${Gc},${B})`;
          ctx.fillRect(x - r, y - r, r * 2, r * 2);
        }
        ctx.globalAlpha = 1;
      }
      drawPhoto(ease(fade));
      drawRing(T, clamp01((T - (gatherStart + T_GATHER * 0.5)) / 1.5));
    };

    const loop = (now) => {
      const T = (now - t0) / 1000;
      draw(T);
      if (!visible) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const kick = () => {
      if (reduce) {
        draw(99);
        return;
      }
      if (!started) {
        started = true;
        t0 = performance.now();
      }
      if (!raf && !done) raf = requestAnimationFrame(loop);
      // keep the ring twinkling after assembly
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible && img) kick();
      },
      { threshold: 0.35 }
    );
    const ro = new ResizeObserver(() => {
      build();
      if (reduce && img) draw(99);
    });

    const image = new Image();
    image.onload = () => {
      img = image;
      build();
      ro.observe(wrap);
      io.observe(wrap);
      if (visible) kick();
    };
    image.src = SRC;

    return () => {
      cancelAnimationFrame(raf);
      done = true;
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative aspect-square ${className}`}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={`Portrait of ${name}`}
        className="block w-full"
      />
    </div>
  );
};

export default DotPortrait;
