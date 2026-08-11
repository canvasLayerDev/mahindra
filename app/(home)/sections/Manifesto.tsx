"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container } from "@/components/layout";
import { ScrubText } from "@/components/motion/ScrubText";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);
  const riseWordRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const hairline = hairlineRef.current;
      const riseWord = riseWordRef.current;
      if (!section || getReducedMotion()) return;

      // Draw ember hairline left->right as section completes
      if (hairline) {
        gsap.fromTo(
          hairline,
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 0.8,
            },
          }
        );
      }

      // Subtle scale up on the final word "Rise."
      if (riseWord) {
        gsap.fromTo(
          riseWord,
          { scale: 0.95, color: "#8E8C87" },
          {
            scale: 1.05,
            color: "#DC3A2C",
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "bottom 80%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <Section ref={sectionRef} className="bg-ink-900">
      <Container>
        <p className="t-label text-ember mb-8">(01) WHO WE ARE</p>

        {/* Display font manifesto with scroll scrubbed opacity */}
        <div className="max-w-[22ch]">
          <ScrubText className="font-display text-[clamp(28px,4vw,72px)] font-normal uppercase leading-[1.1] tracking-tight">
            We bring together diverse, future-facing industries and communities to
            co-create a positive world, where one enables the other to Rise.
          </ScrubText>
        </div>

        {/* Drawing ember hairline */}
        <div
          ref={hairlineRef}
          className="mt-20 h-px w-full bg-ember will-change-transform"
        />
      </Container>
    </Section>
  );
}
