"use client";

import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const REPORTS = [
  {
    title: "Integrated Annual Report FY26",
    subtitle: "Complete financial statements, MDA, and leadership commentary.",
    size: "18.4 MB · PDF",
    tag: "ANNUAL REPORT",
  },
  {
    title: "Q3 FY26 Investor Presentation",
    subtitle: "Quarterly revenue breakdown, segment profitability, and outlook.",
    size: "6.2 MB · PDF",
    tag: "EARNINGS RELEASE",
  },
  {
    title: "ESG & Sustainability Report 2026",
    subtitle: "Climate action, decarbonization metrics, and ESG disclosures.",
    size: "12.1 MB · PDF",
    tag: "SUSTAINABILITY",
  },
  {
    title: "Shareholding Pattern Q3 FY26",
    subtitle: "Promoter group, institutional investor, and retail distribution.",
    size: "2.8 MB · PDF",
    tag: "GOVERNANCE",
  },
];

export function ReportsDownload() {
  const { setVariant } = useCursor();

  return (
    <Section className="py-24 bg-ink-950 border-t border-line">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="t-label text-ember font-bold mb-2">(02) DISCLOSURES & FILINGS</p>
            <h2 className="t-h2 text-bone font-bold">Reports & Financial Downloads</h2>
          </div>
          <p className="t-body text-bone-dim max-w-md">
            Access official BSE/NSE regulatory filings, audited statements, and investor decks.
          </p>
        </div>

        <Grid cols={2} className="gap-8">
          {REPORTS.map((report) => (
            <div
              key={report.title}
              className="group p-8 rounded-3xl border border-line bg-ink-900/60 flex flex-col justify-between hover:border-ember/40 hover:bg-ink-800/60 transition-all"
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-ember bg-ember/10 border border-ember/30 px-3 py-1 rounded-full">
                    {report.tag}
                  </span>
                  <span className="text-xs font-mono text-bone-dim">{report.size}</span>
                </div>
                <h3 className="t-h3 text-bone font-bold mb-2">{report.title}</h3>
                <p className="t-body text-bone-dim text-sm leading-relaxed mb-6">
                  {report.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-line/50 flex items-center justify-between">
                <span className="text-xs font-mono text-bone-dim uppercase">VERIFIED SEC / BSE FILING</span>
                <button
                  onClick={() => alert(`Downloading sample document: ${report.title}`)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember hover:underline group-hover:translate-x-1 transition-transform"
                >
                  Download PDF ↓
                </button>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
