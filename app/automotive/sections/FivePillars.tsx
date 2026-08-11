"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout";
import { getReducedMotion } from "@/lib/motion";
import { useCursor } from "@/lib/hooks/useCursor";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    num: "01",
    title: "UNMISSABLE DESIGN",
    subtitle: "COMMANDING STANCE & ICONIC ROAD PRESENCE",
    desc: "Sculpted lines, C-shaped LED DRLs, signature grille, and aggressive wheel arches engineered to command authority.",
    spec1: "LED Projector Lamps",
    spec2: "Signature Grille",
    spec3: "R18 Diamond Cut Alloys",
    src: "https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dwd88ecd26/homepage/keyhighlight/Unmissable-Design.mp4",
  },
  {
    num: "02",
    title: "SPIRITED PERFORMANCE",
    subtitle: "THRILLING POWER & HIGH-SPEED STABILITY",
    desc: "mStallion TGDi Turbo Petrol and mHawk Diesel engines delivering up to 380 Nm of instant torque and 4XPLOR terrain modes.",
    spec1: "380 Nm Torque",
    spec2: "0-60 in 4.6 Seconds",
    spec3: "Zip / Zap / Zoom Modes",
    src: "https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dw59a299d8/homepage/keyhighlight/Spirited-Performance.mp4",
  },
  {
    num: "03",
    title: "UNMATCHED SAFETY",
    subtitle: "5-STAR NCAP RATED PROTECTIVE SHIELD",
    desc: "Built on high-strength steel architecture with Level 2 ADAS suite including Automatic Emergency Braking and Lane Keep Assist.",
    spec1: "5-Star NCAP Rated",
    spec2: "Level-2 ADAS Suite",
    spec3: "6 Airbags Standard",
    src: "https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dw2d71ff9b/homepage/keyhighlight/Unmatched-Safety.mp4",
  },
  {
    num: "04",
    title: "SCI-FI TECHNOLOGY",
    subtitle: "INTELLIGENT COCKPIT & CONNECTED EXPERIENCE",
    desc: "Dual 26.03 cm Superscreens powered by AdrenoX AI interface, Alexa voice control, and 12-Speaker Immersive Sony 3D Audio.",
    spec1: "Dual 26.03cm Screens",
    spec2: "AdrenoX AI Engine",
    spec3: "Sony 3D Audio System",
    src: "https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dwe4657475/homepage/keyhighlight/Sci-fi-Technology.mp4",
  },
  {
    num: "05",
    title: "WORLD CLASS",
    subtitle: "CRAFTED REFINEMENT & PANORAMIC LUXURY",
    desc: "Soft-touch leatherette upholstery, Skyroof™ panoramic glass, and Frequency Dependent Damping for floating ride comfort.",
    spec1: "Skyroof™ Panoramic",
    spec2: "Leatherette Seats",
    spec3: "Frequency Damped Ride",
    src: "https://auto.mahindra.com/on/demandware.static/-/Sites-amc-Library/default/dw25b2c27d/homepage/keyhighlight/World-Class.mp4",
  },
];

export function FivePillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const { setVariant } = useCursor();

  // Play active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === activeIdx) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [activeIdx]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || getReducedMotion()) return;

      ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: "top top",
        end: "+=350%",
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(
            PILLARS.length - 1,
            Math.floor(self.progress * PILLARS.length)
          );
          setActiveIdx(idx);
        },
      });
    },
    { scope: sectionRef }
  );

  const activePillar = PILLARS[activeIdx];

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-ink-900"
    >
      {/* 5 Background High-Bitrate Videos with Opacity Cross-fade */}
      {PILLARS.map((pillar, idx) => (
        <video
          key={pillar.num}
          ref={(el) => {
            videoRefs.current[idx] = el;
          }}
          muted
          loop
          playsInline
          preload="none"
          src={pillar.src}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            idx === activeIdx ? "opacity-75 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/70 pointer-events-none" />

      {/* Content Container */}
      <Container className="relative z-30 flex h-full flex-col justify-between py-16">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <p className="t-label text-ember font-bold">(02) FIVE PILLARS OF MAHINDRA AUTOMOTIVE</p>
          <span className="t-label rounded-full border border-ember/40 bg-ink-900/70 px-4 py-1.5 backdrop-blur-md text-ember">
            4K CINEMATIC SHOWCASE
          </span>
        </div>

        {/* Middle Main Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto">
          {/* Left Title & Subtitle */}
          <div className="lg:col-span-7">
            <span className="t-label text-gold font-mono mb-2 block font-bold">
              {activePillar.subtitle}
            </span>
            <div className="overflow-hidden">
              <h2 className="t-hero text-bone transition-transform duration-500 ease-out">
                {activePillar.title}
              </h2>
            </div>
            <p className="t-lead mt-4 text-bone-dim max-w-[55ch] text-lg">
              {activePillar.desc}
            </p>
          </div>

          {/* Right Glassmorphism Specs Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-bone/20 bg-ink-900/60 p-6 backdrop-blur-xl shadow-2xl">
              <p className="t-label text-ember mb-4 font-bold">ENGINEERING SPECIFICATIONS</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-line pb-2">
                  <span className="text-sm font-medium text-bone">{activePillar.spec1}</span>
                  <span className="t-label text-ember">✓ HIGHLIGHT</span>
                </div>
                <div className="flex items-center justify-between border-b border-line pb-2">
                  <span className="text-sm font-medium text-bone">{activePillar.spec2}</span>
                  <span className="t-label text-ember">✓ HIGHLIGHT</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-sm font-medium text-bone">{activePillar.spec3}</span>
                  <span className="t-label text-ember">✓ HIGHLIGHT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Pillar Selector */}
        <div className="flex flex-col gap-4 border-t border-line pt-6 lg:flex-row lg:items-center lg:justify-between">
          <span className="t-label text-bone-dim">SCROLL TO SWITCH PILLARS</span>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {PILLARS.map((p, idx) => (
              <button
                key={p.num}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setVariant("ring")}
                onMouseLeave={() => setVariant("default")}
                className={`t-label flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 ${
                  idx === activeIdx
                    ? "border-ember bg-ember text-bone font-bold scale-105 shadow-lg shadow-ember/30"
                    : "border-line bg-ink-900/60 text-bone-dim hover:border-bone hover:text-bone"
                }`}
              >
                <span>({p.num})</span>
                <span className="hidden sm:inline">{p.title}</span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
