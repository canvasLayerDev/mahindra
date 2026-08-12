
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

// Text color + font as requested — change fontFamily below if you want a different
// (non-Inter) typeface, this just falls back to the system font stack.
const TEXT_STYLE: React.CSSProperties = {
  color: "#1a1a1a",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simple scroll fade — removed the extra scale/parallax layering for a cleaner feel
  useGSAP(
    () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content || isMobile || getReducedMotion()) return;

      gsap.to(content, {
        yPercent: -20,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-dvh w-full items-end overflow-hidden  pb-12 pt-24 lg:pb-16 lg:pt-32"
    >
      {/* Background media */}
      <div ref={mediaWrapRef} className="absolute inset-0 h-full w-full overflow-hidden">
        {!isMobile ? (
          <video
            src="/Mahindra_brand_corporate_film_an…_202608121104.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src="https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-amc-Library/default/dwc86ca91f/homepage/bannerWithTextAndCta_Desktop_1.jpg"
            alt="Mahindra Rise Hero"
            fill
            priority
            className="object-cover"
          />
        )}
      </div>

      {/* Light overlay — kept subtle so the requested dark text (#1a1a1a) stays readable */}
      <div className="absolute inset-0 z-10 bg-white/0 pointer-events-none" />



      {/* Hero Headline */}
      <div className="absolute top-[15%] lg:top-[20%] left-6 lg:left-[120px] z-20 flex items-start">
        {/* Decorative red angled line */}

        <h1 className="font-display text-4xl md:text-5xl text-[#fff] uppercase leading-[1.1] tracking-wider drop-shadow-sm">
          PURPOSE LED,<br />
          PERFORMANCE DRIVEN,<br />
          FUTURE READY.
        </h1>

      </div>

      {/* Foreground content */}
      <div
        ref={contentRef}
        className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-[120px]"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* CTA chips */}
          <div className="flex flex-wrap items-center gap-3">
            {HERO_CHIPS.map((chip) => (
              <HeroChip key={chip.label} label={chip.label} href={chip.href} />
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-6 right-6 lg:bottom-18 lg:right-12 z-20 flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-6 border border-white/20 shadow-lg">
        <a href="#" className="text-white hover:text-ember transition-colors drop-shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
        <a href="#" className="text-white hover:text-ember transition-colors drop-shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
        </a>
        <a href="#" className="text-white hover:text-ember transition-colors drop-shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </a>
        <a href="#" className="text-white hover:text-ember transition-colors drop-shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
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
      className=" border border-[#1a1a1a]/20 bg-white/80 px-4 py-2 text-[11px] font-bold backdrop-blur-md transition-all duration-300 hover:border-ember hover:bg-white hover:text-ember shadow-sm"
      style={TEXT_STYLE}
      onMouseEnter={() => setVariant("ring")}
      onMouseLeave={() => setVariant("default")}
    >
      {label}
    </Link>
  );
}
