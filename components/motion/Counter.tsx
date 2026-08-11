"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  disabled?: boolean;
}

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  disabled = false,
}: CounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(
    getReducedMotion() ? to : 0
  );

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || disabled || getReducedMotion()) {
        setDisplayValue(to);
        return;
      }

      const obj = { val: 0 };
      gsap.to(obj, {
        val: to,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          setDisplayValue(obj.val);
        },
      });
    },
    { scope: containerRef, dependencies: [to, disabled] }
  );

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <span
      ref={containerRef}
      className={cn("inline-block tabular-nums font-mono", className)}
      aria-live="polite"
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
