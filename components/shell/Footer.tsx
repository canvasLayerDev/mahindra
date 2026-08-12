"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VERTICALS = [
  "Automotive",
  "Farm Equipment",
  "Financial Services",
  "Technology Services",
  "Hospitality",
  "Logistics",
  "Real Estate",
  "Renewable Energy",
  "Emerging Businesses",
];

const CTAS = [
  { label: "Buy an SUV", href: "/automotive" },
  { label: "Explore our tractors", href: "/#what-we-do" },
  { label: "Experience the latest AI", href: "/#news" },
  { label: "Get a loan", href: "/#what-we-do" },
  { label: "Book a holiday", href: "/#what-we-do" },
  { label: "Buy a home", href: "/#what-we-do" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const riseTextRef = useRef<HTMLHeadingElement>(null);
  const { setVariant } = useCursor();

  useGSAP(
    () => {
      const riseEl = riseTextRef.current;
      if (!riseEl) return;

      gsap.fromTo(
        riseEl,
        { color: "#E2E8F0" },
        {
          color: "#0D0E10",
          scrollTrigger: {
            trigger: riseEl,
            start: "top 90%",
            end: "bottom 40%",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full border-t border-line bg-ink-900 pt-20 pb-12 text-bone"
    >
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col justify-between gap-8 pb-16 lg:flex-row lg:items-end">
          <div>
            <Image
              src="https://www.mahindra.com/sites/default/files/2025-07/mahindra-red-logo.webp"
              alt="Mahindra Rise"
              width={200}
              height={36}
              style={{ width: "auto", height: "auto" }}
              className="h-9 w-auto"
            />
            <p className="font-body text-[clamp(20px,1.6vw,28px)] leading-tight mt-6 text-bone-dim">
              Purpose Led. Performance Driven. Future Ready.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/mahindra-&amp;-mahindra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center border border-line bg-ink-800 text-bone transition-colors hover:border-ember hover:text-ember"
              aria-label="LinkedIn"
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
              </svg>
            </a>
            {/* X / Twitter Icon */}
            <a
              href="https://twitter.com/MahindraRise"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center border border-line bg-ink-800 text-bone transition-colors hover:border-ember hover:text-ember"
              aria-label="Twitter X"
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hairline mb-16" />

        {/* 3 Column Links Grid */}
        <Grid cols={3} className="gap-12 lg:gap-16">
          {/* Col 1: Business Verticals */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium mb-6 text-ember font-bold">(01) BUSINESS VERTICALS</p>
            <ul className="space-y-3">
              {VERTICALS.map((item) => (
                <li key={item}>
                  <Link
                    href="/#what-we-do"
                    className="text-sm font-medium text-bone-dim transition-colors hover:text-bone"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Action CTAs */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium mb-6 text-ember font-bold">(02) QUICK ACTIONS</p>
            <ul className="space-y-3">
              {CTAS.map((cta) => (
                <li key={cta.label}>
                  <Link
                    href={cta.href}
                    className="group flex items-center justify-between text-sm font-medium text-bone transition-colors hover:text-ember"
                  >
                    <span>{cta.label}</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Address & Info */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium mb-6 text-ember font-bold">(03) HEADQUARTERS</p>
            <p className="font-body text-base leading-relaxed text-bone-dim mb-4">
              Mahindra Towers, Dr. G.M. Bhosale Marg, P.K. Kurne Chowk, Worli,
              Mumbai 400018
            </p>
            <p className="font-mono text-xs uppercase tracking-wider font-medium mt-8 text-bone-dim">SINCE 1945 · 81 YEARS</p>
          </div>
        </Grid>

        {/* Giant RISE. Word with Scroll-scrub fill */}
        <div className="mt-20 overflow-hidden text-center select-none">
          <h2
            ref={riseTextRef}
            className="font-display text-[clamp(80px,18vw,320px)] uppercase leading-none tracking-tight font-extrabold text-line transition-colors duration-200"
          >
            RISE.
          </h2>
        </div>

        {/* Bottom copyright row */}
        <div className="hairline mt-12 mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="font-mono text-xs uppercase tracking-wider font-medium">
            © 2026 MAHINDRA &amp; MAHINDRA LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim">
            UNOFFICIAL CONCEPT REDESIGN · CREATED FOR AWWWARDS PRESENTATION
          </p>
        </div>
      </Container>
    </footer>
  );
}
