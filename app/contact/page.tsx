import type { Metadata } from "next";
import { ContactHero } from "./sections/ContactHero";
import { InquiryForm } from "./sections/InquiryForm";
import { GlobalOffices } from "./sections/GlobalOffices";
import { DirectDirectory } from "./sections/DirectDirectory";

export const metadata: Metadata = {
  title: "Contact Us & Global Offices | Mahindra Group",
  description:
    "Get in touch with Mahindra & Mahindra global corporate office, automotive customer support 1800 209 6006, investor relations desk, and global offices.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <InquiryForm />
      <GlobalOffices />
      <DirectDirectory />
    </>
  );
}
