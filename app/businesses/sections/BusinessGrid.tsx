"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const CATEGORIES = [
  { id: "all", label: "All Sectors" },
  { id: "mobility", label: "Mobility & Auto" },
  { id: "tech", label: "Technology & Digital" },
  { id: "financial", label: "Financial Services" },
  { id: "infra", label: "Real Estate & Infra" },
  { id: "energy", label: "Clean Energy & Logistics" },
];

const VERTICALS_DATA = [
  {
    title: "Automotive Sector",
    category: "mobility",
    subtitle: "Pioneering Indian SUV Culture & Electric Mobility",
    desc: "India's leading SUV manufacturer with legendary nameplates Thar ROXX, Scorpio N, XUV700, and BE 6e Electric Origin SUVs.",
    stat: "NPS Leader",
    statVal: "#1 SUV Brand",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp",
    link: "/automotive",
  },
  {
    title: "Farm Equipment Sector",
    category: "mobility",
    subtitle: "The World's Largest Tractor Manufacturer by Volume",
    desc: "Empowering farmers globally across 50+ countries with advanced precision farming tech, OJA lightweight tractors, and farm mechanization.",
    stat: "Global Volume",
    statVal: "#1 Worldwide",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Financial%20Services.webp",
    link: "/#what-we-do",
  },
  {
    title: "Tech Mahindra",
    category: "tech",
    subtitle: "AI-First & Next-Gen Digital Transformation Services",
    desc: "Connecting 145,000+ technology professionals assisting 1,100+ global clients with AI Agentic solutions, 5G networks, and cloud architecture.",
    stat: "Tech Force",
    statVal: "145K+ Experts",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp",
    link: "/#what-we-do",
  },
  {
    title: "Mahindra Financial Services",
    category: "financial",
    subtitle: "Democratizing Financial Access across Rural & Semi-Urban India",
    desc: "Leading NBFC providing vehicle loans, SME financing, rural insurance distribution, and wealth management to over 10 Million customers.",
    stat: "Assets Managed",
    statVal: "₹1,00,000+ Cr AUM",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Financial%20Services.webp",
    link: "/#what-we-do",
  },
  {
    title: "Mahindra Lifespaces & Real Estate",
    category: "infra",
    subtitle: "Crafting Net-Zero Certified Sustainable Spaces",
    desc: "Building climate-conscious residential communities and world-class Mahindra World City integrated industrial corridors.",
    stat: "Sustainability",
    statVal: "Net-Zero Certified",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Real%20Estate%20Services.webp",
    link: "/#what-we-do",
  },
  {
    title: "Mahindra Susten & Renewable Energy",
    category: "energy",
    subtitle: "Accelerating India's Net-Zero & Solar Revolution",
    desc: "Pioneering utility-scale solar PV development, IPP clean energy production, and green energy infrastructure.",
    stat: "Clean Power",
    statVal: "1.5+ GW Installed",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Renewable%20Services.webp",
    link: "/#what-we-do",
  },
  {
    title: "Mahindra Logistics",
    category: "energy",
    subtitle: "Integrated 3PL Supply Chain & Express Distribution",
    desc: "End-to-end supply chain management, B2B express logistics, electric fleet solutions, and warehousing infrastructure.",
    stat: "Warehouse Area",
    statVal: "19M+ Sq. Ft.",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp",
    link: "/#what-we-do",
  },
  {
    title: "Club Mahindra & Hospitality",
    category: "infra",
    subtitle: "India's Premier Vacation Ownership & Resort Brand",
    desc: "Curating unforgettable family holiday experiences across 120+ scenic resorts in India, Finland, Sweden, and South East Asia.",
    stat: "Member Base",
    statVal: "290,000+ Families",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp",
    link: "/#what-we-do",
  },
  {
    title: "Mahindra Aerospace & Defence",
    category: "mobility",
    subtitle: "Advanced Aerostructures Manufacturing & Utility Aircraft",
    desc: "Manufacturing precision aircraft structural assemblies for global aerospace giants and tactical vehicles for defence forces.",
    stat: "Export Footprint",
    statVal: "Global Tier 1 Supplier",
    image: "https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Renewable%20Services.webp",
    link: "/#what-we-do",
  },
];

export function BusinessGrid() {
  const [filter, setFilter] = useState("all");
  const { setVariant } = useCursor();

  const filteredItems = filter === "all"
    ? VERTICALS_DATA
    : VERTICALS_DATA.filter((item) => item.category === filter);

  return (
    <Section className="py-20 bg-ink-900 border-t border-line">
      <Container>
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-16 justify-center md:justify-start">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat.id
                  ? "bg-ember text-ink-900 shadow-md shadow-ember/20"
                  : "bg-ink-800 border border-line text-bone-dim hover:border-ember/40 hover:text-bone"
              }`}
              onMouseEnter={() => setVariant("ring")}
              onMouseLeave={() => setVariant("default")}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Verticals Grid */}
        <Grid cols={3} className="gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-line bg-ink-800/40 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-ember/50 hover:bg-ink-800/80 hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-ink-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-ink-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-line text-xs font-mono font-bold text-ember">
                    {item.statVal}
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-ember font-bold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="t-h3 text-bone font-bold mb-4">{item.title}</h3>
                  <p className="t-body text-bone-dim text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 flex items-center justify-between border-t border-line/50 mt-auto pt-6">
                <span className="text-xs font-mono text-bone-dim">{item.stat}</span>
                <Link
                  href={item.link}
                  className="text-xs font-bold uppercase tracking-wider text-ember hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  onMouseEnter={() => setVariant("ring")}
                  onMouseLeave={() => setVariant("default")}
                >
                  Explore Vertical →
                </Link>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
