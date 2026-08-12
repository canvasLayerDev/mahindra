"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section, Container } from "@/components/layout";

export function LeadershipHero() {
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
      <div className="pointer-events-none absolute left-1/3 top-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-ember/15 blur-[130px]" />

      <Container ref={containerRef}>
        <div className="max-w-4xl">
          <div className="hero-anim inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-ember" />
            <span className="t-label text-ember font-bold">GOVERNANCE & STEWARDSHIP</span>
          </div>

          <h1 className="hero-anim t-display font-bold text-bone tracking-tight mb-6">
            LEADERSHIP THAT <br />
            <span className="text-ember">INSPIRES RISE</span>
          </h1>

          <p className="hero-anim t-lead text-bone-dim max-w-2xl">
            Guided by visionary leaders, board members, and executives dedicated to high corporate governance standards, performance excellence, and societal impact.
          </p>

          <div className="hero-anim mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-line py-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">CHAIRMAN EMERITUS</p>
              <p className="text-lg font-bold text-bone mt-1">Anand Mahindra</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">GROUP MD & CEO</p>
              <p className="text-lg font-bold text-ember mt-1">Dr. Anish Shah</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">AUTO & FARM CEO</p>
              <p className="text-lg font-bold text-bone mt-1">Rajesh Jejurikar</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">TECH MAHINDRA CEO</p>
              <p className="text-lg font-bold text-bone mt-1">Mohit Joshi</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
