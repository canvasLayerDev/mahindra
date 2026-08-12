"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useCursor } from "@/lib/hooks/useCursor";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { NavOverlay } from "./NavOverlay";

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setVariant } = useCursor();
  const magneticMenuRef = useMagnetic<HTMLButtonElement>({ radius: 60, maxDistance: 10 });

  // Hide on scroll-down, reveal on scroll-up
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastScrollY = window.scrollY;
    const yTo = gsap.quickTo(nav, "yPercent", {
      duration: 0.4,
      ease: "power2.out",
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY && !menuOpen) {
        yTo(-100);
      } else {
        yTo(0);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[9980] flex items-center justify-between px-6 py-6 lg:px-[120px] lg:py-8 mix-blend-difference pointer-events-none transition-transform will-change-transform"
      >
        {/* Left Logo */}
        <Link
          href="/"
          className="pointer-events-auto relative block h-7 w-40 lg:h-8 lg:w-48"
          onMouseEnter={() => setVariant("ring")}
          onMouseLeave={() => setVariant("default")}
        >
          <Image
            src="https://www.mahindra.com/sites/default/files/2025-07/mahindra-red-logo.webp"
            alt="Mahindra Rise"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Right Links & Menu Trigger */}
        <nav className="pointer-events-auto flex items-center gap-8 lg:gap-12">
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              HOME
            </Link>
            <Link
              href="/automotive"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/automotive" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              AUTOMOTIVE
            </Link>
            <Link
              href="/businesses"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/businesses" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              BUSINESSES
            </Link>
            <Link
              href="/leadership"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/leadership" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              LEADERSHIP
            </Link>
            <Link
              href="/investors"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/investors" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              INVESTORS
            </Link>
            <Link
              href="/careers"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/careers" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              CAREERS
            </Link>
            <Link
              href="/contact"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/contact" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              CONTACT
            </Link>
          </div>

          {/* Menu Trigger Button */}
          <button
            ref={magneticMenuRef}
            onClick={() => setMenuOpen(true)}
            className="t-label flex items-center gap-2 rounded-full border border-bone/40 bg-ink-900/60 px-5 py-2.5 backdrop-blur-md text-bone font-bold transition-all duration-300 hover:border-ember hover:text-ember"
            onMouseEnter={() => setVariant("ring")}
            onMouseLeave={() => setVariant("default")}
          >
            <Image
              src="https://www.mahindra.com/sites/default/files/2025-07/mahindra-red-logo.webp"
              alt="Mahindra Rise"
              fill
              sizes="(max-width: 1024px) 150px, 180px"
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Center/Right: Desktop Navigation Links */}
          <nav className="flex items-center gap-6 lg:gap-8">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                href="/"
                className={`font-mono text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${
                  pathname === "/" ? "text-ember" : "text-black hover:text-ember"
                }`}
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
              >
                HOME
              </Link>
              <Link
                href="/automotive"
                className={`font-mono text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${
                  pathname === "/automotive" ? "text-ember" : "text-black hover:text-ember"
                }`}
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
              >
                AUTOMOTIVE
              </Link>
              <Link
                href="/#what-we-do"
                className="font-mono text-xs uppercase tracking-wider font-bold text-black transition-colors duration-300 hover:text-ember"
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
              >
                INDUSTRIES
              </Link>
              <Link
                href="/about"
                className={`font-mono text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${
                  pathname === "/about" ? "text-ember" : "text-black hover:text-ember"
                }`}
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
              >
                THE GROUP
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Fullscreen Overlay Menu Trigger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 border border-black/20 bg-black/5 px-4 py-2 text-black transition-all duration-300 hover:bg-black hover:text-white"
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
                aria-label="Open Navigation Menu"
              >
                <span>MENU</span>
                <span className="text-ember font-bold">☰</span>
              </button>

              {/* Contact CTA */}
              <Link
                href="/contact"
                ref={magneticMenuRef}
                className="hidden sm:flex font-mono text-xs uppercase tracking-wider font-bold items-center gap-2 border border-ember bg-ember px-4 py-2 text-white shadow-sm transition-all duration-300 hover:bg-black hover:border-black hover:text-white"
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
              >
                <span className="h-2 w-2 bg-white animate-pulse" />
                <span>Let&apos;s Connect</span>
              </Link>
            </div>
          </nav>
        </header>
      </div>

      {/* Fullscreen Navigation Overlay */}
      <NavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
