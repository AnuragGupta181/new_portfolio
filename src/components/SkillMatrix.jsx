import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import SkillArena from "./SkillArena";

// Skill boxes laid out as tight columns. On desktop (mouse) a box can be
// dragged by its header and dropped on another box to swap places; it stays
// inside the matrix area. The bubbles inside each box float on their own.
const SkillMatrix = ({ categories }) => {
  const [order, setOrder] = useState(() => categories.map((_, i) => i));
  const [drag, setDrag] = useState(null); // { id, dx, dy }
  const [overId, setOverId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const wrapRef = useRef(null);
  const cardRefs = useRef({});

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => setCanDrag(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const startDrag = (e, id) => {
    if (!canDrag || e.button !== 0) return;
    e.preventDefault();
    const handle = e.currentTarget;
    handle.setPointerCapture(e.pointerId);
    const card = cardRefs.current[id];
    const rect = card.getBoundingClientRect();
    const area = wrapRef.current.getBoundingClientRect();
    const start = { x: e.clientX, y: e.clientY };
    let current = null;

    const move = (ev) => {
      let dx = ev.clientX - start.x;
      let dy = ev.clientY - start.y;
      // keep the box inside the matrix area
      dx = Math.min(Math.max(dx, area.left - rect.left), area.right - rect.right);
      dy = Math.min(Math.max(dy, area.top - rect.top), area.bottom - rect.bottom);
      setDrag({ id, dx, dy });
      // which other box is under the pointer?
      let hit = null;
      for (const [k, el] of Object.entries(cardRefs.current)) {
        if (Number(k) === id || !el) continue;
        const r = el.getBoundingClientRect();
        if (ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom) {
          hit = Number(k);
          break;
        }
      }
      current = hit;
      setOverId(hit);
    };
    const end = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", end);
      handle.removeEventListener("pointercancel", end);
      if (current !== null) {
        setOrder((o) => {
          const next = [...o];
          const a = next.indexOf(id);
          const b = next.indexOf(current);
          [next[a], next[b]] = [next[b], next[a]];
          return next;
        });
      }
      setDrag(null);
      setOverId(null);
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", end);
    handle.addEventListener("pointercancel", end);
  };

  return (
    <div
      ref={wrapRef}
      className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:balance]"
    >
      {order.map((id) => {
        const category = categories[id];
        const dragging = drag && drag.id === id;
        return (
          <div
            key={category.name}
            ref={(el) => (cardRefs.current[id] = el)}
            style={
              dragging
                ? { transform: `translate(${drag.dx}px, ${drag.dy}px)`, zIndex: 40, position: "relative" }
                : undefined
            }
            className={`break-inside-avoid mb-4 p-3 md:p-4 rounded-3xl bg-white/5 border flex flex-col shadow-lg transition-[border-color,box-shadow] duration-200 ${
              dragging
                ? "border-gold shadow-2xl shadow-black/60"
                : overId === id
                  ? "border-gold/70"
                  : "border-white/10"
            }`}
          >
            <div
              onPointerDown={(e) => startDrag(e, id)}
              className={`flex items-center gap-3 mb-3 pb-2 border-b border-white/10 select-none ${
                canDrag ? "cursor-grab active:cursor-grabbing touch-none" : ""
              }`}
              title={canDrag ? "Drag to swap with another box" : undefined}
            >
              <div className="w-2 h-2 rounded-full bg-gold" />
              <h4 className="text-base md:text-lg font-medium text-white">{category.name}</h4>
              {canDrag && (
                <Icon icon="lucide:grip-vertical" className="ml-auto size-4 text-white/30" />
              )}
            </div>
            <SkillArena skills={category.skills} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillMatrix;
