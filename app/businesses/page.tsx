import type { Metadata } from "next";
import { BusinessHero } from "./sections/BusinessHero";
import { BusinessGrid } from "./sections/BusinessGrid";
import { GlobalFootprint } from "./sections/GlobalFootprint";

export const metadata: Metadata = {
  title: "Our Businesses & Sectors | Mahindra Group",
  description:
    "Explore Mahindra's 9 business verticals: Automotive SUVs, Farm Equipment, Tech Mahindra IT, Financial Services, Real Estate, Clean Energy, Logistics, Hospitality, and Aerospace.",
};

export default function BusinessesPage() {
  return (
    <>
      <BusinessHero />
      <BusinessGrid />
      <GlobalFootprint />
    </>
  );
}
