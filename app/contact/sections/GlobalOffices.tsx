"use client";

import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const OFFICES = [
  {
    city: "Mumbai, India",
    role: "Global Corporate Headquarters",
    address: "Mahindra Towers, Dr. G.M. Bhosale Marg, Worli, Mumbai - 400018",
    phone: "+91 22 2490 1441",
    email: "group.communications@mahindra.com",
    tag: "GLOBAL HQ",
  },
  {
    city: "Chennai, India",
    role: "Mahindra Research Valley (MRV)",
    address: "Mahindra World City, Chengalpattu District, Tamil Nadu - 603004",
    phone: "+91 44 3747 3000",
    email: "mrv.info@mahindra.com",
    tag: "R&D INNOVATION",
  },
  {
    city: "Pune, India",
    role: "Tech Mahindra Technology Hub",
    address: "Phase 3, Rajiv Gandhi InfoTech Park, Hinjewadi, Pune - 411057",
    phone: "+91 20 4225 0000",
    email: "info@techmahindra.com",
    tag: "TECH & DIGITAL",
  },
  {
    city: "Houston, TX, USA",
    role: "Mahindra North America HQ",
    address: "9020 Jackrabbit Rd, Houston, TX 77095, United States",
    phone: "+1 877 444 3445",
    email: "usa.sales@mahindra.com",
    tag: "NORTH AMERICA",
  },
  {
    city: "Rome, Italy",
    role: "Mahindra Europe S.r.l.",
    address: "Via P. G. Terrachini 12, 42122 Reggio Emilia, Italy",
    phone: "+39 0522 345678",
    email: "europe@mahindra.com",
    tag: "EUROPEAN DESK",
  },
];

export function GlobalOffices() {
  const { setVariant } = useCursor();

  return (
    <Section className="py-24 bg-ink-950 border-t border-line">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="t-label text-ember font-bold mb-2">(02) WORLDWIDE PRESENCE</p>
            <h2 className="t-h2 text-bone font-bold">Global Office Locations</h2>
          </div>
          <p className="t-body text-bone-dim max-w-md">
            Connecting our 327,000+ strong workforce across 100+ countries with localized excellence centers.
          </p>
        </div>

        <Grid cols={3} className="gap-8">
          {OFFICES.map((office) => (
            <div
              key={office.city}
              className="group relative rounded-3xl border border-line bg-ink-900/60 p-8 transition-all duration-500 hover:border-ember/50 hover:bg-ink-800/80 hover:-translate-y-1"
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-ember bg-ember/10 border border-ember/20 px-3 py-1 rounded-full">
                  {office.tag}
                </span>
                <span className="h-2 w-2 rounded-full bg-ember/60 group-hover:bg-ember group-hover:scale-125 transition-all" />
              </div>

              <h3 className="t-h3 text-bone font-bold mb-1">{office.city}</h3>
              <p className="text-sm text-ember font-medium mb-4">{office.role}</p>

              <p className="text-sm text-bone-dim leading-relaxed mb-6">
                {office.address}
              </p>

              <div className="space-y-2 border-t border-line/60 pt-4 text-xs font-mono text-bone-dim">
                <p className="flex items-center gap-2">
                  <span className="text-ember font-bold">TEL:</span> {office.phone}
                </p>
                <p className="flex items-center gap-2 truncate">
                  <span className="text-ember font-bold">MAIL:</span> {office.email}
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
