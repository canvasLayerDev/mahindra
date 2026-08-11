"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { EASE, getReducedMotion } from "@/lib/motion";

interface MagneticOptions {
  radius?: number; // Distance threshold in px (default: 80)
  maxDistance?: number; // Max translation in px (default: 12)
}

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(
  options: MagneticOptions = {}
) {
  const ref = useRef<T>(null);
  const { radius = 80, maxDistance = 12 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || getReducedMotion()) return;

    // Check for touch device
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(element, "x", {
      duration: 0.4,
      ease: EASE.soft,
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: 0.4,
      ease: EASE.soft,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < radius) {
        const pull = (radius - distance) / radius;
        const targetX = (distanceX / distance) * maxDistance * pull;
        const targetY = (distanceY / distance) * maxDistance * pull;
        xTo(targetX);
        yTo(targetY);
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: EASE.elastic,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [radius, maxDistance]);

  return ref;
}
