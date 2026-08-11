"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container, Grid } from "@/components/layout";
import { shouldDisableWebGL, getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Dynamically import Three.js scene with ssr:false
const PerformanceScene = dynamic(
  () => import("./PerformanceScene").then((mod) => mod.PerformanceScene),
  { ssr: false }
);

const STATIC_FALLBACK_IMAGES = [
  { name: "Automotive & Farm", src: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp" },
  { name: "Farm Machinery", src: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Farming_%20%281%29.webp" },
  { name: "Finance & Tech", src: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Financial%20Services.webp" },
  { name: "Tech Mahindra", src: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp" },
  { name: "Hospitality Gems", src: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do%203.webp" },
  { name: "Logistics", src: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Logistics%20Services.webp" },
];

export function PerformanceDriven() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    setUseFallback(shouldDisableWebGL() || getReducedMotion());
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || useFallback) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    },
    { scope: sectionRef, dependencies: [useFallback] }
  );

  return (
    <Section ref={sectionRef} className="bg-ink-900 overflow-hidden relative">
      <Container className="relative z-20 pointer-events-none mb-12">
        <p className="t-label text-ember mb-4">(04) PERFORMANCE DRIVEN</p>
        <h2 className="t-h1 max-w-[18ch]">MARKET LEADERSHIP IN INDIA</h2>

        {/* Highlight Labels */}
        <div className="mt-8 flex flex-wrap items-center gap-6 pointer-events-auto">
          <span className="t-label rounded-full border border-ember bg-ink-800/80 px-4 py-2 text-ember">
            AUTOMOTIVE &amp; FARM EQUIPMENT
          </span>
          <span className="t-label rounded-full border border-line bg-ink-800/80 px-4 py-2 text-bone-dim">
            FINANCE &amp; TECHNOLOGY
          </span>
          <span className="t-label rounded-full border border-line bg-ink-800/80 px-4 py-2 text-bone-dim">
            GROWTH GEMS
          </span>
        </div>
      </Container>

      {/* Main Content Viewport */}
      {!useFallback ? (
        <div className="relative h-[65vh] min-h-[480px] w-full">
          <PerformanceScene scrollProgress={scrollProgress} />
        </div>
      ) : (
        /* Static CSS Grid Fallback for Mobile / Low-Memory */
        <Container>
          <Grid cols={3} className="gap-6 pt-6">
            {STATIC_FALLBACK_IMAGES.map((img) => (
              <div
                key={img.name}
                className="relative h-64 overflow-hidden rounded-xl bg-ink-800 border border-line"
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
                <span className="t-label absolute bottom-4 left-4 z-10 text-bone">
                  {img.name}
                </span>
              </div>
            ))}
          </Grid>
        </Container>
      )}
    </Section>
  );
}
