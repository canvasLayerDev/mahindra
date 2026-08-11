"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitTextToSpans } from "./SplitTextUtil";
import { DUR, EASE, STAG, getReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  split?: "lines" | "words" | "chars";
  className?: string;
  delay?: number;
  disabled?: boolean;
}

export function RevealText({
  children,
  as: Tag = "h2",
  split = "lines",
  className,
  delay = 0,
  disabled = false,
}: RevealTextProps) {
  const textRef = useRef<HTMLHeadingElement & HTMLParagraphElement & HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = textRef.current;
      if (!el || disabled || getReducedMotion()) return;

      const units = splitTextToSpans(el, split);
      const staggerTime = split === "lines" ? STAG.line : STAG.tight;

      gsap.fromTo(
        units,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: DUR.hero,
          delay,
          ease: EASE.out,
          stagger: staggerTime,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: textRef, dependencies: [children, split, disabled] }
  );

  return (
    <Tag ref={textRef} className={cn("will-change-transform", className)}>
      {children}
    </Tag>
  );
}
