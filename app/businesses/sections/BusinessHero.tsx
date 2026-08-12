"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section, Container } from "@/components/layout";

export function BusinessHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <Section className="relative pt-32 lg:pt-44 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute right-1/4 top-1/3 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-ember/15 blur-[140px]" />

      <Container ref={containerRef}>
        <div className="max-w-4xl">
          <div className="hero-anim inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-ember" />
            <span className="t-label text-ember font-bold">OUR BUSINESS VERTICALS</span>
          </div>

          <h1 className="hero-anim t-display font-bold text-bone tracking-tight mb-6">
            DIVERSIFIED EXCELLENCE <br />
            <span className="text-ember">GLOBAL IMPACT</span>
          </h1>

          <p className="hero-anim t-lead text-bone-dim max-w-2xl">
            From iconic SUVs and world-class tractors to IT services, clean energy, financial solutions, real estate, and aerospace — operating in 100+ countries with $30B+ turnover.
          </p>

          <div className="hero-anim mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-line py-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">ANNUAL TURNOVER</p>
              <p className="text-2xl font-bold text-bone mt-1">$30B+ USD</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">GLOBAL TRACTOR RANK</p>
              <p className="text-2xl font-bold text-ember mt-1">#1 By Volume</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">WORLDWIDE TEAM</p>
              <p className="text-2xl font-bold text-bone mt-1">327,000+</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">BUSINESS SECTORS</p>
              <p className="text-2xl font-bold text-bone mt-1">9 Verticals</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
