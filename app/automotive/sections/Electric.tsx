"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container, Grid } from "@/components/layout";

const ELECTRIC_VEHICLES = [
  { name: "XUV400 EV", tag: "PASSENGER EV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dweb7ab251/images/X400/large/XUV400_602x339.png" },
  { name: "Treo", tag: "3-WHEELER EV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwc804d513/images/e-commercial/large/treo-side-235x127.png" },
  { name: "Treo Grand", tag: "3-WHEELER EV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwecb83b38/images/treo-grand-235x127.png" },
  { name: "Treo Zor", tag: "CARGO EV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwf22c0fe4/images/treo-zor-235x127.png" },
  { name: "Treo Yaari", tag: "PASSENGER EV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw82325382/images/treo-yaari-side-235x127.png" },
  { name: "e-Alfa Cargo", tag: "CARGO EV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw0acb42c7/images/e_alfa-cargo3.png" },
  { name: "e-Alpha Super", tag: "3-WHEELER EV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwd1261336/images/e-alpha-super-235x127.png" },
];

export function Electric() {
  return (
    <Section className="relative bg-ink-900 border-t border-line overflow-hidden">
      {/* Background Teal Particle Glow Accent */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#00D2B5]/10 blur-[150px]" />

      <Container className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-[#00D2B5] mb-4">(06) ELECTRIC MOBILITY</p>
        <h2 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] mb-16 text-bone">
          LAST MILE &amp; PASSENGER <span className="text-[#00D2B5]">ELECTRIC</span>
        </h2>

        <Grid cols={3} className="gap-8">
          {ELECTRIC_VEHICLES.map((item) => (
            <ElectricCard key={item.name} item={item} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

function ElectricCard({
  item,
}: {
  item: (typeof ELECTRIC_VEHICLES)[number];
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink-800 p-6 border border-line transition-all duration-300 hover:border-[#00D2B5]">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs uppercase tracking-wider font-medium text-[#00D2B5] font-bold">{item.tag}</span>
        <span className="h-2 w-2 rounded-full bg-[#00D2B5] animate-pulse" />
      </div>

      <div className="relative h-[180px] w-full flex items-center justify-center my-4">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center bg-ink-700 text-[#00D2B5] rounded-lg p-2">
            <span className="font-mono text-xs uppercase tracking-wider font-medium font-bold text-center">{item.name}</span>
          </div>
        ) : (
          <Image
            src={item.src}
            alt={item.name}
            fill
            sizes="250px"
            onError={() => setHasError(true)}
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="border-t border-line/50 pt-4">
        <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone text-xl group-hover:text-[#00D2B5] transition-colors">
          {item.name}
        </h3>
      </div>
    </div>
  );
}
