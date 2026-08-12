import type { Metadata } from "next";
import { LeadershipHero } from "./sections/LeadershipHero";
import { LeaderGrid } from "./sections/LeaderGrid";
import { GovernanceValues } from "./sections/GovernanceValues";

export const metadata: Metadata = {
  title: "Executive Leadership & Board | Mahindra Group",
  description:
    "Meet Anand Mahindra, Dr. Anish Shah, Rajesh Jejurikar, Mohit Joshi, and Mahindra Group executive leaders driving global performance and governance.",
};

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />
      <LeaderGrid />
      <GovernanceValues />
    </>
  );
}
