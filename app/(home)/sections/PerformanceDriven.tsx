"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Container } from "@/components/layout";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    title: "AUTOMOTIVE & FARM EQUIPMENT",
    image: "/p1.webp",
  },
  {
    title: "FINANCE & TECHNOLOGY",
    image: "/p2.webp",
  },
  {
    title: "GROWTH GEMS",
    image: "/p3.webp",
  },
];

export function PerformanceDriven() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || getReducedMotion()) return;

      gsap.from(".performance-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <Section ref={sectionRef} className="bg-ink-900 overflow-hidden relative">
      <Container className="relative z-20">
        <p className="font-mono text-sm uppercase tracking-wider font-medium text-black mb-4">(04) PERFORMANCE DRIVEN</p>
        <h2 className="font-display text-4xl uppercase leading-[0.9] max-w-[20ch] mb-8 lg:mb-12 text-black">
          MARKET LEADERSHIP IN INDIA
        </h2>

        {/* 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="performance-card group relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]  overflow-hidden border border-line/30 bg-ink-800 shadow-sm"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />



              {/* Title at Top */}
              <div className="absolute top-0 left-0 right-0 p-6 lg:p-8 z-10">
                <h3 className="font-display text-lg lg:text-xl uppercase tracking-wider text-white leading-tight">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
