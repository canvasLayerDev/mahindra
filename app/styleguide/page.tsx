import type { Metadata } from "next";
import { StyleguideClient } from "./StyleguideClient";

export const metadata: Metadata = {
  title: "Styleguide",
  description: "Mahindra Rise design system visual contract — Ink & Ember palette, type scale, and component inventory.",
};

export default function StyleguidePage() {
  return <StyleguideClient />;
}
