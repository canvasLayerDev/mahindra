"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section, Container } from "@/components/layout";

export function InvestorsHero() {
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
      <div className="pointer-events-none absolute right-1/3 top-1/4 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-ember/15 blur-[130px]" />

      <Container ref={containerRef}>
        <div className="max-w-4xl">
          <div className="hero-anim inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-ember" />
            <span className="t-label text-ember font-bold">FINANCIAL PERFORMANCE & INVESTORS</span>
          </div>

          <h1 className="hero-anim t-display font-bold text-bone tracking-tight mb-6">
            SUSTAINED VALUE <br />
            <span className="text-ember">DISCIPLINED CAPITAL</span>
          </h1>

          <p className="hero-anim t-lead text-bone-dim max-w-2xl">
            Delivering robust financial growth across automotive, farm, tech, and financial verticals with an unyielding focus on capital efficiency, shareholder return, and ESG leadership.
          </p>

          <div className="hero-anim mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-line py-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">NSE / BSE TICKER</p>
              <p className="text-xl font-bold text-bone mt-1">M&M | 500520</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">ROE TARGET</p>
              <p className="text-xl font-bold text-ember mt-1">18% Consistently</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">MARKET CAP</p>
              <p className="text-xl font-bold text-bone mt-1">₹3.8 Lakh Cr+</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">ESG DJSI RANK</p>
              <p className="text-xl font-bold text-bone mt-1">#1 Auto Sector</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
