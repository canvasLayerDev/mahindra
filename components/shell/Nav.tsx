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
            <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
            <span>MENU</span>
          </button>
        </nav>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <NavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
