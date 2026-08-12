import type { Metadata } from "next";
import { InvestorsHero } from "./sections/InvestorsHero";
import { FinancialDashboard } from "./sections/FinancialDashboard";
import { ReportsDownload } from "./sections/ReportsDownload";
import { InvestorCalendar } from "./sections/InvestorCalendar";

export const metadata: Metadata = {
  title: "Investor Relations & Financial Reports | Mahindra & Mahindra",
  description:
    "Mahindra & Mahindra financial performance, quarterly earnings releases, annual reports, stock metrics (M&M), and corporate governance.",
};

export default function InvestorsPage() {
  return (
    <>
      <InvestorsHero />
      <FinancialDashboard />
      <ReportsDownload />
      <InvestorCalendar />
    </>
  );
}
