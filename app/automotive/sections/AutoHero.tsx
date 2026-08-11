"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { getReducedMotion } from "@/lib/motion";

export function AutoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tharRef = useRef<HTMLDivElement>(null);
  const [tharImgError, setTharImgError] = useState(false);

  // Mouse tilt on Thar ROXX image
  useGSAP(
    () => {
      const container = containerRef.current;
      const thar = tharRef.current;
      if (!container || !thar || getReducedMotion()) return;

      if (window.matchMedia("(pointer: coarse)").matches) return;

      const xTo = gsap.quickTo(thar, "rotationY", { duration: 0.5, ease: "power2.out" });
      const yTo = gsap.quickTo(thar, "rotationX", { duration: 0.5, ease: "power2.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        xTo(mouseX * 12); // Max 6deg left/right
        yTo(-mouseY * 12);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-dvh w-full items-center overflow-hidden bg-ink-900 pt-32 pb-20"
    >
      {/* Background Poster Image */}
      <Image
        src="https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-amc-Library/default/dwc86ca91f/homepage/bannerWithTextAndCta_Desktop_1.jpg"
        alt="Mahindra SUV Lineup"
        fill
        priority
        className="object-cover opacity-25"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink-900/80 via-ink-900/40 to-ink-900" />

      {/* Content Grid */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <p className="t-label text-ember mb-4">(01) AUTOMOTIVE EXCELLENCE</p>
            <RevealText as="h1" split="lines" className="t-hero text-bone mb-6">
              YOUR DREAM SUV,
              <br />
              <span className="text-ember">JUST A FEW CLICKS AWAY.</span>
            </RevealText>
            <p className="t-lead text-bone-dim mb-8">
              We&apos;ve made booking your favourite SUV a breeze. Just login, review your
              details and pay to book.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <MagneticButton variant="ember" size="lg">
                Book Now
              </MagneticButton>
              <MagneticButton variant="ghost" size="lg">
                Know More
              </MagneticButton>
            </div>
          </div>

          {/* Right Floating 3D Thar ROXX Cut-out */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={tharRef}
              className="relative h-[320px] w-full max-w-[500px] lg:h-[400px] will-change-transform"
              style={{ perspective: 1000 }}
            >
              {tharImgError ? (
                <div className="flex h-full w-full items-center justify-center bg-ink-800 text-ember rounded-2xl p-6">
                  <span className="t-label font-bold text-center">THAR ROXX</span>
                </div>
              ) : (
                <Image
                  src="https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwa4de1cb1/images/TH5D/large/Thar_Roxx_602x339.png"
                  alt="Mahindra Thar ROXX"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  onError={() => setTharImgError(true)}
                  className="object-contain drop-shadow-[0_20px_50px_rgba(220,58,44,0.3)] animate-pulse"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
