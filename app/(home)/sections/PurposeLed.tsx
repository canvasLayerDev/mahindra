"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container, Grid } from "@/components/layout";
import { Counter } from "@/components/motion/Counter";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PurposeLed() {
  const sectionRef = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || getReducedMotion()) return;

      // Asymmetric parallax speeds for the 3 image panels
      if (img1Ref.current) {
        gsap.to(img1Ref.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (img2Ref.current) {
        gsap.to(img2Ref.current, {
          y: -110,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (img3Ref.current) {
        gsap.to(img3Ref.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <Section ref={sectionRef} className="bg-ink-900 overflow-hidden">
      <Container>
        {/* Section Header */}
        <p className="t-label text-ember mb-4">(03) WHO WE ARE: PURPOSE LED</p>
        <h2 className="t-h1 max-w-[20ch] mb-20">
          DRIVING POSITIVE CHANGE FOR PEOPLE AND PLANET
        </h2>

        {/* Editorial Two-Column Stat Layout */}
        <Grid cols={2} className="gap-16 lg:gap-24 mb-24">
          <div className="space-y-16">
            {/* Stat Block 1 */}
            <div className="border-b border-line pb-8">
              <p className="t-label text-bone-dim mb-2">PROJECT NANHI KALI</p>
              <div className="t-hero text-ember flex items-baseline gap-2">
                <Counter to={940} suffix="K+" />
              </div>
              <p className="t-lead mt-3 text-bone">
                Girls educated till date across India through Nanhi Kali.
              </p>
            </div>

            {/* Stat Block 2 */}
            <div className="border-b border-line pb-8">
              <p className="t-label text-bone-dim mb-2">WOMEN EMPOWERMENT</p>
              <div className="t-hero text-bone flex items-baseline gap-2">
                <Counter to={1.4} suffix="M+" decimals={1} />
              </div>
              <p className="t-lead mt-3 text-bone-dim">
                Women supported with livelihood &amp; skill building programs.
              </p>
            </div>
          </div>

          <div className="space-y-16 lg:pt-16">
            {/* Stat Block 3 */}
            <div className="border-b border-line pb-8">
              <p className="t-label text-bone-dim mb-2">SUSTAINABILITY COMMITMENT</p>
              <div className="t-hero text-bone flex items-baseline gap-2">
                <Counter to={2008} />
              </div>
              <p className="t-lead mt-3 text-bone-dim">
                Embracing zero-waste and green manufacturing operations.
              </p>
            </div>

            {/* Stat Block 4 */}
            <div className="border-b border-line pb-8">
              <p className="t-label text-bone-dim mb-2">GOVERNANCE &amp; TRUST</p>
              <div className="t-h1 text-gold flex items-baseline gap-2 pt-4">
                GOLD STANDARDS
              </div>
              <p className="t-lead mt-3 text-bone-dim">
                Ensuring highest ethics, accountability and community governance.
              </p>
            </div>
          </div>
        </Grid>

        {/* Asymmetric Parallax Image Gallery */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12">
          {/* Image 1: Kaabil (Left Column) */}
          <div ref={img1Ref} className="md:col-span-7 will-change-transform">
            <ImageReveal
              src="https://www.mahindra.com/sites/default/files/2025-07/Mahindra_%20Home%20Page_purpose_Kaabil%20_without%20text_v4.webp"
              alt="Mahindra Purpose Kaabil"
              aspectRatio="aspect-[16/10]"
              wrapperClassName="rounded-2xl shadow-2xl"
            />
            <p className="t-label mt-4 text-bone-dim">KAABIL — SKILLING INDIA&apos;S YOUTH</p>
          </div>

          {/* Image 2: Nanhi Kali (Right Offset Column) */}
          <div
            ref={img2Ref}
            className="md:col-span-5 md:mt-24 will-change-transform"
          >
            <ImageReveal
              src="https://www.mahindra.com/sites/default/files/2026-03/Nanhikali_banner_0.webp"
              alt="Project Nanhi Kali"
              aspectRatio="aspect-[4/5]"
              wrapperClassName="rounded-2xl shadow-2xl"
            />
            <p className="t-label mt-4 text-bone-dim">PROJECT NANHI KALI · GIRL CHILD EDUCATION</p>
          </div>

          {/* Image 3: Planet Positive (Centered Lower Column) */}
          <div
            ref={img3Ref}
            className="md:col-span-8 md:col-start-3 md:-mt-12 will-change-transform"
          >
            <ImageReveal
              src="https://www.mahindra.com/sites/default/files/2025-07/Mahindra_%20Purpose%20led_planet%20postive_without%20text_v2.webp"
              alt="Planet Positive Sustainability"
              aspectRatio="aspect-[21/9]"
              wrapperClassName="rounded-2xl shadow-2xl"
            />
            <p className="t-label mt-4 text-bone-dim">PLANET POSITIVE · CARBON NEUTRAL BY 2040</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
