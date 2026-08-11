"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container, Grid } from "@/components/layout";
import { ImageReveal } from "@/components/motion/ImageReveal";

const ESG_PANELS = [
  {
    num: "(01)",
    title: "870K+ GIRLS EDUCATED",
    subtitle: "Project Nanhi Kali. Where girls learn they matter.",
    src: "https://www.mahindra.com/sites/default/files/img/our-esg-focus-1.webp",
  },
  {
    num: "(02)",
    title: "CARBON NEUTRAL BY 2040",
    subtitle: "Our commitment to the planet and green energy transition.",
    src: "https://www.mahindra.com/sites/default/files/img/our-esg-focus-2.webp",
  },
  {
    num: "(03)",
    title: "GOLD STANDARDS IN GOVERNANCE",
    subtitle: "Ethics and transparency guide everything we do.",
    src: "https://www.mahindra.com/sites/default/files/img/our-esg-focus-3.webp",
  },
];

export function ESGFocus() {
  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container>
        <p className="t-label text-gold mb-4">(06) SUSTAINABILITY &amp; ESG</p>
        <h2 className="t-h1 mb-4">ROOTED IN ETHICS. GROWING WITH TRUST.</h2>
        <p className="t-lead text-bone-dim mb-16 max-w-[55ch]">
          Creating long-term stakeholder value while safeguarding environment and
          empowering communities.
        </p>

        <div className="space-y-16 lg:space-y-24">
          {ESG_PANELS.map((panel, idx) => (
            <ESGPanelRow key={panel.num} panel={panel} index={idx} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ESGPanelRow({
  panel,
  index,
}: {
  panel: (typeof ESG_PANELS)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Grid cols={2} className="gap-12 items-center">
      <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
        <span className="t-label text-gold font-bold">{panel.num}</span>
        <h3 className="t-h1 text-bone mt-2 mb-4">{panel.title}</h3>
        <p className="t-lead text-bone-dim">{panel.subtitle}</p>
      </div>

      <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
        <ImageReveal
          src={panel.src}
          alt={panel.title}
          aspectRatio="aspect-[16/10]"
          wrapperClassName="rounded-3xl border border-line shadow-2xl"
        />
      </div>
    </Grid>
  );
}
