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
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Section className="bg-ink-900">
      <Container>
        <p className="t-label text-ember mb-4">(07) FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="t-h1 mb-16">FREQUENTLY ASKED QUESTIONS</h2>

        <div className="border-t border-line">
          {FAQ_ITEMS.map((item, idx) => (
            <FAQAccordionRow
              key={idx}
              item={item}
              isOpen={openIdx === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQAccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
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
    <div className="border-b border-line transition-all duration-300">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-8 text-left transition-all duration-300 hover:pl-4"
        onMouseEnter={() => setVariant("ring")}
        onMouseLeave={() => setVariant("default")}
        aria-expanded={isOpen}
      >
        <span className="t-h2 text-bone group-hover:text-ember transition-colors">
          {item.q}
        </span>
        <span
          ref={iconRef}
          className="t-h2 text-ember ml-4 inline-block font-mono leading-none transition-transform"
        >
          +
        </span>
      </button>

      <div
        ref={answerRef}
        className="h-0 overflow-hidden opacity-0 transition-all"
      >
        <p className="t-lead pb-8 text-bone-dim max-w-[60ch]">{item.a}</p>
      </div>
    </div>
  );
}
