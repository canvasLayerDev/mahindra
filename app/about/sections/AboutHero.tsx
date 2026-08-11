"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RevealText } from "@/components/motion/RevealText";
import { getReducedMotion } from "@/lib/motion";

export function AboutHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bg = bgRef.current;
    if (!bg || getReducedMotion()) return;

    gsap.to(bg, {
      scale: 1.06,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative flex h-dvh w-full items-end overflow-hidden bg-ink-900 pb-16 pt-32">
      {/* Background Banner with Slow Zoom */}
      <div ref={bgRef} className="absolute inset-0 z-0 h-full w-full opacity-25">
        <Image
          src="https://www.mahindra.com/sites/default/files/2023-10/Desktop-Innerpage.webp"
          alt="Mahindra Founders Tribute"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/80 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]">
        {/* Top Gold Badge */}
        <div className="mb-8 flex items-center gap-6">
          <Image
            src="https://www.mahindra.com/sites/default/files/2025-10/80thYearLogo_Gold.webp"
            alt="80th Year Gold Logo"
            width={80}
            height={80}
            priority
            className="h-16 w-auto object-contain"
          />
          <div className="t-label border-l-2 border-gold pl-4 text-gold">
            FOUNDERS&apos; DAY TRIBUTE · 81 YEARS
          </div>
        </div>

        {/* Char Reveal Headline */}
        <RevealText as="h1" split="lines" className="t-hero text-bone mb-6">
          PAYING TRIBUTE TO OUR
          <br />
          <span className="text-gold">VISIONARY FOUNDERS</span>
        </RevealText>

        <p className="t-lead text-bone-dim max-w-[55ch]">
          J. C. Mahindra &amp; K. C. Mahindra · Honouring seven decades of driving positive
          change and empowering communities to Rise.
        </p>
      </div>
    </div>
  );
}
