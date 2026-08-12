"use client";

import { Section, Container, Grid } from "@/components/layout";

const DIRECTORIES = [
  {
    title: "Mahindra Auto Customer Support",
    hotline: "1800 209 6006",
    hours: "24/7 Toll Free Helpline",
    email: "customercare@mahindra.com",
    badge: "24x7 SUPPORT",
  },
  {
    title: "24x7 Roadside Assistance (RSA)",
    hotline: "1800 102 6006",
    hours: "Emergency Breakdown Support",
    email: "rsa@mahindra.com",
    badge: "EMERGENCY",
  },
  {
    title: "Investor Helpline & Registrar",
    hotline: "+91 22 6656 8484",
    hours: "Mon - Fri: 9:30 AM - 5:30 PM",
    email: "investor.relations@mahindra.com",
    badge: "INVESTORS",
  },
  {
    title: "Ethics & Governance Vigil Desk",
    hotline: "1800 209 2345",
    hours: "Confidential Reporting",
    email: "ethics@mahindra.com",
    badge: "GOVERNANCE",
  },
];

export function DirectDirectory() {
  return (
    <Section className="py-20 bg-ink-900 border-t border-line">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="t-label text-ember font-bold mb-2">(03) QUICK DIRECTORY</p>
          <h2 className="t-h2 text-bone font-bold mb-4">Direct Support Hotlines</h2>
          <p className="t-body text-bone-dim">
            Immediate phone assistance for vehicle owners, shareholders, and emergency breakdown support.
          </p>
        </div>

        <Grid cols={2} className="gap-8">
          {DIRECTORIES.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-line bg-ink-800/40 p-8 hover:border-ember/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-ember bg-ember/10 border border-ember/30 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-xs text-bone-dim font-mono">{item.hours}</span>
                </div>
                <h3 className="t-h3 text-bone font-bold mb-2">{item.title}</h3>
              </div>

              <div className="mt-8 border-t border-line/60 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-bone-dim uppercase">PHONE</p>
                  <a
                    href={`tel:${item.hotline.replace(/\s+/g, "")}`}
                    className="text-2xl font-bold text-ember hover:underline font-display"
                  >
                    {item.hotline}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-mono text-bone-dim uppercase">EMAIL</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-sm font-medium text-bone hover:text-ember transition-colors"
                  >
                    {item.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
