"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { EASE } from "@/lib/motion";
import { useCursor } from "@/lib/hooks/useCursor";

const NAV_LINKS = [
  {
    label: "HOME",
    href: "/",
    num: "(01)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp",
  },
  {
    label: "AUTOMOTIVE",
    href: "/automotive",
    num: "(02)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp",
  },
  {
    label: "BUSINESSES",
    href: "/businesses",
    num: "(03)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Financial%20Services.webp",
  },
  {
    label: "LEADERSHIP",
    href: "/leadership",
    num: "(04)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp",
  },
  {
    label: "INVESTORS",
    href: "/investors",
    num: "(05)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Renewable%20Services.webp",
  },
  {
    label: "CAREERS",
    href: "/careers",
    num: "(06)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Real%20Estate%20Services.webp",
  },
  {
    label: "THE GROUP",
    href: "/about",
    num: "(07)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp",
  },
  {
    label: "CONTACT US",
    href: "/contact",
    num: "(08)",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp",
  },
];

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const { setVariant } = useCursor();

  // Handle cursor-following image preview
  useEffect(() => {
    if (!isOpen) return;

    const preview = previewRef.current;
    if (!preview) return;

    const xTo = gsap.quickTo(preview, "x", { duration: 0.3, ease: "power2.out" });
    const yTo = gsap.quickTo(preview, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  // Open / Close animation via clip-path
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const links = overlay.querySelectorAll(".nav-overlay-link");
    const labelItems = overlay.querySelectorAll(".nav-overlay-label");

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlay, {
        clipPath: "circle(150% at 95% 5%)",
        duration: 1.1,
        ease: EASE.inOut,
        pointerEvents: "auto",
      });

      gsap.fromTo(
        links,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.9,
          delay: 0.3,
          ease: EASE.out,
        }
      );

      gsap.fromTo(
        labelItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          delay: 0.5,
          ease: "power2.out",
        }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(overlay, {
        clipPath: "circle(0% at 95% 5%)",
        duration: 0.8,
        ease: "power3.inOut",
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9990] flex flex-col justify-between bg-ink-900 px-6 py-12 text-bone lg:px-[120px] lg:py-16"
      style={{ clipPath: "circle(0% at 95% 5%)" }}
    >
      {/* Background Image Preview that follows cursor */}
      <div
        ref={previewRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[280px] w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0 shadow-2xl transition-opacity duration-300 will-change-transform"
        style={{ opacity: activeImage ? 0.85 : 0 }}
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt="Preview"
            fill
            className="object-cover"
            sizes="420px"
          />
        )}
      </div>

      {/* Header close trigger */}
      <div className="relative z-10 flex items-center justify-between border-b border-line pb-8">
        <span className="font-mono text-xs uppercase tracking-wider font-medium text-ember">NAVIGATION</span>
        <button
          onClick={onClose}
          className="font-mono text-xs uppercase tracking-wider font-medium flex items-center gap-2 text-bone transition-colors hover:text-ember"
          onMouseEnter={() => setVariant("ring")}
          onMouseLeave={() => setVariant("default")}
        >
          [ CLOSE ✕ ]
        </button>
      </div>

      {/* Main Links */}
      <div
        ref={containerRef}
        className="relative z-10 my-auto flex flex-col gap-4 py-8"
      >
        {NAV_LINKS.map((link) => (
          <div key={link.label} className="overflow-hidden">
            <Link
              href={link.href}
              onClick={onClose}
              className="nav-overlay-link group flex items-baseline gap-6 transition-colors duration-300 hover:text-ember"
              onMouseEnter={() => {
                setActiveImage(link.image);
                setVariant("ring");
              }}
              onMouseLeave={() => {
                setActiveImage(null);
                setVariant("default");
              }}
            >
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim transition-colors group-hover:text-ember">
                {link.num}
              </span>
              <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95]">{link.label}</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Footer Info inside Overlay */}
      <div className="nav-overlay-label relative z-10 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2 text-ember">HEADQUARTERS</p>
          <p className="text-sm text-bone-dim">
            Mahindra Towers, Dr. G.M. Bhosale Marg, Worli, Mumbai 400018
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2 text-ember">INQUIRIES</p>
          <p className="text-sm text-bone-dim">communications@mahindra.com</p>
        </div>
        <div className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim">SINCE 1945 · 81 YEARS</div>
      </div>
    </div>
  );
}
