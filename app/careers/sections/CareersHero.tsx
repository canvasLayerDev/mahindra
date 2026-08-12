"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section, Container } from "@/components/layout";

export function CareersHero() {
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
      <div className="pointer-events-none absolute left-1/4 top-1/3 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-ember/15 blur-[140px]" />

      <Container ref={containerRef}>
        <div className="max-w-4xl">
          <div className="hero-anim inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-ember" />
            <span className="t-label text-ember font-bold">CAREERS & TALENT AT MAHINDRA</span>
          </div>

          <h1 className="hero-anim t-display font-bold text-bone tracking-tight mb-6">
            BUILD A CAREER THAT <br />
            <span className="text-ember">MAKES A DIFFERENCE</span>
          </h1>

          <p className="hero-anim t-lead text-bone-dim max-w-2xl">
            Join 327,000+ passionate changemakers across automotive engineering, AI tech, clean energy, financial innovation, and global leadership.
          </p>

          <div className="hero-anim mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-line py-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">GLOBAL WORKFORCE</p>
              <p className="text-xl font-bold text-bone mt-1">327K+ People</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">GREAT PLACE TO WORK</p>
              <p className="text-xl font-bold text-ember mt-1">Top 10 Employer</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">LEADERSHIP TRACK</p>
              <p className="text-xl font-bold text-bone mt-1">MALT Program</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">COUNTRIES OPERATING</p>
              <p className="text-xl font-bold text-bone mt-1">100+ Nations</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
