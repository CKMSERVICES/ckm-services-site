"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let rippleId = 0;

export default function WaterDropEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    function handlePointerDown(event: PointerEvent) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const id = rippleId++;
      setRipples((prev) => [
        ...prev.slice(-6),
        { id, x: event.clientX, y: event.clientY },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 750);
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: ripple.x,
              top: ripple.y,
              width: 90,
              height: 90,
              marginLeft: -45,
              marginTop: -45,
              borderRadius: "9999px",
              background:
                "radial-gradient(circle, rgba(34,221,198,0.55) 0%, rgba(157,232,37,0.25) 45%, rgba(34,221,198,0) 70%)",
              border: "1px solid rgba(147,251,233,0.6)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
