"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container, Grid } from "@/components/layout";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CulturalMuseum() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const leftCol = leftColRef.current;
      const rightCol = rightColRef.current;
      if (!section || getReducedMotion()) return;

      if (window.innerWidth < 1024) return;

      // Opposing directional parallax scroll
      if (leftCol) {
        gsap.to(leftCol, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (rightCol) {
        gsap.to(rightCol, {
          y: 40,
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
    <Section ref={sectionRef} className="bg-ink-900 border-t border-line overflow-hidden">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-gold mb-4">(07) HERITAGE &amp; CULTURE</p>
        <h2 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] mb-16">CULTURAL OUTREACH &amp; MUSEUM OF LIVING HISTORY</h2>

        <Grid cols={2} className="gap-12 lg:gap-16 items-start">
          {/* Left Column: Cultural Connect */}
          <div ref={leftColRef} className="space-y-8 will-change-transform">
            <div className="relative h-[480px] w-full overflow-hidden rounded-3xl bg-ink-800 border border-line">
              {!img1Error && (
                <Image
                  src="https://www.mahindra.com/sites/default/files/img/about-cultural.webp"
                  alt="Mahindra Cultural Outreach"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImg1Error(true)}
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-gold">CULTURAL OUTREACH</span>
              <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone mt-2 mb-4">MOVING PEOPLE TO RISE TOGETHER</h3>
              <AnimatedLink href="/about" underlineColor="bg-gold">
                Explore Events →
              </AnimatedLink>
            </div>
          </div>

          {/* Right Column: Museum of Living History */}
          <div ref={rightColRef} className="space-y-8 lg:mt-16 will-change-transform">
            <div className="relative h-[480px] w-full overflow-hidden rounded-3xl bg-ink-800 border border-line">
              {!img2Error && (
                <Image
                  src="https://www.mahindra.com/sites/default/files/2023-07/Museum_about%20us_updated%20image_desktop_0.webp"
                  alt="Museum of Living History"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImg2Error(true)}
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-ember">MUSEUM OF LIVING HISTORY</span>
              <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone mt-2 mb-4">
                CONNECTING HISTORIC RICHNESS TO OUR UNDISCOVERED FUTURE
              </h3>
              <AnimatedLink href="/about" underlineColor="bg-ember">
                Explore Museum →
              </AnimatedLink>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
