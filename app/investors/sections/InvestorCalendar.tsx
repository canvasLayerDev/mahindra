"use client";

import { Section, Container, Grid } from "@/components/layout";

const EVENTS = [
  {
    date: "MAY 28, 2026",
    title: "Q4 & Full Year FY26 Earnings Call",
    details: "Board meeting to approve audited financial results & recommend final dividend.",
    status: "UPCOMING",
  },
  {
    date: "JUL 15, 2026",
    title: "79th Annual General Meeting (AGM)",
    details: "Virtual shareholder conference and voting on resolutions.",
    status: "SCHEDULED",
  },
  {
    date: "AUG 12, 2026",
    title: "Q1 FY27 Earnings Release",
    details: "Un-audited financial results for the quarter ending June 30, 2026.",
    status: "CALENDAR",
  },
];

export function InvestorCalendar() {
  return (
    <Section className="py-20 bg-ink-900 border-t border-line">
      <Container>
        <div className="max-w-2xl mb-16">
          <p className="t-label text-ember font-bold mb-2">(03) SHAREHOLDER CALENDAR</p>
          <h2 className="t-h2 text-bone font-bold mb-4">Key Corporate Events</h2>
          <p className="t-body text-bone-dim">
            Mark your calendar for upcoming earnings releases, AGM sessions, and investor conferences.
          </p>
        </div>

        <Grid cols={3} className="gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="p-8 rounded-3xl border border-line bg-ink-800/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-ember">{event.date}</span>
                  <span className="text-xs font-mono bg-ember/10 text-ember border border-ember/20 px-2.5 py-0.5 rounded-full font-bold">
                    {event.status}
                  </span>
                </div>
                <h3 className="t-h3 text-bone font-bold mb-3">{event.title}</h3>
                <p className="t-body text-bone-dim text-sm leading-relaxed mb-6">
                  {event.details}
                </p>
              </div>

              <div className="border-t border-line/60 pt-4 text-xs font-mono text-bone-dim">
                <span>ZOOM WEBINAR & LIVE WEBCAST AVAILABLE</span>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
