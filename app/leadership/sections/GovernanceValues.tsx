"use client";

import { Section, Container, Grid } from "@/components/layout";

const PILLARS = [
  {
    num: "01",
    title: "Accepting No Limits",
    desc: "Refusing to accept boundaries in ambition, technology, or societal impact. Challenging conventional wisdom to pioneer groundbreaking products like India's first electric SUVs and autonomous farm machinery.",
  },
  {
    num: "02",
    title: "Alternative Thinking",
    desc: "Applying creative problem-solving, net-zero sustainable design, and circular economic principles across manufacturing, financial inclusion, and digital services.",
  },
  {
    num: "03",
    title: "Driving Positive Change",
    desc: "Ensuring every business initiative transforms lives for the better — empowering 1.5 Million+ girls through Project Nanhi Kali and regenerating ecosystems.",
  },
];

export function GovernanceValues() {
  return (
    <Section className="py-24 bg-ink-950 border-t border-line">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="t-label text-ember font-bold mb-2">(02) CORE PHILOSOPHY</p>
          <h2 className="t-h2 text-bone font-bold mb-4">The Rise Core Pillars</h2>
          <p className="t-body text-bone-dim">
            Our governing values shape how 327,000+ employees make decisions, innovate, and serve global communities every single day.
          </p>
        </div>

        <Grid cols={3} className="gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-3xl border border-line bg-ink-900/60 flex flex-col justify-between hover:border-ember/40 transition-colors"
            >
              <div>
                <span className="text-4xl font-display font-extrabold text-ember block mb-6">
                  ({pillar.num})
                </span>
                <h3 className="t-h3 text-bone font-bold mb-4">{pillar.title}</h3>
                <p className="t-body text-bone-dim text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
