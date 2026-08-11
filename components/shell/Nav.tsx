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
        className="fixed top-0 left-0 right-0 z-[9980] flex items-center justify-between px-6 py-4 lg:px-[120px] bg-white/85 backdrop-blur-xl border-b border-black/[0.08] shadow-sm pointer-events-auto transition-transform will-change-transform"
      >
        {/* Left Brand Logo */}
        <Link
          href="/"
          className="relative block h-7 w-40 lg:h-8 lg:w-48"
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

        {/* Right Navigation Links & Pill Menu Trigger */}
        <nav className="flex items-center gap-8 lg:gap-10">
          <div className="hidden md:flex items-center gap-8">
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
              href="/about"
              className={`t-label font-bold transition-colors duration-300 ${
                pathname === "/about" ? "text-ember" : "text-bone hover:text-ember"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              THE GROUP
            </Link>
          </div>

          {/* Menu Trigger Button */}
          <button
            ref={magneticMenuRef}
            onClick={() => setMenuOpen(true)}
            className="t-label flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2.5 text-bone font-bold shadow-sm transition-all duration-300 hover:border-ember hover:text-ember hover:shadow-md"
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
