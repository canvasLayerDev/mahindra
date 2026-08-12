"use client";

import { Section, Container, Grid } from "@/components/layout";

const STATS = [
  {
    value: "35%+",
    label: "Gender Diversity Target",
    desc: "Active hiring and mentorship initiatives fostering women leadership in STEM and automotive shop floors.",
  },
  {
    value: "100%",
    label: "Equal Opportunity Employer",
    desc: "Zero tolerance for discrimination based on gender, ethnicity, disability, or background.",
  },
  {
    value: "Nanhi Kali",
    label: "Empowering 500,000+ Girls",
    desc: "Group-wide CSR initiative educating underprivileged girls across rural and urban India.",
  },
];

export function DiversityInclusion() {
  return (
    <Section className="py-20 bg-ink-900 border-t border-line">
      <Container>
        <div className="max-w-2xl mb-16">
          <p className="t-label text-ember font-bold mb-2">(03) DIVERSITY & INCLUSION</p>
          <h2 className="t-h2 text-bone font-bold mb-4">Women at Mahindra & Inclusive Culture</h2>
          <p className="t-body text-bone-dim">
            Fostering an equitable workplace where diverse perspectives thrive across engineering labs, shop floors, and corporate boardrooms.
          </p>
        </div>

        <Grid cols={3} className="gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-3xl border border-line bg-ink-800/40 hover:border-ember/40 transition-colors"
            >
              <p className="t-display text-ember font-bold text-4xl mb-3 font-display">
                {stat.value}
              </p>
              <h3 className="t-h3 text-bone font-bold mb-2 text-lg">{stat.label}</h3>
              <p className="t-body text-bone-dim text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
