"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrubTextProps {
  children: string;
  className?: string;
  disabled?: boolean;
}

export function ScrubText({
  children,
  className,
  disabled = false,
}: ScrubTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || disabled || getReducedMotion()) return;

      const words = container.querySelectorAll(".scrub-word");
      if (!words.length) return;

      gsap.fromTo(
        words,
        { opacity: 0.2, color: "#8E8C87" },
        {
          opacity: 1,
          color: "#0D0E10", // Crisp Charcoal Black for Light Theme
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [children, disabled] }
  );

  const text = typeof children === "string" ? children : "";
  const wordList = text.split(/\s+/).filter(Boolean);

  return (
    <p
      ref={containerRef}
      className={cn("leading-snug will-change-transform", className)}
    >
      {wordList.map((word, idx) => (
        <span
          key={idx}
          className="scrub-word inline-block mr-[0.25em] transition-colors duration-100"
          style={{ opacity: 0.2, color: "#8E8C87" }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
