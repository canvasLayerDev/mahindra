"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useCursor } from "@/lib/hooks/useCursor";
import { getReducedMotion } from "@/lib/motion";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { variant, cursorText } = useCursor();
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if touch device or reduced motion
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = getReducedMotion();

    if (touchDevice || reducedMotion) {
      setIsTouch(true);
      return;
    }

    setIsTouch(false);
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center offset based on scale
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || isTouch) return;

    if (variant === "view") {
      gsap.to(cursor, {
        width: 72,
        height: 72,
        backgroundColor: "#DC3A2C",
        borderColor: "transparent",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else if (variant === "ring") {
      gsap.to(cursor, {
        width: 44,
        height: 44,
        backgroundColor: "transparent",
        borderColor: "#DC3A2C",
        borderWidth: 1.5,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else if (variant === "hidden") {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
      });
    } else {
      // default
      gsap.to(cursor, {
        width: 10,
        height: 10,
        backgroundColor: "#DC3A2C",
        borderColor: "transparent",
        borderWidth: 0,
        opacity: 0.85,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [variant, isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[99999] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center mix-blend-difference select-none"
      style={{
        width: 10,
        height: 10,
        backgroundColor: "#DC3A2C",
      }}
    >
      {variant === "view" && (
        <span className="t-label text-[10px] font-bold tracking-widest text-ink-900">
          {cursorText || "VIEW"}
        </span>
      )}
    </div>
  );
}
