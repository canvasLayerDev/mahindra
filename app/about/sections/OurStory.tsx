"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container } from "@/components/layout";
import { ScrubText } from "@/components/motion/ScrubText";
import { HorizontalRail } from "@/components/motion/HorizontalRail";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE_MILESTONES = [
  { year: "1945", title: "THE BEGINNING", desc: "Established as Mahindra & Mohammed steel trading company in Mumbai." },
  { year: "1947", title: "MAHINDRA & MAHINDRA", desc: "Renamed Mahindra & Mahindra Ltd. following Indian independence." },
  { year: "1954", title: "WILLES JEEP ASSEMBLY", desc: "Partnership with Willys Overland to assemble iconic utility vehicles." },
  { year: "1963", title: "FARM EQUIPMENT", desc: "Manufactured first Mahindra tractor, laying foundation for #1 global rank." },
  { year: "1986", title: "TECH MAHINDRA BORN", desc: "Founded Mahindra British Telecom (now Tech Mahindra) IT Services." },
  { year: "1994", title: "FINANCIAL SERVICES", desc: "Established Mahindra Finance to power rural & semi-urban entrepreneurship." },
  { year: "2011", title: "THE RISE PHILOSOPHY", desc: "Unveiled global #TogetherWeRise brand position & core purpose." },
  { year: "2026", title: "81 YEARS OF EXCELLENCE", desc: "$30B+ conglomerate leading EV, AI, renewables & mobility." },
];

export function OurStory() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-ink-900 border-t border-line py-24">
      <Container className="mb-16">
        <p className="t-label text-gold mb-4">(04) OUR STORY</p>
        <h2 className="t-h1 mb-12">SEVEN DECADES OF TRANSFORMATION</h2>

        <div className="max-w-[24ch] mb-16">
          <ScrubText className="font-display text-[clamp(28px,3.5vw,56px)] uppercase leading-tight text-bone">
            What began as a steel trading business seven decades ago, has grown into a
            global brand that traverses nations and sectors.
          </ScrubText>
        </div>

        {/* Feature Banner */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-ink-800 border border-line mb-20">
          {!imgError && (
            <Image
              src="https://www.mahindra.com/sites/default/files/2025-07/about-our-story.webp"
              alt="Mahindra Story"
              fill
              sizes="100vw"
              onError={() => setImgError(true)}
              className="object-cover opacity-50"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent z-10" />
          <div className="absolute bottom-8 left-8 z-20">
            <MagneticButton variant="gold">Explore Timeline</MagneticButton>
          </div>
        </div>
      </Container>

      {/* Horizontal Pinned Timeline Rail */}
      <HorizontalRail>
        {TIMELINE_MILESTONES.map((m) => (
          <div
            key={m.year}
            className="flex h-[360px] w-[320px] lg:w-[400px] shrink-0 flex-col justify-between rounded-2xl bg-ink-800 p-8 border border-line"
          >
            <span className="font-display text-7xl font-bold text-gold">{m.year}</span>
            <div>
              <h3 className="t-h2 text-bone mb-2">{m.title}</h3>
              <p className="t-body text-bone-dim text-sm">{m.desc}</p>
            </div>
          </div>
        ))}
      </HorizontalRail>
    </div>
  );
}
