"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VERTICALS = [
  { name: "Automotive", href: "/automotive" },
  { name: "Farm Equipment", href: "/businesses" },
  { name: "Financial Services", href: "/businesses" },
  { name: "Technology Services", href: "/businesses" },
  { name: "Hospitality & Resorts", href: "/businesses" },
  { name: "Logistics", href: "/businesses" },
  { name: "Real Estate", href: "/businesses" },
  { name: "Renewable Energy", href: "/businesses" },
  { name: "Emerging Businesses", href: "/businesses" },
];

const CTAS = [
  { label: "Explore SUV Range", href: "/automotive" },
  { label: "Business Verticals", href: "/businesses" },
  { label: "Executive Leadership", href: "/leadership" },
  { label: "Financial Reports & Stocks", href: "/investors" },
  { label: "Career Opportunities", href: "/careers" },
  { label: "Contact Global Desk", href: "/contact" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { setVariant } = useCursor();

  useGSAP(
    () => {
      const titleEl = titleRef.current;
      if (!titleEl) return;

      gsap.fromTo(
        riseEl,
        { color: "#1C1C1F" },
        {
          color: "#F2F0EB",
          scrollTrigger: {
            trigger: titleEl,
            start: "top 95%",
            end: "bottom 60%",
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
      className="relative w-full bg-[#0A0A0D] text-white pt-16 pb-12 overflow-hidden border-t border-white/10"
    >
      <Container className="flex flex-col justify-between min-h-[500px]">
        {/* Top Header Row: Logo Left, Tagline Right */}
        <div className="flex items-center justify-between pb-12">
          {/* Logo */}
          <Link
            href="/"
            className="block relative shrink-0"
            onMouseEnter={() => setVariant("ring")}
            onMouseLeave={() => setVariant("default")}
          >
            <Image
              src="https://www.mahindra.com/sites/default/files/2025-07/mahindra-red-logo.webp"
              alt="Mahindra Rise"
              width={160}
              height={32}
              priority
              style={{ width: "auto", height: "auto" }}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Tagline */}
          <p className="font-mono text-xs uppercase tracking-widest font-bold text-gray-400">
            PURPOSE LED. PERFORMANCE DRIVEN.
          </p>
        </div>

        {/* Middle Columns Row with Top Line Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 py-12">
          {/* Column 1: MENU */}
          <div className="border-t border-white/25 pt-4">
            <h4 className="font-display text-sm uppercase tracking-widest text-white font-bold mb-6">
              MENU
            </h4>
            <ul className="space-y-3">
              {VERTICALS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-bone-dim transition-colors hover:text-ember"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: SOCIALS */}
          <div className="border-t border-white/25 pt-4">
            <h4 className="font-display text-sm uppercase tracking-widest text-white font-bold mb-6">
              SOCIALS
            </h4>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    onMouseEnter={() => setVariant("ring")}
                    onMouseLeave={() => setVariant("default")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: RESOURCES & SEND A MESSAGE ACTION */}
          <div className="border-t border-white/25 pt-4 flex flex-col justify-between">
            <div>
              <h4 className="font-display text-sm uppercase tracking-widest text-white font-bold mb-6">
                RESOURCES
              </h4>
              <ul className="space-y-3">
                {RESOURCE_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      onMouseEnter={() => setVariant("ring")}
                      onMouseLeave={() => setVariant("default")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
                className="inline-block font-mono text-xs uppercase tracking-wider font-bold border border-white/40 px-6 py-2.5 text-white transition-all duration-300 hover:bg-white hover:border-white hover:text-black"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Giant Brand Title */}
        <div className="mt-12 pt-6 overflow-hidden text-center select-none border-t border-white/10">
          <h2
            ref={riseTextRef}
            className="font-display text-[clamp(80px,18vw,320px)] uppercase leading-none tracking-tight font-extrabold text-ink-700 transition-colors duration-200"
          >
            RISE
          </h2>
        </div>

        {/* Bottom copyright row */}
        <div className="hairline mt-12 mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="t-label text-bone-dim">
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


