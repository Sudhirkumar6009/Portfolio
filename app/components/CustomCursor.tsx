"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      dotRef.current && (dotRef.current.style.opacity = "1");
      ringRef.current && (ringRef.current.style.opacity = "1");
    };
    const onLeave = () => {
      dotRef.current && (dotRef.current.style.opacity = "0");
      ringRef.current && (ringRef.current.style.opacity = "0");
    };

    const onDown = () => ringRef.current && (ringRef.current.style.transform += " scale(0.75)");
    const onUp   = () => {};

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#16a34a",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(22,163,74,0.6)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0,
          transition: "opacity 0.2s, width 0.15s, height 0.15s",
          willChange: "transform",
        }}
      />
    </>
  );
}
