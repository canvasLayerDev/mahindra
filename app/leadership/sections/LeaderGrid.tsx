"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const LEADERS = [
  {
    name: "Anand Mahindra",
    title: "Chairman, Mahindra Group",
    bio: "Transformative business leader who expanded Mahindra from an Indian steel and tractor maker into a $30 Billion global federation of businesses across 100+ nations. Recipient of Padma Bhushan, India's third highest civilian honor.",
    quote: "Rise isn't just a tagline. It is a philosophy that challenges us to accept no limits, think alternatively, and drive positive change.",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp",
    tag: "CHAIRMAN",
  },
  {
    name: "Dr. Anish Shah",
    title: "Group MD & CEO, Mahindra Group",
    bio: "Leading Mahindra Group's strategic growth, capital allocation, and digital transformation. Previously President of GE Capital India. Recognized as FICCI President and global business icon.",
    quote: "Our goal is simple: achieve 18% ROE across all operating businesses while accelerating our green transition.",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp",
    tag: "MD & CEO",
  },
  {
    name: "Rajesh Jejurikar",
    title: "Executive Director & CEO (Auto & Farm)",
    bio: "Spearheading Mahindra's SUV renaissance (Thar ROXX, Scorpio N, XUV700) and global farm mechanization. Over 30 years of experience shaping consumer mobility and agricultural tech.",
    quote: "We don't just build SUVs; we build lifestyle icons that awaken the thrill of exploration.",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Financial%20Services.webp",
    tag: "EXECUTIVE DIRECTOR",
  },
  {
    name: "Mohit Joshi",
    title: "MD & CEO, Tech Mahindra",
    bio: "Leading Tech Mahindra's Scale at Speed vision. Former President at Infosys with over two decades driving enterprise software, AI integration, and global banking technology services.",
    quote: "AI and agentic automation are redefining enterprise productivity across every industry vertical.",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp",
    tag: "TECH MAHINDRA CEO",
  },
  {
    name: "Manoj Bhat",
    title: "Group Chief Financial Officer",
    bio: "Directing financial strategy, capital allocation, investor relations, risk management, and M&A treasury operations for Mahindra & Mahindra Ltd.",
    quote: "Disciplined capital allocation and robust balance sheet strength underpin our long-term value creation.",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Renewable%20Services.webp",
    tag: "GROUP CFO",
  },
  {
    name: "Mohit Kapoor",
    title: "Group Chief Technology Officer",
    bio: "Championing group-wide digital architectures, cloud transformations, AI innovation, and cybersecurity frameworks across all Mahindra subsidiaries.",
    quote: "Building a digital engine that powers hyper-personalized customer experiences at scale.",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Real%20Estate%20Services.webp",
    tag: "GROUP CTO",
  },
];

export function LeaderGrid() {
  const [selectedLeader, setSelectedLeader] = useState<typeof LEADERS[0] | null>(null);
  const { setVariant } = useCursor();

  return (
    <Section className="py-20 bg-ink-900 border-t border-line">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="t-label text-ember font-bold mb-2">(01) EXECUTIVE LEADERSHIP</p>
            <h2 className="t-h2 text-bone font-bold">Group Executive Board</h2>
          </div>
          <p className="t-body text-bone-dim max-w-md">
            Click on any leader to view their strategic vision and executive background.
          </p>
        </div>

        <Grid cols={3} className="gap-8">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer rounded-3xl border border-line bg-ink-800/40 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-ember/50 hover:bg-ink-800/80 hover:-translate-y-1.5"
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              <div>
                <div className="relative h-64 w-full bg-ink-950 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-ember/10 border border-ember/30 text-ember px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-md">
                    {leader.tag}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="t-h3 text-bone font-bold mb-1">{leader.name}</h3>
                  <p className="text-sm text-ember font-medium mb-4">{leader.title}</p>
                  <p className="text-xs text-bone-dim line-clamp-3 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 flex items-center justify-between border-t border-line/50 mt-auto pt-4 text-xs font-mono text-ember font-bold">
                <span>VIEW PROFILE</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </Grid>

        {/* Leader Bio Modal */}
        {selectedLeader && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center bg-ink-950/80 backdrop-blur-xl p-6 animate-in fade-in duration-300">
            <div className="relative w-full max-w-2xl rounded-3xl border border-line bg-ink-900 p-8 lg:p-12 shadow-2xl overflow-hidden">
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-6 right-6 text-bone-dim hover:text-ember transition-colors font-mono text-sm"
              >
                [ CLOSE ✕ ]
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-bold text-ember bg-ember/10 border border-ember/30 px-3 py-1 rounded-full">
                  {selectedLeader.tag}
                </span>
              </div>

              <h3 className="t-h2 text-bone font-bold mb-2">{selectedLeader.name}</h3>
              <p className="text-lg text-ember font-semibold mb-6">{selectedLeader.title}</p>

              <div className="p-6 rounded-2xl border border-ember/30 bg-ember/10 mb-6 italic text-bone font-serif text-lg leading-relaxed">
                &ldquo;{selectedLeader.quote}&rdquo;
              </div>

              <p className="t-body text-bone-dim leading-relaxed mb-8">
                {selectedLeader.bio}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="px-8 py-3 rounded-full bg-ember text-ink-900 font-bold uppercase tracking-wider hover:bg-ember/90 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
