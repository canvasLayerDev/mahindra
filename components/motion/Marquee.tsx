"use client";

import { useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // Base speed factor (default 1)
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  disabled?: boolean;
}

export function Marquee({
  children,
  speed = 1,
  direction = "left",
  pauseOnHover = true,
  className,
  disabled = false,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container || disabled || getReducedMotion()) return;

      const firstChild = track.children[0] as HTMLElement;
      if (!firstChild) return;

      const totalWidth = firstChild.offsetWidth;
      const dir = direction === "left" ? -1 : 1;
      let currentX = 0;

      const speedScale = { value: 1 };

      // Base tick loop
      const tickerCallback = () => {
        if (isHovered && pauseOnHover) return;

        const delta = speed * 1.5 * dir * speedScale.value;
        currentX += delta;

        if (direction === "left" && Math.abs(currentX) >= totalWidth) {
          currentX = 0;
        } else if (direction === "right" && currentX >= 0) {
          currentX = -totalWidth;
        }

        gsap.set(track, { x: currentX });
      };

      gsap.ticker.add(tickerCallback);

      // Scroll velocity boost
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity() / 300);
          gsap.to(speedScale, {
            value: 1 + velocity,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });

      return () => {
        gsap.ticker.remove(tickerCallback);
        st.kill();
      };
    },
    { scope: containerRef, dependencies: [speed, direction, isHovered, disabled] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={trackRef} className="flex w-max items-center whitespace-nowrap">
        <div className="flex items-center gap-8 px-4">{children}</div>
        <div className="flex items-center gap-8 px-4">{children}</div>
        <div className="flex items-center gap-8 px-4">{children}</div>
      </div>
    </div>
  );
}
