"use client";

import { Section, Container, Grid } from "@/components/layout";

const INITIATIVES = [
  {
    num: "01",
    title: "Mahindra Accelerated Leadership Track (MALT)",
    desc: "Our flagship leadership development program fast-tracking high-potential talent into CXO and business head roles across group companies.",
  },
  {
    num: "02",
    title: "Mahindra Leadership University (MLU)",
    desc: "World-class executive education academy partnering with Harvard, INSEAD, and Wharton to continuously upskill managers in AI and strategy.",
  },
  {
    num: "03",
    title: "Innovation & Intrapreneurship Labs",
    desc: "Empowering employees to pitch internal startups, incubate new clean-tech ideas, and lead high-impact EV design challenges.",
  },
];

export function LifeAtMahindra() {
  return (
    <Section className="py-20 bg-ink-900 border-t border-line">
      <Container>
        <div className="max-w-2xl mb-16">
          <p className="t-label text-ember font-bold mb-2">(01) CULTURE & GROWTH</p>
          <h2 className="t-h2 text-bone font-bold mb-4">Empowering Future Leaders</h2>
          <p className="t-body text-bone-dim">
            We invest deeply in our people through continuous learning, global mobility, and leadership development.
          </p>
        </div>

        <Grid cols={3} className="gap-8">
          {INITIATIVES.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-3xl border border-line bg-ink-800/40 flex flex-col justify-between hover:border-ember/40 transition-colors"
            >
              <div>
                <span className="text-4xl font-display font-extrabold text-ember block mb-6">
                  ({item.num})
                </span>
                <h3 className="t-h3 text-bone font-bold mb-3">{item.title}</h3>
                <p className="t-body text-bone-dim text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
