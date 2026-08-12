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

  const goTo = (index: number) => {
    setActiveIndex(((index % INDUSTRIES.length) + INDUSTRIES.length) % INDUSTRIES.length);
  };

  return (
    <section
      ref={stageRef}
      className="relative flex h-dvh min-h-[640px] w-full flex-col overflow-hidden bg-ink-900 lg:min-h-[720px] mt-8"
    >
      {/* Background image */}
      <div className="absolute inset-0" key={active.num}>
        <Image
          src={active.image}
          alt={active.name}
          fill
          priority
          data-fade-in
          className="object-cover"
        />

      </div>


      {/* Main content */}
      <div className="relative z-20 flex flex-1 flex-col justify-end px-6 pb-8 lg:px-[120px] lg:pb-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Left: text block */}
          <div className="max-w-xl   bg-opacity-90 bg-ink-900/20 p-5 backdrop-blur-sm" data-fade-in>
            <p className="font-mono text-sm uppercase tracking-wider font-medium mb-3 font-bold tracking-widest text-white">
              ({active.num}) {active.eyebrow.toUpperCase()}
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-[0.95] text-whiteleading-[0.95] text-amber-50">
              {active.name.toUpperCase()}
            </h2>
            <p className="font-body text-base leading-relaxed mt-4 max-w-md text-amber-50">{active.desc}</p>

            <Link
              href={active.href}
              onMouseEnter={() => {
                setVariant("view");
                setCursorText("EXPLORE");
              }}
              onMouseLeave={() => {
                setVariant("default");
                setCursorText("");
              }}
              className="group mt-8 inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-ember text-white transition-colors  bg-ember group-hover:text-ink-900">
                →
              </span>
              <span className="font-mono text-xs uppercase tracking-wider font-medium font-bold text-white">
                EXPLORE {active.name.toUpperCase()}
              </span>
            </Link>
          </div>

          {/* Right: preview card rail */}
          <div className="flex gap-4 overflow-x-auto lg:overflow-visible" data-fade-in>
            {previewCards.map((card) => (
              <button
                key={card.num}
                onClick={() => goTo(INDUSTRIES.indexOf(card))}
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
                className="group relative h-44 w-32 shrink-0 overflow-hidden border border-white/15 transition-all duration-300 hover:border-ember lg:h-52 lg:w-36"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="150px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <p className="font-mono text-xs uppercase tracking-wider font-medium text-[10px] font-bold text-ember">
                    ({card.num})
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider font-medium text-xs font-bold leading-tight text-white">
                    {card.name.toUpperCase()}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom controls */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous industry"
              onClick={() => goTo(activeIndex - 1)}
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-ember hover:text-ember"
            >
              ←
            </button>
            <button
              aria-label="Next industry"
              onClick={() => goTo(activeIndex + 1)}
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-ember hover:text-ember"
            >
              →
            </button>
          </div>

          <div className="font-mono text-xs uppercase tracking-wider font-medium font-mono text-lg font-bold text-white">
            <span className="text-ember">0{activeIndex + 1}</span>
            <span className="text-white/40"> / 09</span>
          </div>
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
