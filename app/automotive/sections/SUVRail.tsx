"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout";
import { HorizontalRail } from "@/components/motion/HorizontalRail";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { useCursor } from "@/lib/hooks/useCursor";

const SUV_MODELS = [
  {
    name: "Thar ROXX",
    tag: "5-DOOR SUV",
    price: "Starts ₹12.99 Lakh*",
    power: "177 BHP",
    torque: "380 Nm",
    drive: "4XPLOR 4WD",
    glow: "#DC3A2C",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwa4de1cb1/images/TH5D/large/Thar_Roxx_602x339.png",
  },
  {
    name: "Thar 4x4",
    tag: "OFF-ROAD ICON",
    price: "Starts ₹11.35 Lakh*",
    power: "150 BHP",
    torque: "320 Nm",
    drive: "4x4 / RWD",
    glow: "#DC3A2C",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwa9415634/images/THRN/large/Thar_LXT_TangoRed_602x339.png",
  },
  {
    name: "Scorpio-N",
    tag: "BIG DADDY OF SUVs",
    price: "Starts ₹13.85 Lakh*",
    power: "203 BHP",
    torque: "380 Nm",
    drive: "4XPLOR AWD",
    glow: "#00D2B5",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw3408d691/images/SCN/large/Z8L/Z8L_Oceanic_602x339.png",
  },
  {
    name: "Scorpio Classic",
    tag: "LEGENDARY SUV",
    price: "Starts ₹13.62 Lakh*",
    power: "132 BHP",
    torque: "300 Nm",
    drive: "RWD mHawk",
    glow: "#C6A15B",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw95797f68/images/SCRC/large/ScorpioClassic_602x339.png",
  },
  {
    name: "XUV 7XO",
    tag: "PREMIUM 7-SEATER",
    price: "Starts ₹13.99 Lakh*",
    power: "200 BHP",
    torque: "380 Nm",
    drive: "AWD / FWD",
    glow: "#6B1D2F",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw3a9ff783/images/X7XO/large/AX7L_602x339_RubyVelvet.png",
  },
  {
    name: "XUV 3XO",
    tag: "TURBO COMPACT",
    price: "Starts ₹7.49 Lakh*",
    price2: "0-60 in 4.5s",
    power: "130 BHP",
    torque: "230 Nm",
    drive: "Zip/Zap/Zoom",
    glow: "#1E3A2B",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwa25a9899/images/X3XE/large/AX7L_602x339_DeepForest.png",
  },
  {
    name: "XUV400 EV",
    tag: "100% ELECTRIC",
    price: "Starts ₹15.49 Lakh*",
    power: "150 BHP",
    torque: "310 Nm",
    drive: "456 km Range",
    glow: "#00D2B5",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dweb7ab251/images/X400/large/XUV400_602x339.png",
  },
  {
    name: "Bolero Neo",
    tag: "TOUGH SUV",
    price: "Starts ₹9.95 Lakh*",
    power: "100 BHP",
    torque: "260 Nm",
    drive: "mHawk75",
    glow: "#C6A15B",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw24e99287/images/NEO/large/BoleroNeo_602x339.png",
  },
  {
    name: "Bolero Neo Plus",
    tag: "9-SEATER PEOPLE MOVER",
    price: "Starts ₹11.39 Lakh*",
    power: "120 BHP",
    torque: "280 Nm",
    drive: "mHawk2.2",
    glow: "#C6A15B",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwc6625064/images/NEOP/large/BoleroNeoPlus_602x339.png",
  },
  {
    name: "Bolero Classic",
    tag: "INDIAN UTILITY ICON",
    price: "Starts ₹9.79 Lakh*",
    power: "76 BHP",
    torque: "210 Nm",
    drive: "mHawk75",
    glow: "#DC3A2C",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw2de0a99b/images/BOL/large/BoleroClassic_602x339.png",
  },
  {
    name: "Marazzo",
    tag: "LUXURY MPV",
    price: "Starts ₹14.39 Lakh*",
    power: "121 BHP",
    torque: "300 Nm",
    drive: "Quiet Diesel",
    glow: "#8E8C87",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw624c0294/images/MRZO/large/marazzo_1_white_900x439.png",
  },
];

export function SUVRail() {
  return (
    <div className="bg-ink-900 py-24">
      <Container className="mb-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="t-label text-ember mb-3 font-bold">(03) HIGH-DEFINITION LINEUP</p>
            <h2 className="t-h1 text-bone">EXPLORE MAHINDRA RANGE</h2>
          </div>
          <span className="t-label text-gold font-mono text-sm font-bold">
            SWIPE / SCROLL FOR SPECIFICATIONS →
          </span>
        </div>
      </Container>

      <HorizontalRail>
        {SUV_MODELS.map((model, idx) => (
          <VehicleCard key={model.name} model={model} index={idx + 1} />
        ))}
      </HorizontalRail>
    </div>
  );
}

function VehicleCard({
  model,
  index,
}: {
  model: (typeof SUV_MODELS)[number];
  index: number;
}) {
  const { setVariant, setCursorText } = useCursor();
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative flex h-[540px] w-[85vw] md:w-[45vw] lg:w-[32vw] shrink-0 flex-col justify-between rounded-3xl bg-ink-800 p-8 border border-line transition-all duration-500 hover:border-ember hover:shadow-2xl hover:shadow-ember/20"
      onMouseEnter={() => {
        setVariant("view");
        setCursorText("SPECS");
      }}
      onMouseLeave={() => {
        setVariant("default");
        setCursorText("");
      }}
    >
      {/* Top Header & Tag */}
      <div className="flex justify-between items-start z-10">
        <span className="t-label font-mono text-bone-dim text-xs font-bold">
          ({String(index).padStart(2, "0")})
        </span>
        <div className="flex flex-col items-end">
          <span className="t-label text-ember font-bold text-xs">{model.tag}</span>
          <span className="text-xs font-mono font-bold text-gold mt-1">
            {model.price}
          </span>
        </div>
      </div>

      {/* Floating High-Res Vehicle PNG with Under-Car Color Glow */}
      <div className="relative my-auto h-[220px] w-full flex items-center justify-center">
        {/* Dynamic Under-Car Glow Reflection */}
        <div
          className="pointer-events-none absolute bottom-0 h-12 w-4/5 rounded-full blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-70"
          style={{ backgroundColor: model.glow }}
        />

        {hasError ? (
          <div className="flex h-full w-full items-center justify-center bg-ink-700 text-ember rounded-xl p-4">
            <span className="t-label font-bold text-center">{model.name}</span>
          </div>
        ) : (
          <Image
            src={model.src}
            alt={model.name}
            fill
            quality={100}
            sizes="450px"
            onError={() => setHasError(true)}
            className="object-contain transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-105"
          />
        )}
      </div>

      {/* Footer Info & Engine Specs */}
      <div className="z-10 border-t border-line/60 pt-4">
        <h3 className="t-h2 text-bone text-2xl group-hover:text-ember transition-colors mb-4 font-bold">
          {model.name}
        </h3>

        {/* 3 Spec Badges */}
        <div className="grid grid-cols-3 gap-2 mb-4 bg-ink-900/80 p-3 rounded-xl border border-line/50 text-center">
          <div>
            <p className="text-[10px] t-label text-bone-dim font-bold">POWER</p>
            <p className="text-xs font-bold font-mono text-bone">{model.power}</p>
          </div>
          <div className="border-x border-line/50">
            <p className="text-[10px] t-label text-bone-dim font-bold">TORQUE</p>
            <p className="text-xs font-bold font-mono text-bone">{model.torque}</p>
          </div>
          <div>
            <p className="text-[10px] t-label text-bone-dim font-bold">DRIVE</p>
            <p className="text-xs font-bold font-mono text-ember font-bold">{model.drive}</p>
          </div>
        </div>

        <AnimatedLink href="/automotive">View Full Specifications →</AnimatedLink>
      </div>
    </div>
  );
}
