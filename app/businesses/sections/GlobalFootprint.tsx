"use client";

import { Section, Container } from "@/components/layout";
import Link from "next/link";

const HIGHLIGHTS = [
  {
    num: "100+",
    label: "Countries Reached",
    detail: "Operations spanning North America, Europe, Asia-Pacific, Latin America, and Africa.",
  },
  {
    num: "327,000+",
    label: "Global Workforce",
    detail: "Engineers, innovators, technicians, and thinkers united under the Rise philosophy.",
  },
  {
    num: "Net-Zero 2040",
    label: "Carbon Neutrality Target",
    detail: "100% renewable electricity transition, water positivity, and EP100 energy productivity.",
  },
  {
    num: "81 Years",
    label: "Heritage of Trust",
    detail: "Founded in 1945 by J.C. Mahindra and K.C. Mahindra, evolving into a global powerhouse.",
  },
];

export function GlobalFootprint() {
  return (
    <Section className="py-24 bg-ink-950 border-t border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="t-label text-ember font-bold mb-3">(02) SUSTAINABLE SCALING</p>
            <h2 className="t-h2 text-bone font-bold mb-6">
              Driving Positive Change Globally
            </h2>
            <p className="t-body text-bone-dim mb-8">
              We believe business is a force for good. Across all 9 verticals, we measure our success not just by revenue, but by societal impact, environmental stewardship, and community empowerment.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/about"
                className="px-8 py-4 rounded-full bg-ember text-ink-900 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-ember/90"
              >
                Read Group Story →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="p-8 rounded-3xl border border-line bg-ink-900/60 hover:border-ember/40 transition-colors"
              >
                <p className="t-display text-ember font-bold text-3xl xl:text-4xl mb-2">
                  {item.num}
                </p>
                <p className="text-bone font-bold mb-2">{item.label}</p>
                <p className="text-xs text-bone-dim leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
