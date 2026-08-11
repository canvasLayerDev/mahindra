"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { getReducedMotion } from "@/lib/motion";

// Register GSAP plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider
 *
 * Initialises Lenis smooth scrolling and wires it into GSAP's ticker
 * so ScrollTrigger stays in sync. Respects prefers-reduced-motion.
 *
 * - lerp: 0.085 (smooth but not sluggish)
 * - wheelMultiplier: 1 (natural feel)
 * - Kills Lenis entirely under reduced-motion
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduced = getReducedMotion();

    // Don't initialise Lenis if user prefers reduced motion
    if (reduced) return;

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll position with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker for frame-perfect sync
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    // Disable Lenis's own rAF since GSAP is driving it
    gsap.ticker.lagSmoothing(0);

    // Configure ScrollTrigger for mobile stability
    ScrollTrigger.config({ ignoreMobileResize: true });

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Listen for reduced-motion changes (live toggle in OS settings)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches && lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return <>{children}</>;
}
