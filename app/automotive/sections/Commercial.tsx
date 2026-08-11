"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container, Grid } from "@/components/layout";
import { ImageReveal } from "@/components/motion/ImageReveal";

const COMMERCIAL_VEHICLES = [
  { name: "Pik-Up", category: "COMMERCIAL", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw8ec9f3e3/images/PUP/large/26_01_PAGE_B_PIK-UP_Menu_602x339.png" },
  { name: "Camper", category: "COMMERCIAL", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw93159884/images/CMPR/large/26_01_CAMPER_Menu_602x339.png" },
  { name: "Bolero MaXX", category: "SCV", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw318e4450/images/MAXX/large/MAXX.png" },
  { name: "Bolero MaXX HD", category: "HEAVY DUTY", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwe57800c8/images/MXHD/large/MAXX-HD.png" },
  { name: "Jeeto Strong", category: "MINI TRUCK", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw6fabc1e7/images/small-commercial/large/jeeto-strong-new.png" },
  { name: "Supro Mini Truck", category: "MINI TRUCK", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw1720ab83/images/supro-mini-truck-235x127.png" },
  { name: "Alfa Load", category: "3-WHEELER", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw304c56a1/images/alpha-load-235x127.png" },
  { name: "Blazo X", category: "HEAVY TRUCK", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw1966cab2/images/trucks/large/mahindra-blazo-x-235x127.png" },
  { name: "Furio", category: "ICV TRUCK", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwd202c5ca/images/mahindra-furio-235x127.png" },
  { name: "Jayo", category: "LIGHT TRUCK", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw0cf88529/images/jayo-truck-235x127.png" },
  { name: "Cruzio", category: "BUS", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwfc99eec1/images/buses/large/mahindra-cruzio-regular-bus-235x127.png" },
  { name: "Cruzio Grande", category: "LUXURY BUS", src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw6209075a/images/mahindra-cruzio-grande-regular-bus235x127.png" },
];

export function Commercial() {
  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container>
        <p className="t-label text-ember mb-4">(05) COMMERCIAL &amp; LOGISTICS</p>
        <h2 className="t-h1 mb-16">COMMERCIAL VEHICLE RANGE</h2>

        <Grid cols={3} className="gap-8">
          {COMMERCIAL_VEHICLES.map((item) => (
            <CommercialCard key={item.name} item={item} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

function CommercialCard({
  item,
}: {
  item: (typeof COMMERCIAL_VEHICLES)[number];
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink-800 p-6 border border-line transition-all duration-300 hover:border-ember">
      <div className="flex justify-between items-start mb-4">
        <span className="t-label text-ember">{item.category}</span>
      </div>

      <div className="relative h-[160px] w-full flex items-center justify-center my-4">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center bg-ink-700 text-ember rounded-lg p-2">
            <span className="t-label font-bold text-center">{item.name}</span>
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
        <h3 className="t-h2 text-bone text-xl group-hover:text-ember transition-colors">
          {item.name}
        </h3>
      </div>
    </div>
  );
}
