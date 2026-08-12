"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout";
import { HorizontalRail } from "@/components/motion/HorizontalRail";
import { useCursor } from "@/lib/hooks/useCursor";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VERTICAL_CARDS = [
  {
    num: "01",
    name: "Automotive",
    desc: "Transforming mobility with legendary SUVs, LCVs & electric powertrains.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp",
    href: "/automotive",
  },
  {
    num: "02",
    name: "Farm Equipment",
    desc: "Empowering farmers worldwide with world's #1 tractor brand by volume.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Farming_%20%281%29.webp",
    href: "/#what-we-do",
  },
  {
    num: "03",
    name: "Financial Services",
    desc: "Enabling rural & semi-urban prosperity with tailormade financial solutions.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Financial%20Services.webp",
    href: "/#what-we-do",
  },
  {
    num: "04",
    name: "Technology Services",
    desc: "Tech Mahindra & Bristlecone driving next-gen digital transformation.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp",
    href: "/#what-we-do",
  },
  {
    num: "05",
    name: "Hospitality",
    desc: "Club Mahindra creating unforgettable family holiday experiences.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do%203.webp",
    href: "/#what-we-do",
  },
  {
    num: "06",
    name: "Logistics",
    desc: "Integrated supply chain & mobility solutions across sectors.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Logistics%20Services.webp",
    href: "/#what-we-do",
  },
  {
    num: "07",
    name: "Real Estate",
    desc: "Mahindra Lifespaces building sustainable urban habitats & spaces.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Real%20Estate%20Services.webp",
    href: "/#what-we-do",
  },
  {
    num: "08",
    name: "Renewable Energy",
    desc: "Mahindra Susten powering green transition with solar utility plants.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Renewable%20Services.webp",
    href: "/#what-we-do",
  },
  {
    num: "09",
    name: "Emerging Businesses",
    desc: "Aerostructures, clean energy, recycling & growth gem investments.",
    image:
      "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Emerging%20Business%20and%20Equity%20Investments.webp",
    href: "/#what-we-do",
  },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const progress = progressBarRef.current;
      if (!section || getReducedMotion()) return;

      // Track horizontal rail progress for progress bar & card index
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (progress) {
            gsap.set(progress, { scaleX: self.progress });
          }
          const idx = Math.min(
            VERTICAL_CARDS.length - 1,
            Math.floor(self.progress * VERTICAL_CARDS.length)
          );
          setActiveIndex(idx);
        },
      });
    },
    { scope: sectionRef }
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
          src={card.image}
          alt={card.name}
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
    </Link>
  );
}
