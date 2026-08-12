"use client";

import { useState } from "react";
import Image from "next/image";

const FUTURE_CARDS = [
  {
    num: "(01)",
    title: "BEST IN TALENT",
    subtitle: "Cultivating world-class leaders and returnship opportunities.",
    image:
      "/m1.png",
  },
  {
    num: "(02)",
    title: "LEADERS IN TECHNOLOGY",
    subtitle: "Pioneering AI engines, cloud infrastructure & tech hubs.",
    image:
      "/m2.png",
  },
  {
    num: "(03)",
    title: "INCLUSIVE GROWTH",
    subtitle: "Co-creating value where community and industry Rise together.",
    image:
      "/m3.png",
  },
];

export function FutureReady() {
  return (
    <section className="bg-ink-900 relative">
      {/* Header overlay */}
      <div className="absolute top-12 left-6 lg:left-[120px] z-50 pointer-events-none">
        <p className="font-mono text-sm uppercase tracking-wider font-medium text-white mb-4 drop-shadow-md">(05) FUTURE READY</p>
        <h2 className="font-display text-4xl uppercase leading-[0.9] text-white drop-shadow-lg">LEVERAGING TALENT AND TECHNOLOGY</h2>
      </div>

      <div className="relative">
        {FUTURE_CARDS.map((card, idx) => (
          <div key={card.title} className="sticky top-0 h-screen w-full">
            <FutureStackCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
}

function FutureStackCard({
  card,
}: {
  card: (typeof FUTURE_CARDS)[number];
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group relative flex h-full w-full flex-col justify-end overflow-hidden bg-ink-800 p-6 lg:p-[120px]">
      {/* Background WebP */}
      {hasError ? (
        <div className="absolute inset-0 bg-ink-800 flex items-center justify-center p-6 text-ember">
          <span className="font-mono text-xs uppercase tracking-wider font-medium font-bold text-center">MAHINDRA · {card.title}</span>
        </div>
      ) : (
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="100vw"
          onError={() => setHasError(true)}
          className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />
      )}



      {/* Bottom Content */}
      <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full">
        <div className="max-w-[50ch]">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm uppercase tracking-wider font-medium text-ember font-bold">{card.num}</span>
            <span className="font-mono text-xs uppercase tracking-wider font-medium border border-white/20 bg-ink-900/40 px-4 py-1.5 backdrop-blur-md text-white">
              STRATEGIC PILLAR
            </span>
          </div>
          <h3 className="font-display text-[clamp(40px,6vw,60px)] uppercase leading-[0.95] text-bone group-hover:text-ember transition-colors">
            {card.title}
          </h3>
          <p className="font-body text-[clamp(20px,2vw,32px)] leading-tight mt-4 text-bone-dim">
            {card.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
