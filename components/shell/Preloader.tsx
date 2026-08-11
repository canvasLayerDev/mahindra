"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DUR, EASE, getReducedMotion } from "@/lib/motion";

const PRELOAD_ASSETS = [
  "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-amc-Library/default/dwc86ca91f/homepage/bannerWithTextAndCta_Desktop_1.jpg",
  "https://www.mahindra.com/sites/default/files/2025-07/mahindra-red-logo.webp",
  "https://www.mahindra.com/sites/default/files/2025-10/80thYearLogo_Gold.webp",
];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check sessionStorage
    if (typeof window === "undefined") return;
    const hasSeen = sessionStorage.getItem("mahindra_preloader_seen");
    const reduced = getReducedMotion();

    if (hasSeen || reduced) {
      setVisible(false);
      window.dispatchEvent(new CustomEvent("preloader:done"));
      return;
    }

    // Asset Preloader logic
    let loadedCount = 0;
    const totalAssets = PRELOAD_ASSETS.length;

    const updateProgress = () => {
      loadedCount++;
      const pct = Math.min(100, Math.round((loadedCount / totalAssets) * 100));
      setProgress(pct);
    };

    // Preload image assets
    PRELOAD_ASSETS.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });

    // Fallback timer if network is slow
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Text animation & Exit animation on progress === 100
  useEffect(() => {
    if (!visible || progress < 100) return;

    const letters = textRef.current?.querySelectorAll(".preloader-char");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("mahindra_preloader_seen", "true");
          setVisible(false);
          window.dispatchEvent(new CustomEvent("preloader:done"));
        },
      });

      // Character stagger reveal if not done
      if (letters && letters.length > 0) {
        tl.fromTo(
          letters,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.04,
            duration: 0.8,
            ease: EASE.out,
          }
        );
      }

      // Hold briefly at 100
      tl.to({}, { duration: 0.3 });

      // Fade out characters and counter
      tl.to([textRef.current, counterRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
      });

      // Curtain wipe upward (left and right panels)
      tl.to(
        [leftCurtainRef.current, rightCurtainRef.current],
        {
          yPercent: -100,
          duration: DUR.hero,
          stagger: 0.08,
          ease: EASE.inOut,
        },
        "-=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [progress, visible]);

  if (!visible) return null;

  const brandText = "MAHINDRA";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-transparent pointer-events-auto"
    >
      {/* Left Curtain Panel */}
      <div
        ref={leftCurtainRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-ink-900 border-r border-line/30"
      />
      {/* Right Curtain Panel */}
      <div
        ref={rightCurtainRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-ink-900"
      />

      {/* Center Display Title */}
      <div
        ref={textRef}
        className="relative z-10 overflow-hidden flex items-center justify-center px-4"
      >
        <h1 className="t-hero tracking-widest text-bone flex overflow-hidden">
          {brandText.split("").map((char, idx) => (
            <span
              key={idx}
              className="preloader-char inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom Right Counter */}
      <div
        ref={counterRef}
        className="absolute bottom-8 right-8 z-10 flex items-baseline gap-2 font-mono text-xs uppercase tracking-widest text-bone-dim"
      >
        <span className="text-ember font-bold text-lg tabular-nums">
          {String(progress).padStart(3, "0")}
        </span>
        <span>/ 100</span>
      </div>
    </div>
  );
}
