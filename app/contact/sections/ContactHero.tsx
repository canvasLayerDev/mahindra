"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section, Container } from "@/components/layout";

export function ContactHero() {
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
      {/* Background Subtle Ember Blur Circle */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-ember/15 blur-[120px]" />

      <Container ref={containerRef}>
        <div className="max-w-4xl">
          <div className="hero-anim inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-ember animate-ping" />
            <span className="t-label text-ember font-bold">CONNECT WITH MAHINDRA</span>
          </div>

          <h1 className="hero-anim t-display font-bold text-bone tracking-tight mb-6">
            GET IN TOUCH <span className="text-ember">GLOBAL DESK</span>
          </h1>

          <p className="hero-anim t-lead text-bone-dim max-w-2xl">
            Whether you have inquiries regarding vehicle bookings, investor relations, career opportunities, or enterprise business solutions, our team is ready to assist you.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-anim mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-line py-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">GLOBAL HEADQUARTERS</p>
              <p className="text-lg font-bold text-bone mt-1">Mumbai, India</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">CUSTOMER CARE</p>
              <p className="text-lg font-bold text-ember mt-1">1800 209 6006</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">COUNTRIES PRESENT</p>
              <p className="text-lg font-bold text-bone mt-1">100+ Nations</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-bone-dim">RESPONSE TIME</p>
              <p className="text-lg font-bold text-bone mt-1">&lt; 24 Hours</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
