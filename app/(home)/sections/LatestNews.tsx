"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, Container } from "@/components/layout";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { useCursor } from "@/lib/hooks/useCursor";

const NEWS_HEADLINES = [
  "MAHINDRA GROUP APPOINTS SHVETA ARYA AS GROUP CHIEF STRATEGY OFFICER",
  "MAHINDRA GROUP ANNOUNCES DEDICATED STRATEGIC FOCUS ON HOLIDAYS AND LIFESPACES SECTOR",
  "MAHINDRA TRACTORS LAUNCHES 'DUNIYA VICH IKKO LALKAAR' CAMPAIGN WITH SUKHBIR SINGH & PARMISH VERMA",
  "MAHINDRA GROUP REPORTS CONSOLIDATED REVENUE OF ₹1,42,500 CR & HIGHEST EVER ANNUAL PERFORMANCE",
];

export function LatestNews() {
  const { setVariant } = useCursor();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Section className="bg-[#F7F6F2] py-14 lg:py-18 overflow-hidden relative border-t border-black/10">
      <Container>
        {/* Section Header */}
        <div className="mb-12 border-b border-black/10 pb-8">
          <p className="font-mono text-xs uppercase tracking-widest font-bold text-ember mb-2">
            (06) LATEST NEWS &amp; CAREERS
          </p>
          <h2 className="font-display text-4xl lg:text-5xl uppercase leading-[0.95] text-black font-extrabold">
            NEWSROOM &amp; OPPORTUNITIES
          </h2>
        </div>

        {/* 2-Column Grid: Image Left (50%), Content Right (50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Image (Full Width 50% Split) */}
          <div className="w-full relative min-h-[460px] lg:min-h-[620px] overflow-hidden border border-black/10 bg-white group flex flex-col justify-end">
            <Image
              src="/team.png"
              alt="Mahindra Team & Opportunities"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            {/* Floating Glass Badge */}
            <div className="relative z-20 m-6 p-6 bg-white/95 backdrop-blur-md border border-black/10">
              <span className="font-mono text-xs text-ember uppercase tracking-widest block font-bold mb-1">
                GLOBAL IMPACT
              </span>
              <p className="font-display text-xl lg:text-2xl text-black font-bold uppercase leading-tight">
                327,000+ Changemakers Across 100+ Nations
              </p>
              <Link href="/careers">
                <MagneticButton variant="ghost" size="sm">
                  Explore SOAR →
                </MagneticButton>
              </Link>
            </div>
          </div>

          {/* Right Column: News Content List (50% Split) */}
          <div className="w-full flex flex-col justify-between space-y-4">
            {NEWS_ITEMS.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => {
                    setActiveIdx(idx);
                    setVariant("ring");
                  }}
                  onMouseLeave={() => setVariant("default")}
                  className={`p-6 lg:p-8 border transition-all duration-300 ${isActive
                    ? "border-ember bg-white"
                    : "border-black/10 bg-white/80 hover:bg-white hover:border-black/20"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-ember border border-ember/30 bg-ember/10 px-2.5 py-0.5 uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-400">
                      ({item.num})
                    </span>
                  </div>

            <div className="relative z-20">
              <h3 className="t-h2 text-bone mb-3">JOIN OUR TEAM</h3>
              <p className="t-body text-bone-dim text-sm mb-6">
                Be part of a 327,000+ strong global workforce shaping mobility, clean energy, and artificial intelligence.
              </p>
              <Link href="/careers">
                <MagneticButton variant="ember" size="sm">
                  View Openings →
                </MagneticButton>
              </Link>
            </div>
          </div>

                  <p className="font-body text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                    {item.desc}
                  </p>

            <div className="relative z-20">
              <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone mb-3">MAHINDRA AI</h3>
              <p className="font-body text-base leading-relaxed text-bone-dim text-sm mb-6">
                A specialised artificial intelligence division delivering digital
                transformation &amp; agentic enterprise solutions across businesses.
              </p>
              <Link href="/businesses">
                <MagneticButton variant="gold" size="sm">
                  Discover AI →
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

