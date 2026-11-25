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
  const [vertical, setVertical] = useState(false);
  const verticalRef = useRef(false);
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
      const v = W < 640;
      verticalRef.current = v;
      setVertical(v);
      // wide: a 2:1 infinity sign; narrow (phones): stand it upright so each
      // lobe is big enough to hold the stage text
      H = Math.round(W * (v ? 2 : 0.5));
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
      const v = verticalRef.current;
      const sc = v ? H * 0.46 : W * 0.46;
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
        // upright layout: Dev lobe on top, Ops lobe below
        const px = v ? cx + y * sc + ny * p.o * scatter : cx + x * sc + nx * p.o * scatter;
        const py = v ? cy + x * sc + nx * p.o * scatter : cy - y * sc - ny * p.o * scatter;

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
        {/* Loop with the active stage written inside its lobe */}
        <div ref={wrapRef} className="relative w-full max-w-[420px] md:max-w-none mx-auto">
          <canvas ref={canvasRef} className="block w-full" aria-hidden="true" />

          {/* stage names around the loop */}
          {devopsStages.map((s, i) => {
            const { x, y } = curve(stageT(i));
            let left;
            let top;
            let shift;
            if (vertical) {
              // canvas is W x 2W and the curve scale is 0.92W
              left = 50 + y * 92;
              top = 50 + x * 46;
              shift = y >= 0 ? "translate(14%, -50%)" : "translate(-114%, -50%)";
            } else {
              left = 50 + x * 46;
              top = 50 - y * 92;
              shift = y >= 0 ? "translate(-50%, -190%)" : "translate(-50%, 90%)";
            }
            return (
              <span
                key={s.id}
                aria-hidden="true"
                className={`absolute text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  i === active ? "text-gold" : "text-white/35"
                }`}
                style={{ left: `${left}%`, top: `${top}%`, transform: shift }}
              >
                {s.name}
              </span>
            );
          })}

          {/* active stage, centred in its lobe, cross-fading on change */}
          <div
            className="absolute pointer-events-none"
            style={
              vertical
                ? {
                    left: "50%",
                    top: `${50 + (stage.lobe === "Dev" ? -1 : 1) * 23}%`,
                    width: "56%",
                    transform: "translate(-50%, -50%)",
                  }
                : {
                    left: `${50 + (stage.lobe === "Dev" ? -1 : 1) * 23}%`,
                    top: "50%",
                    width: "40%",
                    maxWidth: 380,
                    transform: "translate(-50%, -50%)",
                  }
            }
          >
            <div
              key={stage.id}
              className="text-center animate-stage"
              role="status"
              aria-live="polite"
            >
              <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/45">
                {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")} ·{" "}
                {stage.lobe}
              </p>
              <h3 className="mt-1 text-2xl md:text-4xl font-normal text-gold">
                {stage.name}
              </h3>
              <p className="mt-1.5 text-[11px] leading-snug md:text-base md:leading-normal text-white/70 font-light">
                {stage.summary}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1 md:gap-1.5 mt-2 md:mt-3">
                {stage.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-1.5 py-0.5 md:px-2.5 md:py-1 text-[9px] md:text-[11px] uppercase tracking-wide rounded-md bg-gold/10 border border-gold/25 text-gold/90"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <span className="absolute left-1/2 text-[10px] tracking-[0.4em] text-white/20 -translate-x-1/2 top-[2%] md:hidden">
            DEV
          </span>
          <span className="absolute left-1/2 text-[10px] tracking-[0.4em] text-white/20 -translate-x-1/2 bottom-[2%] md:hidden">
            OPS
          </span>
        </div>

        {/* Stage selector */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mt-4 md:mt-6"
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
              className={`px-3 md:px-4 py-2 min-h-11 rounded-full text-xs uppercase tracking-wider border transition-colors cursor-pointer ${
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

        {/* What I actually did at this stage */}
        <p
          key={`did-${stage.id}`}
          className="mt-5 max-w-3xl mx-auto text-center text-sm md:text-base text-white/80 font-light animate-stage"
        >
          <span className="mr-2 text-xs tracking-widest uppercase text-gold">
            What I did
          </span>
          {stage.did}
        </p>
      </div>
    </section>
  );
};

export default DevOpsLoop;
