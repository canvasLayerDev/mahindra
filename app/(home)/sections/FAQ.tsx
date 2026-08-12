"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section, Container } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const FAQ_ITEMS = [
  {
    q: "What companies belong to the Mahindra Group?",
    a: "Mahindra & Mahindra Ltd., Tech Mahindra, Mahindra Financial Services, Mahindra Lifespaces, Club Mahindra, Mahindra Susten, Mahindra Logistics, Swaraj Tractors, and over 100+ global subsidiaries operating across 20+ key business sectors.",
  },
  {
    q: "Is Mahindra & Mahindra a public or private company?",
    a: "Mahindra & Mahindra Ltd. is a publicly traded corporation listed on the Bombay Stock Exchange (BSE) and National Stock Exchange (NSE) in India, featuring multiple publicly listed group companies.",
  },
  {
    q: "What is the work culture at Mahindra?",
    a: "Guided by our Rise core philosophy — Bold, Agile, Collaborative. We empower talent through inclusive growth, industry-leading returnship programs like SOAR, and high governance standards.",
  },
  {
    q: "Where is the Mahindra Group global headquarters located?",
    a: "Mahindra Towers, Dr. G.M. Bhosale Marg, P.K. Kurne Chowk, Worli, Mumbai 400018, Maharashtra, India.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Section className="bg-ink-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Title */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <p className="font-mono text-sm uppercase tracking-wider font-medium text-white mb-4">(07) KNOWLEDGE BASE</p>
              <h2 className="font-display text-4xl uppercase leading-[0.9] text-white">
                GOT<br />QUESTIONS?
              </h2>
              <p className="font-body text-bone-dim mt-6 max-w-[40ch] text-[clamp(16px,1.2vw,20px)] leading-relaxed">
                Everything you need to know about the Mahindra Group, our core philosophy, global footprint, and more.
              </p>
            </div>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {FAQ_ITEMS.map((item, idx) => (
                <FAQAccordionRow
                  key={idx}
                  item={item}
                  index={idx}
                  isOpen={openIdx === idx}
                  onToggle={() => toggle(idx)}
                />
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}

function FAQAccordionRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const { setVariant } = useCursor();

  useGSAP(
    () => {
      const answer = answerRef.current;
      const icon = iconRef.current;
      if (!answer) return;

      if (isOpen) {
        gsap.to(answer, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        if (icon) {
          gsap.to(icon, { rotate: 45, duration: 0.3, ease: "power2.out" });
        }
      } else {
        gsap.to(answer, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
        if (icon) {
          gsap.to(icon, { rotate: 0, duration: 0.3, ease: "power2.out" });
        }
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div className={`border-b border-line transition-colors duration-300 ${isOpen ? 'border-ember' : 'hover:border-ember/50'}`}>
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between py-8 text-left"
        onMouseEnter={() => setVariant("ring")}
        onMouseLeave={() => setVariant("default")}
        aria-expanded={isOpen}
      >
        <div className="flex gap-6 lg:gap-8 items-start">
          <span className="font-mono text-sm text-ember font-bold mt-1.5 lg:mt-2.5">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <span className={`font-display text-[clamp(24px,2.5vw,40px)] uppercase leading-[1.1] transition-colors max-w-[20ch] lg:max-w-[25ch] ${isOpen ? 'text-ember' : 'text-bone group-hover:text-ember/80'}`}>
            {item.q}
          </span>
        </div>
        <span
          ref={iconRef}
          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${isOpen ? 'border-ember bg-ember text-ink-900' : 'border-line text-ember group-hover:border-ember group-hover:bg-ember/10'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        ref={answerRef}
        className="h-0 overflow-hidden opacity-0"
      >
        <div className="pl-12 lg:pl-14 pb-8">
          <p className="font-body text-[clamp(16px,1.2vw,20px)] leading-relaxed text-bone-dim max-w-[50ch]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}
