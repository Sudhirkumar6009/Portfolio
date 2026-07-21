"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

const getContainingBlock = (element: Element | null): Element | null => {
  let node = element?.parentElement as Element | null;
  while (node && node !== document.documentElement) {
    const style = getComputedStyle(node as Element);
    if (
      style.transform !== "none" ||
      style.perspective !== "none" ||
      style.filter !== "none" ||
      style.willChange.includes("transform") ||
      style.willChange.includes("perspective") ||
      style.willChange.includes("filter") ||
      /paint|layout|strict|content/.test(style.contain)
    ) return node;
    node = (node as HTMLElement).parentElement;
  }
  return null;
};

const getContainingBlockOffset = (block: Element | null) => {
  if (!block) return { x: 0, y: 0 };
  const rect = block.getBoundingClientRect();
  return { x: rect.left + (block as HTMLElement).clientLeft, y: rect.top + (block as HTMLElement).clientTop };
};

type TargetCursorProps = {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  parallaxOn?: boolean;
  cursorColor?: string;
  cursorColorOnTarget?: string;
};

export default function TargetCursor({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
  cursorColor = "#22c55e",
  cursorColorOnTarget = "#4ade80",
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<Element> | null>(null);
  const spinTl = useRef<gsap.core.Timeline | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const containingBlockRef = useRef<Element | null>(null);
  const isActiveRef = useRef(false);
  const targetCornerPositionsRef = useRef<{ x: number; y: number }[] | null>(null);
  const tickerFnRef = useRef<(() => void) | null>(null);
  const activeStrengthRef = useRef({ current: 0 });

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const ua = navigator.userAgent || "";
    return (hasTouchScreen && isSmallScreen) || /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
  }, []);

  const constants = useMemo(() => ({ borderWidth: 2, cornerSize: 12 }), []);

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    const { x: ox, y: oy } = getContainingBlockOffset(containingBlockRef.current);
    gsap.to(cursorRef.current, { x: x - ox, y: y - oy, duration: 0.1, ease: "power3.out" });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;
    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) document.body.style.cursor = "none";

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");
    containingBlockRef.current = getContainingBlock(cursor);
    const getOffset = () => getContainingBlockOffset(containingBlockRef.current);

    let activeTarget: Element | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const cleanupTarget = (target: Element) => {
      if (currentLeaveHandler) target.removeEventListener("mouseleave", currentLeaveHandler);
      currentLeaveHandler = null;
    };

    const initialOffset = getOffset();
    gsap.set(cursor, {
      xPercent: -50, yPercent: -50,
      x: window.innerWidth / 2 - initialOffset.x,
      y: window.innerHeight / 2 - initialOffset.y,
    });

    const createSpinTimeline = () => {
      spinTl.current?.kill();
      spinTl.current = gsap.timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };
    createSpinTimeline();

    const tickerFn = () => {
      if (!targetCornerPositionsRef.current || !cursorRef.current || !cornersRef.current) return;
      const strength = activeStrengthRef.current.current;
      if (strength === 0) return;
      const cursorX = gsap.getProperty(cursorRef.current, "x") as number;
      const cursorY = gsap.getProperty(cursorRef.current, "y") as number;
      Array.from(cornersRef.current).forEach((corner, i) => {
        const currentX = gsap.getProperty(corner, "x") as number;
        const currentY = gsap.getProperty(corner, "y") as number;
        const targetX = targetCornerPositionsRef.current![i].x - cursorX;
        const targetY = targetCornerPositionsRef.current![i].y - cursorY;
        const finalX = currentX + (targetX - currentX) * strength;
        const finalY = currentY + (targetY - currentY) * strength;
        const dur = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;
        gsap.to(corner, { x: finalX, y: finalY, duration: dur, ease: dur === 0 ? "none" : "power1.out", overwrite: "auto" });
      });
    };
    tickerFnRef.current = tickerFn;

    const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursor, { scale: 0.9, duration: 0.2 });
    };
    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    const enterHandler = (e: MouseEvent) => {
      let current = e.target as Element | null;
      let target: Element | null = null;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) { target = current; break; }
        current = current.parentElement;
      }
      if (!target || !cursorRef.current || !cornersRef.current) return;
      if (activeTarget === target) return;
      if (activeTarget) cleanupTarget(activeTarget);
      if (resumeTimeout) { clearTimeout(resumeTimeout); resumeTimeout = null; }

      activeTarget = target;
      const corners = Array.from(cornersRef.current);
      corners.forEach(c => gsap.killTweensOf(c, "x,y"));
      gsap.killTweensOf(cursor, "rotation");
      spinTl.current?.pause();
      gsap.set(cursor, { rotation: 0 });

      if (cursorColorOnTarget) {
        gsap.to(corners, { borderColor: cursorColorOnTarget, duration: 0.15, ease: "power2.out" });
        if (dotRef.current) gsap.to(dotRef.current, { backgroundColor: cursorColorOnTarget, duration: 0.15, ease: "power2.out" });
      }

      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;
      const { x: ox, y: oy } = getOffset();
      const cursorX = gsap.getProperty(cursor, "x") as number;
      const cursorY = gsap.getProperty(cursor, "y") as number;

      targetCornerPositionsRef.current = [
        { x: rect.left - borderWidth - ox,                    y: rect.top - borderWidth - oy },
        { x: rect.right + borderWidth - cornerSize - ox,      y: rect.top - borderWidth - oy },
        { x: rect.right + borderWidth - cornerSize - ox,      y: rect.bottom + borderWidth - cornerSize - oy },
        { x: rect.left - borderWidth - ox,                    y: rect.bottom + borderWidth - cornerSize - oy },
      ];

      isActiveRef.current = true;
      gsap.ticker.add(tickerFnRef.current!);
      gsap.to(activeStrengthRef.current, { current: 1, duration: hoverDuration, ease: "power2.out" });

      corners.forEach((corner, i) => {
        gsap.to(corner, {
          x: targetCornerPositionsRef.current![i].x - cursorX,
          y: targetCornerPositionsRef.current![i].y - cursorY,
          duration: 0.2, ease: "power2.out",
        });
      });

      const leaveHandler = () => {
        gsap.ticker.remove(tickerFnRef.current!);
        isActiveRef.current = false;
        targetCornerPositionsRef.current = null;
        gsap.set(activeStrengthRef.current, { current: 0, overwrite: true });
        activeTarget = null;

        if (cursorColorOnTarget && cornersRef.current) {
          gsap.to(Array.from(cornersRef.current), { borderColor: cursorColor, duration: 0.15, ease: "power2.out" });
          if (dotRef.current) gsap.to(dotRef.current, { backgroundColor: cursorColor, duration: 0.15, ease: "power2.out" });
        }

        if (cornersRef.current) {
          const cs = Array.from(cornersRef.current);
          gsap.killTweensOf(cs, "x,y");
          const { cornerSize: cs2 } = constants;
          const positions = [
            { x: -cs2 * 1.5, y: -cs2 * 1.5 }, { x: cs2 * 0.5, y: -cs2 * 1.5 },
            { x: cs2 * 0.5, y: cs2 * 0.5 },   { x: -cs2 * 1.5, y: cs2 * 0.5 },
          ];
          const tl = gsap.timeline();
          cs.forEach((c, idx) => tl.to(c, { x: positions[idx].x, y: positions[idx].y, duration: 0.3, ease: "power3.out" }, 0));
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
            spinTl.current.kill();
            spinTl.current = gsap.timeline({ repeat: -1 })
              .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
          }
          resumeTimeout = null;
        }, 50);
        cleanupTarget(target!);
      };
      currentLeaveHandler = leaveHandler;
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler as EventListener, { passive: true });
    const resizeHandler = () => { containingBlockRef.current = getContainingBlock(cursor); };
    window.addEventListener("resize", resizeHandler);

    return () => {
      if (tickerFnRef.current) gsap.ticker.remove(tickerFnRef.current);
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler as EventListener);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      if (activeTarget) cleanupTarget(activeTarget);
      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
      isActiveRef.current = false;
      targetCornerPositionsRef.current = null;
      activeStrengthRef.current.current = 0;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor, isMobile, hoverDuration, parallaxOn, cursorColor, cursorColorOnTarget]);

  if (isMobile) return null;

  return (
    <div ref={cursorRef} className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]" style={{ willChange: "transform" }}>
      <div ref={dotRef} className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform", backgroundColor: cursorColor, borderRadius: 0 }} />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[2px] -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0"
        style={{ willChange: "transform", borderColor: cursorColor }} />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[2px] translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0"
        style={{ willChange: "transform", borderColor: cursorColor }} />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[2px] translate-x-1/2 translate-y-1/2 border-l-0 border-t-0"
        style={{ willChange: "transform", borderColor: cursorColor }} />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[2px] -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0"
        style={{ willChange: "transform", borderColor: cursorColor }} />
    </div>
  );
}
