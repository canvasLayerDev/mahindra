"use client";

import { useState } from "react";
import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const OPENINGS = [
  {
    id: "auto-1",
    title: "Senior EV Systems Architect",
    sector: "Automotive (BE.6e & Electric)",
    location: "Chennai (MRV)",
    type: "Full-Time · R&D",
    desc: "Design next-gen 800V high-voltage battery architecture and motor controller software.",
    category: "auto",
  },
  {
    id: "tech-1",
    title: "Lead AI & Agentic Engineer",
    sector: "Tech Mahindra",
    location: "Pune / Bengaluru",
    type: "Full-Time · Tech",
    desc: "Architect LLM and agentic workflow orchestration for fortune 500 enterprise clients.",
    category: "tech",
  },
  {
    id: "fin-1",
    title: "Head of Risk & Credit Analytics",
    sector: "Mahindra Financial Services",
    location: "Mumbai HQ",
    type: "Full-Time · Finance",
    desc: "Drive ML-based credit underwriting models for semi-urban and rural portfolio expansion.",
    category: "finance",
  },
  {
    id: "esg-1",
    title: "Senior Decarbonization Manager",
    sector: "Mahindra Susten / Group ESG",
    location: "Mumbai / Remote",
    type: "Full-Time · Sustainability",
    desc: "Lead Scope 1, 2 & 3 net-zero decarbonization roadmap across group manufacturing plants.",
    category: "esg",
  },
  {
    id: "auto-2",
    title: "Chief Vehicle Dynamics Engineer",
    sector: "Automotive SUV Division",
    location: "Chennai (MRV)",
    type: "Full-Time · Engineering",
    desc: "Calibrate frequency dependent damping and off-road 4X4 suspension tuning for upcoming SUV platforms.",
    category: "auto",
  },
  {
    id: "tech-2",
    title: "Global Enterprise Cloud Lead",
    sector: "Tech Mahindra",
    location: "Hyderabad / Remote",
    type: "Full-Time · Cloud",
    desc: "Manage multi-cloud AWS/Azure hybrid migration architectures for telecommunication operators.",
    category: "tech",
  },
];

export function JobSearchPortal() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedJob, setAppliedJob] = useState<string | null>(null);
  const { setVariant } = useCursor();

  const filteredJobs = OPENINGS.filter((job) => {
    const matchesCategory = categoryFilter === "all" || job.category === categoryFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Section className="py-24 bg-ink-950 border-t border-line">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="t-label text-ember font-bold mb-2">(02) ACTIVE OPPORTUNITIES</p>
            <h2 className="t-h2 text-bone font-bold">Search Open Positions</h2>
          </div>
          <p className="t-body text-bone-dim max-w-md">
            Find your next leadership or engineering milestone at Mahindra.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-6 rounded-3xl border border-line bg-ink-900/80 backdrop-blur-xl mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by role, skill, or location (e.g. EV, Chennai, AI)..."
            className="w-full md:w-1/2 rounded-full border border-line bg-ink-950 px-6 py-3 text-bone placeholder-bone-dim/40 focus:border-ember focus:outline-none transition-colors text-sm"
          />

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: "all", label: "ALL" },
              { id: "auto", label: "AUTO & EV" },
              { id: "tech", label: "TECH & AI" },
              { id: "finance", label: "FINANCE" },
              { id: "esg", label: "SUSTAINABILITY" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  categoryFilter === cat.id
                    ? "bg-ember text-ink-900"
                    : "bg-ink-800 text-bone-dim hover:text-bone"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <Grid cols={2} className="gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl border border-line bg-ink-900/60 flex flex-col justify-between hover:border-ember/40 hover:bg-ink-800/60 transition-all"
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-ember bg-ember/10 border border-ember/30 px-3 py-1 rounded-full">
                    {job.sector}
                  </span>
                  <span className="text-xs font-mono text-bone-dim">{job.type}</span>
                </div>
                <h3 className="t-h3 text-bone font-bold mb-2">{job.title}</h3>
                <p className="text-xs font-mono text-ember font-semibold mb-4">📍 {job.location}</p>
                <p className="t-body text-bone-dim text-sm leading-relaxed mb-6">
                  {job.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-line/50 flex items-center justify-between">
                <span className="text-xs font-mono text-bone-dim">MATCHING PROFILE</span>
                <button
                  onClick={() => setAppliedJob(job.title)}
                  className="px-6 py-2.5 rounded-full border border-ember text-ember font-bold text-xs uppercase tracking-wider hover:bg-ember hover:text-ink-900 transition-colors"
                >
                  Apply Role →
                </button>
              </div>
            </div>
          ))}
        </Grid>

        {/* Application Modal */}
        {appliedJob && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center bg-ink-950/80 backdrop-blur-xl p-6 animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg rounded-3xl border border-line bg-ink-900 p-8 shadow-2xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ember/20 text-ember mb-6 border border-ember/40">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="t-h3 text-bone font-bold mb-2">Application Portal Initiated</h3>
              <p className="text-sm text-bone-dim mb-6">
                You are applying for <span className="text-ember font-bold">{appliedJob}</span>.
              </p>
              <p className="text-xs text-bone-dim mb-8">
                Your profile has been forwarded to Mahindra Group HR. You may also email your resume directly to <span className="text-bone font-mono font-semibold">careers@mahindra.com</span>.
              </p>
              <button
                onClick={() => setAppliedJob(null)}
                className="px-8 py-3 rounded-full bg-ember text-ink-900 font-bold uppercase tracking-wider hover:bg-ember/90 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
