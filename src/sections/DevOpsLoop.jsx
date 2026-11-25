import { useCallback, useEffect, useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { devopsStages } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const GOLD = "#cfa355";
const CREAM = "#e5e5e0";
const TAU = Math.PI * 2;
const N = devopsStages.length;
const A = 1; // lemniscate half-width (unit space)

// Bernoulli lemniscate. t = 0 is the right tip; t = PI is the left tip.
const curve = (t) => {
  const s = Math.sin(t);
  const d = 1 + s * s;
  return { x: (A * Math.cos(t)) / d, y: (A * s * Math.cos(t)) / d };
};
// Stage i sits at a fixed parameter. Plan..Test run through the left lobe,
// Release..Monitor through the right lobe, in flow direction.
const stageT = (i) => Math.PI / 2 + ((i + 0.5) * Math.PI) / 4;

const angDist = (a, b) => {
  let d = Math.abs(((a - b) % TAU) + TAU) % TAU;
  if (d > Math.PI) d = TAU - d;
  return d;
};

const DevOpsLoop = () => {
  const text = `From commit to production and back —
the delivery loop I build, run
and keep observable.`;

  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [active, setActive] = useState(6);
  const [playing, setPlaying] = useState(true);
  const activeRef = useRef(active);
  activeRef.current = active;
  const reduceRef = useRef(false);

  // autoplay through the stages
  useEffect(() => {
    if (!playing || reduceRef.current) return;
    const id = setInterval(() => setActive((a) => (a + 1) % N), 4200);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceRef.current) setPlaying(false);
  }, []);

  // particle field
  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = reduceRef.current;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let visible = false;
    let parts = [];
    let hi = active; // smoothed highlight centre (as stage index, may be fractional)
    let hiTarget = active;

    const seed = (count) => {
      parts = Array.from({ length: count }, (_, k) => ({
        t: (k / count) * TAU + Math.random() * 0.02,
        v: 0.05 + Math.random() * 0.1, // radians per second
        o: (Math.random() - 0.5) * 2, // perpendicular scatter
        r: 0.5 + Math.random() * 1.2,
      }));
    };

    const size = () => {
      const rect = wrap.getBoundingClientRect();
      W = Math.round(rect.width);
      H = Math.round(W * 0.5);
      if (!W) return;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.height = `${H}px`;
      wrap.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(W < 520 ? 380 : W < 900 ? 640 : 900);
    };

    let last = 0;
    const draw = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      hiTarget = activeRef.current;
      // shortest way around the 8-stage ring
      let diff = ((hiTarget - hi + N * 1.5) % N) - N / 2;
      hi += diff * Math.min(1, dt * 4);
      hi = ((hi % N) + N) % N;
      const tHi = stageT(hi - 0.0);

      ctx.clearRect(0, 0, W, H);
      const sc = W * 0.46;
      const cx = W / 2;
      const cy = H / 2;
      const scatter = W * 0.012;

      for (const p of parts) {
        if (!reduce) p.t = (p.t + p.v * dt) % TAU;
        const { x, y } = curve(p.t);
        // normal approx: scatter perpendicular using the derivative direction
        const e = 0.01;
        const a = curve(p.t - e);
        const b = curve(p.t + e);
        let nx = -(b.y - a.y);
        let ny = b.x - a.x;
        const len = Math.hypot(nx, ny) || 1;
        nx /= len;
        ny /= len;
        const px = cx + x * sc + nx * p.o * scatter;
        const py = cy - y * sc - ny * p.o * scatter;

        const near = 1 - Math.min(1, angDist(p.t, tHi) / 0.55);
        const left = Math.cos(p.t) < 0; // dev lobe
        ctx.globalAlpha = 0.22 + near * 0.78;
        ctx.fillStyle = near > 0.35 ? GOLD : left ? "#9a8a64" : CREAM;
        if (!left && near <= 0.35) ctx.globalAlpha = 0.16 + near * 0.5;
        ctx.beginPath();
        ctx.arc(px, py, p.r * (1 + near * 1.5), 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now) => {
      draw(now);
      if (!visible || reduce) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    size();
    const ro = new ResizeObserver(() => {
      size();
      draw(performance.now());
    });
    ro.observe(wrap);
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
      },
      { threshold: 0.05 }
    );
    io.observe(wrap);
    draw(performance.now());

    // when reduced motion is on, repaint on selection change
    const unsub = reduce ? setInterval(() => draw(performance.now()), 250) : null;

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      if (unsub) clearInterval(unsub);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = useCallback((i) => {
    setActive(i);
    setPlaying(false);
  }, []);

  const stage = devopsStages[active];

  return (
    <section id="pipeline" className="py-12 md:py-20 bg-black text-white rounded-4xl">
      <AnimatedHeaderSection
        subTitle={"CI/CD • GitOps • Observability"}
        title={"Pipeline"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="px-3 md:px-10 mt-8 md:mt-12 max-w-6xl mx-auto">
        {/* Loop */}
        <div ref={wrapRef} className="relative w-full" aria-hidden="true">
          <canvas ref={canvasRef} className="block w-full" />
          {/* stage labels around the loop (tablet and up) */}
          {devopsStages.map((s, i) => {
            const { x, y } = curve(stageT(i));
            const left = 50 + x * 46;
            const top = 50 - y * 92; // canvas is W wide x W/2 tall, curve scale 0.46W
            const above = y >= 0;
            return (
              <span
                key={s.id}
                className={`hidden md:block absolute -translate-x-1/2 text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  i === active ? "text-gold" : "text-white/40"
                }`}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: `translate(-50%, ${above ? "-190%" : "90%"})`,
                }}
              >
                {s.name}
              </span>
            );
          })}
          <span className="absolute left-[24%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs tracking-[0.4em] text-white/30">
            DEV
          </span>
          <span className="absolute left-[76%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs tracking-[0.4em] text-white/30">
            OPS
          </span>
        </div>

        {/* Stage selector */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mt-6"
          role="tablist"
          aria-label="Delivery stages"
        >
          {devopsStages.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => select(i)}
              className={`px-4 py-2 min-h-11 rounded-full text-xs uppercase tracking-wider border transition-colors cursor-pointer ${
                i === active
                  ? "bg-gold text-black border-gold"
                  : "bg-transparent text-white/70 border-white/20 hover:border-gold hover:text-white"
              }`}
            >
              {s.name}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="flex items-center gap-2 px-4 py-2 min-h-11 rounded-full text-xs uppercase tracking-wider border border-white/20 text-white/70 hover:border-gold hover:text-white transition-colors cursor-pointer"
          >
            <Icon icon={playing ? "lucide:pause" : "lucide:play"} className="size-4" />
            {playing ? "Pause" : "Play"}
          </button>
        </div>

        {/* Active stage */}
        <div
          className="mt-6 p-5 md:p-8 rounded-3xl bg-white/5 border border-white/10"
          role="tabpanel"
          aria-live="polite"
        >
          <p className="text-xs tracking-widest uppercase text-white/50">
            {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")} ·{" "}
            {stage.lobe}
          </p>
          <h3 className="mt-2 text-3xl md:text-4xl font-normal text-gold">{stage.name}</h3>
          <p className="mt-2 text-base md:text-lg text-white/70 font-light">
            {stage.summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {stage.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs uppercase tracking-wider rounded-lg bg-white/10 border border-white/10 text-white/80"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-5 pt-4 text-sm md:text-base text-white/80 font-light border-t border-white/10">
            <span className="mr-2 text-xs tracking-widest uppercase text-gold">
              What I did
            </span>
            {stage.did}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevOpsLoop;
