import { useEffect, useRef } from "react";

// Pointer devices only. The normal cursor stays; a very soft golden circle
// follows it. When you press on something, the glow grows to fill that whole
// element (button, link, card…), then eases back to a circle on release.
// Never mounts on touch screens or with prefers-reduced-motion.
const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, summary, label, .cursor-pointer';

const lerp = (a, b, t) => a + (b - a) * t;
const IDLE = 46;

const CustomCursor = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const glow = glowRef.current;
    const mouse = { x: -200, y: -200 };
    const c = { x: -200, y: -200, w: IDLE, h: IDLE, r: IDLE / 2, o: 0 };
    const t = { ...c };
    let hovered = null;
    let filled = null; // element being "occupied" while pressed
    let releaseTimer = 0;
    let raf = 0;
    let running = false;

    const target = () => {
      if (filled && document.contains(filled)) {
        const rect = filled.getBoundingClientRect();
        const pad = 4;
        t.w = rect.width + pad * 2;
        t.h = rect.height + pad * 2;
        t.x = rect.left - pad;
        t.y = rect.top - pad;
        const rad = parseFloat(getComputedStyle(filled).borderTopLeftRadius) || 0;
        t.r = Math.min(rad + pad, Math.min(t.w, t.h) / 2);
        return true;
      }
      const size = hovered ? IDLE * 1.25 : IDLE;
      t.w = size;
      t.h = size;
      t.r = size / 2;
      t.x = mouse.x - size / 2;
      t.y = mouse.y - size / 2;
      return false;
    };

    const frame = () => {
      const rect = target();
      const k = rect ? 0.3 : 0.35;
      c.x = lerp(c.x, t.x, k);
      c.y = lerp(c.y, t.y, k);
      c.w = lerp(c.w, t.w, 0.22);
      c.h = lerp(c.h, t.h, 0.22);
      c.r = lerp(c.r, t.r, 0.22);
      c.o = lerp(c.o, t.o, 0.2);
      glow.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
      glow.style.width = `${c.w}px`;
      glow.style.height = `${c.h}px`;
      glow.style.borderRadius = `${c.r}px`;
      glow.style.opacity = c.o;
      glow.dataset.mode = rect ? "fill" : "idle";

      const settled =
        !filled &&
        Math.abs(c.x - t.x) < 0.2 &&
        Math.abs(c.y - t.y) < 0.2 &&
        Math.abs(c.w - t.w) < 0.2 &&
        Math.abs(c.o - t.o) < 0.01;
      if (settled) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const el = e.target instanceof Element ? e.target : null;
      if (el && el.tagName === "IFRAME") {
        t.o = 0; // embedded page keeps its own cursor
        hovered = null;
      } else {
        t.o = 1;
        hovered = el ? el.closest(INTERACTIVE) : null;
      }
      if (c.o < 0.05) {
        c.x = mouse.x - IDLE / 2;
        c.y = mouse.y - IDLE / 2;
      }
      start();
    };
    const onDown = (e) => {
      const el = e.target instanceof Element ? e.target : null;
      if (!el || el.tagName === "IFRAME") return;
      clearTimeout(releaseTimer);
      let area = el.closest(INTERACTIVE) || el;
      const r = area.getBoundingClientRect();
      // huge containers (whole sections) would swallow the screen: use the
      // clicked element's own box instead, or stay a circle
      if (r.width * r.height > window.innerWidth * window.innerHeight * 0.45) {
        area = null;
      }
      filled = area;
      start();
    };
    const onUp = () => {
      clearTimeout(releaseTimer);
      releaseTimer = setTimeout(() => {
        filled = null;
        start();
      }, 260);
    };
    const onLeave = () => {
      t.o = 0;
      hovered = null;
      filled = null;
      start();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(releaseTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={glowRef} className="site-cursor" aria-hidden="true" />;
};

export default CustomCursor;
