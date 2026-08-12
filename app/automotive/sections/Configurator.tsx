"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container } from "@/components/layout";
import { MagneticButton } from "@/components/motion/MagneticButton";

const COLOUR_VARIANTS = [
  {
    name: "Tango Red",
    hex: "#DC3A2C",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwa9415634/images/THRN/large/Thar_LXT_TangoRed_602x339.png",
  },
  {
    name: "Deep Forest",
    hex: "#1E3A2B",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwa25a9899/images/X3XE/large/AX7L_602x339_DeepForest.png",
  },
  {
    name: "Ruby Velvet",
    hex: "#6B1D2F",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw3a9ff783/images/X7XO/large/AX7L_602x339_RubyVelvet.png",
  },
  {
    name: "Stealth Oceanic",
    hex: "#1C2D42",
    src: "https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw3408d691/images/SCN/large/Z8L/Z8L_Oceanic_602x339.png",
  },
];

export function Configurator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [imgError, setImgError] = useState(false);
  const activeVariant = COLOUR_VARIANTS[selectedIdx];

  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(04) INTERACTIVE STUDIO</p>
        <h2 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] mb-12">THAR ROXX COLOUR CONFIGURATOR</h2>

        <div className="relative flex flex-col items-center justify-between rounded-3xl bg-ink-800 p-8 lg:p-16 border border-line">
          {/* Active Vehicle Display */}
          <div className="relative h-[300px] w-full max-w-[650px] lg:h-[400px]">
            {imgError ? (
              <div className="flex h-full w-full items-center justify-center bg-ink-700 text-ember rounded-2xl p-6">
                <span className="font-mono text-xs uppercase tracking-wider font-medium font-bold text-center">THAR ROXX · {activeVariant.name}</span>
              </div>
            ) : (
              <Image
                key={activeVariant.name}
                src={activeVariant.src}
                alt={`Thar ROXX ${activeVariant.name}`}
                fill
                priority
                sizes="650px"
                onError={() => setImgError(true)}
                className="object-contain transition-all duration-700 animate-fadeIn"
              />
            )}
          </div>

          {/* Color Chip Controls & Selection */}
          <div className="mt-8 flex flex-col items-center gap-6 z-20">
            <p className="font-mono text-xs uppercase tracking-wider font-medium text-bone">
              COLOUR: <span className="text-ember font-bold">{activeVariant.name}</span>
            </p>

            <div className="flex items-center gap-4">
              {COLOUR_VARIANTS.map((variant, idx) => (
                <button
                  key={variant.name}
                  onClick={() => {
                    setImgError(false);
                    setSelectedIdx(idx);
                  }}
                  className={`h-10 w-10 rounded-full border-2 transition-all duration-300 ${
                    idx === selectedIdx
                      ? "border-ember scale-125 shadow-lg shadow-ember/30"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: variant.hex }}
                  aria-label={`Select ${variant.name}`}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4">
              <MagneticButton variant="ember">Proceed to Booking</MagneticButton>
              <MagneticButton variant="ghost">Download Spec Sheet</MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
