"use client";

import { useState } from "react";
import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const METRICS = [
  {
    title: "Consolidated Revenue",
    value: "₹1,42,500 Cr",
    change: "+19.4% YoY",
    badge: "FY26 HIGHLIGHT",
    detail: "Driven by record high SUV market share and robust tractor volume growth.",
  },
  {
    title: "Consolidated PAT",
    value: "₹11,850 Cr",
    change: "+24.1% YoY",
    badge: "RECORD PROFIT",
    detail: "Profit after tax expanding on operational leverage and cost efficiencies.",
  },
  {
    title: "Automotive Market Share",
    value: "21.6%",
    change: "+230 bps",
    badge: "REVENUE MARKET SHARE",
    detail: "#1 position in SUV revenue share led by Thar ROXX, Scorpio N, & XUV700.",
  },
  {
    title: "Farm Equipment Share",
    value: "42.8%",
    change: "+110 bps",
    badge: "DOMINANT LEAD",
    detail: "Sustaining clear market leadership across domestic and export markets.",
  },
];

export function FinancialDashboard() {
  const [activeSegment, setActiveSegment] = useState("all");
  const { setVariant } = useCursor();

  return (
    <Section className="py-20 bg-ink-900 border-t border-line">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="t-label text-ember font-bold mb-2">(01) FINANCIAL HIGHLIGHTS</p>
            <h2 className="t-h2 text-bone font-bold">Key Financial Metrics</h2>
          </div>
          <div className="flex items-center gap-2 bg-ink-800 p-1.5 rounded-full border border-line">
            <button
              onClick={() => setActiveSegment("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeSegment === "all" ? "bg-ember text-ink-900" : "text-bone-dim"
              }`}
            >
              CONSOLIDATED
            </button>
            <button
              onClick={() => setActiveSegment("auto")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeSegment === "auto" ? "bg-ember text-ink-900" : "text-bone-dim"
              }`}
            >
              AUTO & FARM
            </button>
          </div>
        </div>

        <Grid cols={2} className="gap-8 mb-16">
          {METRICS.map((metric) => (
            <div
              key={metric.title}
              className="p-8 rounded-3xl border border-line bg-ink-800/40 hover:border-ember/40 transition-all flex flex-col justify-between"
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-ember bg-ember/10 border border-ember/30 px-3 py-1 rounded-full">
                    {metric.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-bone-dim mb-2">
                  {metric.title}
                </h3>
                <p className="t-display text-bone font-bold text-4xl xl:text-5xl mb-4 font-display">
                  {metric.value}
                </p>
              </div>
              <p className="text-xs text-bone-dim border-t border-line/60 pt-4 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
