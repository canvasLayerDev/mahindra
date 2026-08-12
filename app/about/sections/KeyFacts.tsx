"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container, Grid } from "@/components/layout";
import { Counter } from "@/components/motion/Counter";

export function KeyFacts() {
  const [bgError, setBgError] = useState(false);

  return (
    <Section className="relative bg-ink-900 overflow-hidden border-t border-line">
      {/* Backdrop Image */}
      {!bgError && (
        <Image
          src="https://www.mahindra.com/sites/default/files/2025-07/keyfacts.webp"
          alt="Mahindra Key Facts Backdrop"
          fill
          sizes="100vw"
          onError={() => setBgError(true)}
          className="object-cover opacity-15"
        />
      )}

      <Container className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-gold mb-4">(03) SCALE &amp; IMPACT</p>
        <h2 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] mb-16">KEY FACTS AT A GLANCE</h2>

        <Grid cols={3} className="gap-12">
          {/* Stat 1: Turnover */}
          <div className="border-b-2 border-gold pb-6">
            <div className="font-display text-[clamp(56px,8vw,140px)] font-normal leading-none text-gold">
              <Counter to={30} prefix="$" suffix=" B+" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium mt-4 text-bone">CONSOLIDATED GROUP TURNOVER</p>
          </div>

          {/* Stat 2: People */}
          <div className="border-b-2 border-ember pb-6">
            <div className="font-display text-[clamp(56px,8vw,140px)] font-normal leading-none text-bone">
              <Counter to={327} suffix="K+" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium mt-4 text-bone-dim">GLOBAL EMPLOYEES ACROSS 100+ COUNTRIES</p>
          </div>

          {/* Stat 3: Heritage */}
          <div className="border-b-2 border-gold pb-6">
            <div className="font-display text-[clamp(56px,8vw,140px)] font-normal leading-none text-gold">
              <Counter to={81} suffix=" YRS" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium mt-4 text-bone-dim">HERITAGE OF TRUST SINCE 1945</p>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
