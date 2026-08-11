import type { Metadata } from "next";
import { AutoHero } from "./sections/AutoHero";
import { FivePillars } from "./sections/FivePillars";
import { SUVRail } from "./sections/SUVRail";
import { Configurator } from "./sections/Configurator";
import { Commercial } from "./sections/Commercial";
import { Electric } from "./sections/Electric";
import { BookingCTA } from "./sections/BookingCTA";

export const metadata: Metadata = {
  title: "Automotive Range & SUVs",
  description:
    "Explore Mahindra Thar ROXX, Scorpio N, XUV700, commercial LCVs and electric mobility. Your dream SUV, just a few clicks away.",
};

export default function AutomotivePage() {
  return (
    <>
      <AutoHero />
      <FivePillars />
      <SUVRail />
      <Configurator />
      <Commercial />
      <Electric />
      <BookingCTA />
    </>
  );
}
