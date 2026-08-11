"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "@/components/motion/RevealText";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { useCursor } from "@/lib/hooks/useCursor";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_CHIPS = [
  { label: "Buy an SUV", href: "/automotive" },
  { label: "Explore our tractors", href: "#what-we-do" },
  { label: "Experience the latest AI", href: "#news" },
  { label: "Get a loan", href: "#what-we-do" },
  { label: "Book a holiday", href: "#what-we-do" },
  { label: "Buy a home", href: "#what-we-do" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { setVariant } = useCursor();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Listen for preloader:done custom event
    const handlePreloaderDone = () => {
      setPreloaderDone(true);
    };
    window.addEventListener("preloader:done", handlePreloaderDone);

    // If preloader was already seen, trigger immediately
    if (sessionStorage.getItem("mahindra_preloader_seen")) {
      setPreloaderDone(true);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("preloader:done", handlePreloaderDone);
    };
  }, []);

  // Scroll parallax animation
  useGSAP(
    () => {
      const container = containerRef.current;
      const mediaWrap = mediaWrapRef.current;
      const content = contentRef.current;
      if (!container || isMobile || getReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      if (mediaWrap) {
        tl.to(mediaWrap, { scale: 1.0, ease: "none" }, 0);
      }
      if (content) {
        tl.to(content, { yPercent: -30, opacity: 0, ease: "none" }, 0);
      }
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-dvh w-full items-end overflow-hidden bg-ink-900 pb-12 pt-24 lg:pb-16 lg:pt-32"
    >
      {/* Background Media — Full HD YouTube Embed (1p56Zn5TpuI) */}
      {!isMobile ? (
        <div
          ref={mediaWrapRef}
          className="absolute inset-0 h-full w-full overflow-hidden scale-[1.2] will-change-transform"
        >
          <iframe
            src="https://www.youtube.com/embed/1p56Zn5TpuI?autoplay=1&mute=1&loop=1&playlist=1p56Zn5TpuI&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&vq=hd1080"
            title="Mahindra Full HD Hero Background"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="pointer-events-none absolute inset-0 h-[140%] w-[140%] -left-[20%] -top-[20%] object-cover border-0"
          />
        </div>
      ) : (
        <Image
          src="https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-amc-Library/default/dwc86ca91f/homepage/bannerWithTextAndCta_Desktop_1.jpg"
          alt="Mahindra Rise Hero"
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Dark Overlay Gradient for Perfect Contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,16,18,0.4) 0%, rgba(15,16,18,0.2) 40%, rgba(15,16,18,0.85) 100%)",
        }}
      />

      {/* Top Corner Stamps */}
      <div className="absolute top-28 left-6 z-20 flex items-center gap-4 lg:left-[120px]">
        <div className="t-label border-l-2 border-ember pl-3 text-white font-bold">
          SINCE 1945 · 81 YEARS
        </div>
      </div>

      <div className="absolute top-24 right-6 z-20 lg:right-[120px]">
        <Image
          src="https://www.mahindra.com/sites/default/files/2025-10/80thYearLogo_Gold.webp"
          alt="80th Year Gold Logo"
          width={72}
          height={72}
          priority
          className="h-14 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Main Hero Foreground Content */}
      <div
        ref={contentRef}
        className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]"
      >
        {preloaderDone && (
          <RevealText as="h1" split="lines" className="t-hero text-white drop-shadow-lg">
            PURPOSE LED,
            <br />
            PERFORMANCE DRIVEN,
            <br />
            <span className="text-ember">FUTURE READY.</span>
          </RevealText>
        )}

        {/* Bottom Bar: CTA Chips + Scroll Cue */}
        <div className="mt-8 flex flex-col gap-6 lg:mt-12 lg:flex-row lg:items-end lg:justify-between">
          {/* CTA Chips Row */}
          <div className="flex flex-wrap items-center gap-3">
            {HERO_CHIPS.map((chip) => (
              <HeroChip key={chip.label} label={chip.label} href={chip.href} />
            ))}
          </div>

          {/* Bottom Right Scroll Indicator */}
          <div className="flex items-center gap-3 self-end text-white/80 font-bold">
            <span className="t-label text-white">SCROLL</span>
            <div className="relative h-10 w-px bg-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-ember animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroChip({ label, href }: { label: string; href: string }) {
  const chipRef = useMagnetic<HTMLAnchorElement>({ radius: 50, maxDistance: 8 });
  const { setVariant } = useCursor();

  return (
    <Link
      ref={chipRef}
      href={href}
      className="t-label rounded-full border border-white/30 bg-black/40 px-4 py-2 text-[11px] text-white font-bold backdrop-blur-md transition-all duration-300 hover:border-ember hover:bg-black/60 hover:text-ember"
      onMouseEnter={() => setVariant("ring")}
      onMouseLeave={() => setVariant("default")}
    >
      {label}
    </Link>
  );
}
