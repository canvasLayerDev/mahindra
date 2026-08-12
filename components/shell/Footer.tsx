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

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Automotive", href: "/automotive" },
  { label: "Industries", href: "/#what-we-do" },
  { label: "The Group", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "X (Twitter)", href: "https://twitter.com/MahindraRise" },
  { label: "Instagram", href: "https://www.instagram.com/mahindra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mahindra-&amp;-mahindra/" },
  { label: "YouTube", href: "https://www.youtube.com/user/MahindraRise" },
];

const RESOURCE_LINKS = [
  { label: "Newsroom & Stories", href: "/#news" },
  { label: "Sustainability Report", href: "/#purpose-led" },
  { label: "Investor Relations", href: "/about" },
  { label: "Career & Culture", href: "/about" },
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
        titleEl,
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
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
              {MENU_LINKS.map((item) => (
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
            ref={titleRef}
            className="font-display text-[clamp(64px,16vw,260px)] uppercase leading-none tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20"
          >
            RISE
          </h2>
        </div>

        {/* Copyright Footer Sub-bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-center md:text-left text-gray-500 font-mono text-[11px] uppercase tracking-wider border-t border-white/10 mt-6">
          <p>© 2026 MAHINDRA &amp; MAHINDRA LTD. ALL RIGHTS RESERVED.</p>
          <p>PURPOSE LED · PERFORMANCE DRIVEN · FUTURE READY</p>
        </div>
      </Container>
    </footer>
  );
}


