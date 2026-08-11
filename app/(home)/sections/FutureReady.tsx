"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container } from "@/components/layout";
import { StickyStack } from "@/components/motion/StickyStack";

const FUTURE_CARDS = [
  {
    num: "(01)",
    title: "BEST IN TALENT",
    subtitle: "Cultivating world-class leaders and returnship opportunities.",
    image:
      "https://www.mahindra.com/sites/default/files/2025-07/Best%20in%20Talent-5.webp",
  },
  {
    num: "(02)",
    title: "LEADERS IN TECHNOLOGY",
    subtitle: "Pioneering AI engines, cloud infrastructure & tech hubs.",
    image:
      "https://www.mahindra.com/sites/default/files/2025-07/Leaders%20In%20Technology-5.webp",
  },
  {
    num: "(03)",
    title: "INCLUSIVE GROWTH",
    subtitle: "Co-creating value where community and industry Rise together.",
    image:
      "https://www.mahindra.com/sites/default/files/2025-07/Inclusive%20Growth-2.webp",
  },
];

export function FutureReady() {
  return (
    <Section className="bg-ink-900">
      <Container>
        {/* Header */}
        <div className="mb-16">
          <p className="t-label text-ember mb-3">(05) FUTURE READY</p>
          <h2 className="t-h1">LEVERAGING TALENT AND TECHNOLOGY</h2>
        </div>

        {/* StickyStack Cards */}
        <StickyStack>
          {FUTURE_CARDS.map((card) => (
            <FutureStackCard key={card.title} card={card} />
          ))}
        </StickyStack>
      </Container>
    </Section>
  );
}

function FutureStackCard({
  card,
}: {
  card: (typeof FUTURE_CARDS)[number];
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group relative flex h-[65vh] min-h-[440px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-ink-800 p-8 lg:p-14 border border-line shadow-2xl">
      {/* Background WebP */}
      {hasError ? (
        <div className="absolute inset-0 bg-ink-800 flex items-center justify-center p-6 text-ember">
          <span className="t-label font-bold text-center">MAHINDRA · {card.title}</span>
        </div>
      ) : (
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="100vw"
          onError={() => setHasError(true)}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

      {/* Top Number Badge */}
      <div className="relative z-20 flex items-center justify-between">
        <span className="t-label text-ember font-bold text-base">{card.num}</span>
        <span className="t-label rounded-full border border-bone/30 bg-ink-900/60 px-4 py-1.5 backdrop-blur-md">
          STRATEGIC PILLAR
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-20 max-w-[28ch]">
        <h3 className="t-h1 text-bone group-hover:text-ember transition-colors">
          {card.title}
        </h3>
        <p className="t-lead mt-4 text-bone-dim text-lg">{card.subtitle}</p>
      </div>
    </div>
  );
}
