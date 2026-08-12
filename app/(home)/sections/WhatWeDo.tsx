"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCursor } from "@/lib/hooks/useCursor";
import { getReducedMotion } from "@/lib/motion";

const INDUSTRIES = [
  {
    num: "01",
    eyebrow: "Since 1945",
    name: "Automotive",
    desc: "Transforming mobility with legendary SUVs, LCVs & electric powertrains.",
    image:
      "https://www.mahindra.com/sites/default/files/2025-01/Mahindra_BE-6%26-XEV-9-Banner-Global-Premiere-Banner_REVISED.webp",
    href: "/automotive",
  },
  {
    num: "02",
    eyebrow: "World's #1 by volume",
    name: "Farm Equipment",
    desc: "Empowering farmers worldwide with the world's #1 tractor brand by volume.",
    image:
      "https://www.mahindra.com/sites/default/files/2023-08/our-business-farm-equipment-spotlight-new.jpg",
    href: "/#what-we-do",
  },
  {
    num: "03",
    eyebrow: "Rural & semi-urban",
    name: "Financial Services",
    desc: "Enabling rural & semi-urban prosperity with tailormade financial solutions.",
    image:
      "/122776f7-3986-4424-abde-945bcfae9bd7.png",
    href: "/#what-we-do",
  },
  {
    num: "04",
    eyebrow: "Tech Mahindra · Bristlecone",
    name: "Technology Services",
    desc: "Driving next-gen digital transformation across global enterprises.",
    image:
      "/m4.png",
    href: "/#what-we-do",
  },
  {
    num: "05",
    eyebrow: "Club Mahindra",
    name: "Hospitality",
    desc: "Creating unforgettable family holiday experiences across destinations.",
    image:
      "/m5.png",
    href: "/#what-we-do",
  },
  {
    num: "06",
    eyebrow: "Integrated supply chain",
    name: "Logistics",
    desc: "Integrated supply chain & mobility solutions across sectors.",
    image:
      "/m6.png",
    href: "/#what-we-do",
  },
  {
    num: "07",
    eyebrow: "Mahindra Lifespaces",
    name: "Real Estate",
    desc: "Building sustainable urban habitats & spaces for modern living.",
    image:
      "/m7.png",
    href: "/#what-we-do",
  },
  {
    num: "08",
    eyebrow: "Mahindra Susten",
    name: "Renewable Energy",
    desc: "Powering the green transition with utility-scale solar plants.",
    image:
      "/m8.png",
    href: "/#what-we-do",
  },
  {
    num: "09",
    eyebrow: "Growth gems",
    name: "Emerging Businesses",
    desc: "Aerostructures, clean energy, recycling & growth-gem investments.",
    image:
      "/m9.png",
    href: "/#what-we-do",
  },
];

const NAV_LINKS = ["Home", "Automotive", "Industries", "Careers", "About"];

export function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const { setVariant, setCursorText } = useCursor();

  const active = INDUSTRIES[activeIndex];
  const previewCards = [1, 2, 3, 4].map(
    (offset) => INDUSTRIES[(activeIndex + offset) % INDUSTRIES.length]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  useGSAP(
    () => {
      if (getReducedMotion() || !stageRef.current) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-fade-in]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.06 }
        );
      }, stageRef);
      return () => ctx.revert();
    },
    { dependencies: [activeIndex] }
  );

  return (
    <div id="what-we-do" ref={sectionRef} className="relative bg-ink-900 py-24">
      {/* Header Container */}
      <Container className="mb-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="t-label text-ember font-bold mb-3">(02) WHAT WE DO</p>
            <h2 className="t-h1 text-bone">NINE INDUSTRIES. ONE PURPOSE.</h2>
          </div>
          <div className="t-label font-mono text-lg text-bone font-bold">
            <span className="text-ember">0{activeIndex + 1}</span> / 09
          </div>
        </div>
      </Container>

      {/* Horizontal Rail of 9 Cards */}
      <HorizontalRail>
        {VERTICAL_CARDS.map((card) => (
          <VerticalCard key={card.num} card={card} />
        ))}
      </HorizontalRail>

      {/* Bottom Pinned Ember Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-line">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-ember origin-left scale-x-0"
        />
      </div>
    </div>
  );
}

function VerticalCard({
  card,
}: {
  card: (typeof VERTICAL_CARDS)[number];
}) {
  const { setVariant, setCursorText } = useCursor();
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={card.href}
      className="group relative flex h-[70vh] min-h-[480px] max-h-[640px] w-[82vw] md:w-[45vw] lg:w-[34vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl bg-ink-800 p-8 border border-line transition-all duration-500 hover:border-ember hover:shadow-2xl hover:shadow-ember/20"
      onMouseEnter={() => {
        setVariant("view");
        setCursorText("EXPLORE");
      }}
      onMouseLeave={() => {
        setVariant("default");
        setCursorText("");
      }}
    >
      {/* Background WebP Image */}
      {hasError ? (
        <div className="absolute inset-0 bg-ink-800 flex items-center justify-center p-6 text-ember">
          <span className="t-label font-bold text-center">MAHINDRA · {card.name}</span>
        </div>
      ) : (
        <Image
          src={active.image}
          alt={active.name}
          fill
          sizes="(max-width: 768px) 82vw, (max-width: 1200px) 45vw, 34vw"
          onError={() => setHasError(true)}
          className="object-cover grayscale-[0.35] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/60" />

      {/* Top Number Badge */}
      <div className="relative z-20 flex justify-between items-start">
        <span className="t-label font-mono text-sm font-bold text-bone-dim group-hover:text-ember transition-colors">
          ({card.num})
        </span>
        <span className="t-label rounded-full border border-bone/30 bg-ink-900/70 px-3 py-1 text-[10px] text-bone font-bold backdrop-blur-md">
          VERTICAL
        </span>
      </div>

      {/* Bottom Info Content */}
      <div className="relative z-20">
        <h3 className="t-h2 text-bone group-hover:text-ember transition-colors">
          {card.name}
        </h3>
        <p className="t-body text-bone-dim mt-3 text-sm line-clamp-2">
          {card.desc}
        </p>
        <div className="mt-6 flex items-center gap-2 t-label text-ember font-bold transition-transform duration-300 group-hover:translate-x-2">
          <span>EXPLORE INDUSTRY</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}
