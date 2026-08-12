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
    title: "PROJECT NANHI KALI",
    image: "/m10.png",
  },
  {
    title: "WOMEN EMPOWERMENT",
    image: "/m11.png",
  },
  {
    title: "SUSTAINABILITY COMMITMENT",
    image: "/m12.png",
  },
  {
    title: "GOVERNANCE & TRUST",
    image: "m13.webp",
  },
];

export function PurposeLed() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (getReducedMotion() || !containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Initial state
      gsap.set(bgRefs.current, {
        scale: 1.1,
        opacity: 0,
      });

      gsap.set(bgRefs.current[0], {
        scale: 1,
        opacity: 1,
      });

      gsap.set(thumbRefs.current[0], {
        width: 0,
        opacity: 0,
        marginLeft: 0,
      });

      gsap.set(thumbRefs.current.slice(1), {
        width: 220,
        opacity: 1,
        marginLeft: 16,
      });

      // -------------------------
      // STEP 1
      // -------------------------
      tl.to(
        bgRefs.current[1],
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "none",
        },
        0
      )
        .to(
          bgRefs.current[0],
          {
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          0
        )
        .to(
          thumbRefs.current[0],
          {
            width: 220,
            opacity: 1,
            marginLeft: 16,
            duration: 1,
            ease: "none",
          },
          0
        )
        .to(
          thumbRefs.current[1],
          {
            width: 0,
            opacity: 0,
            marginLeft: 0,
            duration: 1,
            ease: "none",
          },
          0
        );

      // -------------------------
      // STEP 2
      // -------------------------
      tl.to(
        bgRefs.current[2],
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "none",
        },
        1
      )
        .to(
          bgRefs.current[1],
          {
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          1
        )
        .to(
          thumbRefs.current[1],
          {
            width: 220,
            opacity: 1,
            marginLeft: 16,
            duration: 1,
            ease: "none",
          },
          1
        )
        .to(
          thumbRefs.current[2],
          {
            width: 0,
            opacity: 0,
            marginLeft: 0,
            duration: 1,
            ease: "none",
          },
          1
        );

      // -------------------------
      // STEP 3
      // -------------------------
      tl.to(
        bgRefs.current[3],
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "none",
        },
        2
      )
        .to(
          bgRefs.current[2],
          {
            opacity: 0,
            duration: 1,
            ease: "none",
          },
          2
        )
        .to(
          thumbRefs.current[2],
          {
            width: 220,
            opacity: 1,
            marginLeft: 16,
            duration: 1,
            ease: "none",
          },
          2
        )
        .to(
          thumbRefs.current[3],
          {
            width: 0,
            opacity: 0,
            marginLeft: 0,
            duration: 1,
            ease: "none",
          },
          2
        );

      return () => {
        tl.kill();
      };
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Section ref={containerRef} className="relative h-[400vh] bg-ink-900">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background Layer */}
        {cards.map((card, i) => (
          <div
            key={`bg-${i}`}
            ref={(el) => { bgRefs.current[i] = el; }}
            className="absolute inset-0 z-0 origin-center"
            style={{ zIndex: i }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <Container className="relative z-10 h-full flex flex-col justify-between pt-20 pb-12">
          {/* Top Content */}
          <div>
            <p className="font-mono text-sm uppercase tracking-wider font-medium text-white mb-4">(03) WHO WE ARE: PURPOSE LED</p>
            <h2 className="font-display text-4xl uppercase leading-[0.9] text-white max-w-[15ch]">
              DRIVING POSITIVE CHANGE FOR PEOPLE AND PLANET
            </h2>
          </div>

          {/* Bottom Horizontal Thumbnails */}
          <div className="flex items-center justify-end overflow-hidden pb-4">
            {cards.map((card, i) => (
              <div
                key={`thumb-${i}`}
                ref={(el) => { thumbRefs.current[i] = el; }}
                className="relative h-[130px] overflow-hidden border border-line/30 bg-ink-800 shrink-0"
                style={{
                  width: i === 0 ? 0 : 220,
                  opacity: i === 0 ? 0 : 1,
                  marginLeft: i === 0 ? 0 : 16
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="font-mono text-[10px] text-ember mb-1">0{i + 1}</p>
                  <h3 className="font-display text-xs uppercase text-bone leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}