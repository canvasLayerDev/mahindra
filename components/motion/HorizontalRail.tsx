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

interface HorizontalRailProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function HorizontalRail({
  children,
  className,
  disabled = false,
}: HorizontalRailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const rail = railRef.current;
      if (!section || !rail || disabled || getReducedMotion()) return;

      // Only pin on desktop >= 1024px
      if (window.innerWidth < 1024) return;

      const getScrollAmount = () => {
        return rail.scrollWidth - window.innerWidth;
      };

      const scrollAmount = getScrollAmount();
      if (scrollAmount <= 0) return;

      // Pin & Scroll Tween
      const tween = gsap.to(rail, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          invalidateOnRefresh: true,
        },
      });

      // Velocity Skew Effect
      const skewSetter = gsap.quickSetter(rail, "skewX", "deg");
      const clampSkew = gsap.utils.clamp(-6, 6);

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const targetSkew = clampSkew(velocity / -300);
          skewSetter(targetSkew);
          gsap.to(rail, {
            skewX: 0,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [disabled] }
  );

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative w-full overflow-hidden lg:h-screen lg:flex lg:items-center",
        className
      )}
    >
      {/* Rail Container — Mobile: Snap Scroll Row, Desktop: Pinned GSAP Row */}
      <div
        ref={railRef}
        className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 px-6 py-8 scrollbar-none lg:w-max lg:overflow-visible lg:snap-none lg:px-[120px]"
      >
        {children}
      </div>
    </div>
  );
}
