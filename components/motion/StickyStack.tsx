"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StickyStackProps {
  children: ReactNode[];
  className?: string;
  disabled?: boolean;
}

export function StickyStack({
  children,
  className,
  disabled = false,
}: StickyStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || disabled || getReducedMotion()) return;

      const cards = container.querySelectorAll(".sticky-card");
      if (cards.length < 2) return;

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card doesn't scale down

        gsap.to(card, {
          scale: 0.92,
          y: -20,
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef, dependencies: [disabled] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative flex flex-col gap-12 lg:gap-24", className)}
    >
      {children.map((child, idx) => (
        <div
          key={idx}
          className="sticky-card sticky top-24 z-10 w-full will-change-transform"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
