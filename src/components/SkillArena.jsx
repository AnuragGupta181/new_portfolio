import { useEffect, useRef, useState } from "react";

// A box of skill "bubbles" that drift like water, bump into each other and the
// walls, and can be grabbed and thrown. Logo bubbles show the Icons8 logo;
// skills without a logo show their name inside a round bubble.
const ICON_R = 29;
const textRadius = (name) => Math.max(30, Math.min(52, 22 + name.length * 2.2));

const SkillArena = ({ skills }) => {
  const arenaRef = useRef(null);
  const chipRefs = useRef([]);
  const [height, setHeight] = useState(300);
  const [hint, setHint] = useState(null); // name of hovered/dragged icon bubble

  const bodies = skills.map((s) => ({ ...s, r: s.icon ? ICON_R : textRadius(s.name) }));

  useEffect(() => {
    const arena = arenaRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let raf = 0;
    let visible = false;
    let placed = false;
    let last = 0;
    let time = 0;
    const state = bodies.map((b) => ({
      r: b.r,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      drag: false,
    }));

    const place = () => {
      // random non-overlapping start positions
      state.forEach((s, i) => {
        let tries = 0;
        do {
          s.x = s.r + Math.random() * Math.max(1, W - s.r * 2);
          s.y = s.r + Math.random() * Math.max(1, H - s.r * 2);
          tries++;
        } while (
          tries < 60 &&
          state.slice(0, i).some((o) => Math.hypot(o.x - s.x, o.y - s.y) < o.r + s.r + 2)
        );
        s.vx = (Math.random() - 0.5) * 60;
        s.vy = (Math.random() - 0.5) * 60;
      });
      placed = true;
    };

    const paint = () => {
      state.forEach((s, i) => {
        const el = chipRefs.current[i];
        if (el) el.style.transform = `translate3d(${s.x - s.r}px, ${s.y - s.r}px, 0)`;
      });
    };

    const measure = () => {
      W = arena.clientWidth;
      // enough room for every bubble to float: area-based height
      const area = state.reduce((a, s) => a + Math.PI * s.r * s.r, 0) * 2.6;
      const h = Math.round(Math.min(560, Math.max(250, area / Math.max(W, 1))));
      H = h;
      setHeight(h);
      if (!placed) place();
      state.forEach((s) => {
        s.x = Math.min(Math.max(s.x, s.r), W - s.r);
        s.y = Math.min(Math.max(s.y, s.r), H - s.r);
      });
      paint();
    };

    const step = (now) => {
      const dt = Math.min(0.033, (now - last) / 1000 || 0.016);
      last = now;
      time += dt;

      for (const s of state) {
        if (s.drag) continue;
        if (!reduce) {
          // slow "current": a drifting flow field, so bubbles never sit still
          s.vx += Math.sin(time * 0.7 + s.y * 0.015) * 14 * dt;
          s.vy += Math.cos(time * 0.55 + s.x * 0.015) * 14 * dt;
        }
        const drag = Math.pow(0.35, dt); // water-like damping
        s.vx *= drag + (1 - drag) * 0.4;
        s.vy *= drag + (1 - drag) * 0.4;
        const sp = Math.hypot(s.vx, s.vy);
        const max = 420;
        if (sp > max) {
          s.vx = (s.vx / sp) * max;
          s.vy = (s.vy / sp) * max;
        }
        s.x += s.vx * dt;
        s.y += s.vy * dt;
      }

      // walls
      for (const s of state) {
        if (s.x < s.r) {
          s.x = s.r;
          s.vx = Math.abs(s.vx) * 0.8;
        } else if (s.x > W - s.r) {
          s.x = W - s.r;
          s.vx = -Math.abs(s.vx) * 0.8;
        }
        if (s.y < s.r) {
          s.y = s.r;
          s.vy = Math.abs(s.vy) * 0.8;
        } else if (s.y > H - s.r) {
          s.y = H - s.r;
          s.vy = -Math.abs(s.vy) * 0.8;
        }
      }

      // bubble-bubble collisions (equal density: mass ~ r^2)
      for (let i = 0; i < state.length; i++) {
        for (let j = i + 1; j < state.length; j++) {
          const a = state[i];
          const b = state[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.001;
          const min = a.r + b.r;
          if (dist >= min) continue;
          const nx = dx / dist;
          const ny = dy / dist;
          const ma = a.r * a.r;
          const mb = b.r * b.r;
          const overlap = min - dist;
          // push apart (dragged bubble is immovable)
          const pa = a.drag ? 0 : b.drag ? 1 : mb / (ma + mb);
          const pb = b.drag ? 0 : a.drag ? 1 : ma / (ma + mb);
          a.x -= nx * overlap * pa;
          a.y -= ny * overlap * pa;
          b.x += nx * overlap * pb;
          b.y += ny * overlap * pb;
          // bounce along the normal
          const rv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
          if (rv < 0) {
            const imp = (-(1 + 0.85) * rv) / (1 / ma + 1 / mb);
            if (!a.drag) {
              a.vx -= (imp * nx) / ma;
              a.vy -= (imp * ny) / ma;
            }
            if (!b.drag) {
              b.vx += (imp * nx) / mb;
              b.vy += (imp * ny) / mb;
            }
          }
        }
      }
      paint();
    };

    const loop = (now) => {
      step(now);
      if (!visible) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    const run = () => {
      if (!raf && visible) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(arena);
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        run();
      },
      { threshold: 0.05 }
    );
    io.observe(arena);

    // dragging
    const cleanups = [];
    chipRefs.current.forEach((el, i) => {
      if (!el) return;
      const s = state[i];
      let prev = null;
      const move = (e) => {
        const rect = arena.getBoundingClientRect();
        const nx = Math.min(Math.max(e.clientX - rect.left, s.r), W - s.r);
        const ny = Math.min(Math.max(e.clientY - rect.top, s.r), H - s.r);
        const now = performance.now();
        if (prev) {
          const dt = Math.max(0.008, (now - prev.t) / 1000);
          s.vx = ((nx - s.x) / dt) * 0.6;
          s.vy = ((ny - s.y) / dt) * 0.6;
        }
        prev = { t: now };
        s.x = nx;
        s.y = ny;
        paint();
      };
      const down = (e) => {
        e.preventDefault();
        s.drag = true;
        prev = null;
        el.setPointerCapture(e.pointerId);
        el.dataset.drag = "1";
        setHint(bodies[i].icon ? bodies[i].name : null);
        run();
        if (reduce && !raf) {
          visible = true;
          run();
        }
      };
      const up = (e) => {
        s.drag = false;
        el.dataset.drag = "0";
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {
          /* already released */
        }
        setHint(null);
      };
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointermove", (e) => s.drag && move(e));
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", up);
      cleanups.push(() => {
        el.removeEventListener("pointerdown", down);
        el.removeEventListener("pointerup", up);
        el.removeEventListener("pointercancel", up);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      cleanups.forEach((c) => c());
    };
    // bodies derive from a static prop; build once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={arenaRef}
      className="relative w-full overflow-hidden rounded-2xl bg-black/30 border border-white/5"
      style={{ height }}
    >
      {bodies.map((b, i) => (
        <div
          key={b.name}
          ref={(el) => (chipRefs.current[i] = el)}
          role="img"
          aria-label={b.name}
          title={b.name}
          onMouseEnter={() => b.icon && setHint(b.name)}
          onMouseLeave={() => setHint(null)}
          className="absolute top-0 left-0 flex items-center justify-center text-center rounded-full select-none bg-white/[0.07] border border-white/15 hover:border-gold/60 data-[drag='1']:border-gold data-[drag='1']:bg-gold/15 data-[drag='1']:z-10 cursor-grab data-[drag='1']:cursor-grabbing touch-none will-change-transform transition-colors"
          style={{ width: b.r * 2, height: b.r * 2 }}
        >
          {b.icon ? (
            <img
              src={b.icon}
              alt=""
              width={36}
              height={36}
              draggable={false}
              className="size-8 pointer-events-none"
            />
          ) : (
            <span
              className="px-1.5 leading-tight uppercase tracking-wide text-white/85 pointer-events-none"
              style={{ fontSize: b.r > 44 ? 10 : 9 }}
            >
              {b.name}
            </span>
          )}
        </div>
      ))}
      <span
        className={`absolute px-2 py-0.5 text-[10px] tracking-widest uppercase rounded-full pointer-events-none left-3 bottom-3 bg-gold text-black transition-opacity ${
          hint ? "opacity-100" : "opacity-0"
        }`}
      >
        {hint || "·"}
      </span>
    </div>
  );
};

export default SkillArena;
