"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, Container, Grid } from "@/components/layout";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { useCursor } from "@/lib/hooks/useCursor";

const NEWS_HEADLINES = [
  "MAHINDRA GROUP ANNOUNCES DEDICATED STRATEGIC FOCUS ON HOLIDAYS AND LIFESPACES SECTOR",
  "TECH MAHINDRA LAUNCHES TORONTO INNOVATION HUB TO ACCELERATE AI TRANSFORMATION",
  "MAHINDRA GROUP REPORTS CONSOLIDATED ROE OF 23% ANNUALIZED FOR Q1",
];

export function LatestNews() {
  const { setVariant, setCursorText } = useCursor();
  const [soarImgError, setSoarImgError] = useState(false);

  return (
    <Section className="bg-ink-900 overflow-hidden">
      {/* Eyebrow & Header */}
      <Container className="mb-12">
        <p className="font-mono text-sm uppercase tracking-wider font-medium text-white mb-4">(06) LATEST NEWS &amp; CAREERS</p>
        <h2 className="font-display text-4xl uppercase leading-[0.9] text-white">NEWSROOM &amp; OPPORTUNITIES</h2>
      </Container>

      {/* Infinite Marquee News Ticker */}
      <div className="mb-20">
        <Marquee speed={1.4} className="py-6 bg-ink-800 border-y border-line">
          {NEWS_HEADLINES.map((headline, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone hover:text-ember transition-colors cursor-pointer">
                {headline}
              </span>
              <span className="h-3 w-3 bg-ember" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* 3 Work With Us Cards */}
      <Container>
        <Grid cols={3} className="gap-8">
          {/* Card 1: SOAR */}
          <div
            className="group relative flex h-[460px] flex-col justify-between overflow-hidden bg-ink-800 p-8 border border-line transition-all duration-500 hover:border-ember"
            onMouseEnter={() => {
              setVariant("ring");
            }}
            onMouseLeave={() => setVariant("default")}
          >
            {soarImgError ? (
              <div className="absolute inset-0 bg-ink-800 flex items-center justify-center p-6 text-ember">
                <span className="font-mono text-xs uppercase tracking-wider font-medium font-bold text-center">SOAR PROGRAMME</span>
              </div>
            ) : (
              <Image
                src="https://www.mahindra.com/sites/default/files/2025-04/Mahindra_SOAR%20Banner_758x410_Home%20page.webp"
                alt="SOAR Returnship Programme"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={() => setSoarImgError(true)}
                className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-ember">PROGRAMME</span>
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim">(01)</span>
            </div>

            <div className="relative z-20">
              <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone mb-3">SOAR</h3>
              <p className="font-body text-base leading-relaxed text-bone-dim text-sm mb-6">
                Leading the way with a first-of-its-kind &apos;Returnship&apos; program for
                women returning to mainstream professional roles.
              </p>
              <Link href="/#news">
                <MagneticButton variant="ghost" size="sm">
                  Explore SOAR →
                </MagneticButton>
              </Link>
            </div>
          </div>

          {/* Card 2: Join Our Team */}
          <div
            className="group relative flex h-[460px] flex-col justify-between overflow-hidden rounded-2xl bg-ink-800 p-8 border border-line transition-all duration-500 hover:border-ember"
            onMouseEnter={() => {
              setVariant("ring");
            }}
            onMouseLeave={() => setVariant("default")}
          >
            <div className="relative z-20 flex justify-between items-start">
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-ember">CAREERS</span>
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim">(02)</span>
            </div>

            <div className="relative z-20">
              <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone mb-3">JOIN OUR TEAM</h3>
              <p className="font-body text-base leading-relaxed text-bone-dim text-sm mb-6">
                Be a part of 327K+ changemakers elevating lives across 100+ countries.
                Discover opportunities in tech, auto, finance &amp; strategy.
              </p>
              <Link href="/#news">
                <MagneticButton variant="ember" size="sm">
                  View Openings →
                </MagneticButton>
              </Link>
            </div>
          </div>

          {/* Card 3: Mahindra AI */}
          <div
            className="group relative flex h-[460px] flex-col justify-between overflow-hidden rounded-2xl bg-ink-800 p-8 border border-line transition-all duration-500 hover:border-ember"
            onMouseEnter={() => {
              setVariant("ring");
            }}
            onMouseLeave={() => setVariant("default")}
          >
            <div className="relative z-20 flex justify-between items-start">
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-gold">INNOVATION</span>
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim">(03)</span>
            </div>

            <div className="relative z-20">
              <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone mb-3">MAHINDRA AI</h3>
              <p className="font-body text-base leading-relaxed text-bone-dim text-sm mb-6">
                A specialised artificial intelligence division delivering digital
                transformation &amp; agentic enterprise solutions across businesses.
              </p>
              <Link href="/#news">
                <MagneticButton variant="gold" size="sm">
                  Discover AI →
                </MagneticButton>
              </Link>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
