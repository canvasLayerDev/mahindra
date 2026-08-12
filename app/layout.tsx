import type { Metadata } from "next";
import { goldman, bebasNeue, satoshi, jetbrainsMono } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CursorProvider } from "@/lib/hooks/useCursor";
import { Cursor } from "@/components/shell/Cursor";
import { Preloader } from "@/components/shell/Preloader";
import { Nav } from "@/components/shell/Nav";
import { Footer } from "@/components/shell/Footer";
import { PageTransition } from "@/components/shell/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mahindra Group | Together We Rise",
    template: "%s | Mahindra Group",
  },
  description:
    "A technology & innovation-led, global federation of companies providing products, services & possibilities, enabling people to Rise.",
  keywords: [
    "Mahindra",
    "Mahindra Group",
    "Rise",
    "Automotive",
    "SUV",
    "Farm Equipment",
    "Technology",
  ],
  metadataBase: new URL("https://www.mahindra.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mahindra Group",
    title: "Mahindra Group | Together We Rise",
    description:
      "A technology & innovation-led, global federation of companies providing products, services & possibilities, enabling people to Rise.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MahindraRise",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${goldman.variable} ${bebasNeue.variable} ${satoshi.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="min-h-dvh bg-ink-900 text-bone antialiased selection:bg-ember selection:text-ink-900">
        <CursorProvider>
          <SmoothScrollProvider>
            {/* Custom Cursor */}
            <Cursor />

            {/* Initial Preloader */}
            <Preloader />

            {/* Global Fixed Header Nav */}
            <Nav />

            {/* Skip to Content for A11y */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded focus:bg-ember focus:px-4 focus:py-2 focus:text-ink-900"
            >
              Skip to main content
            </a>

            {/* Page Transition & Viewport Container */}
            <main id="main-content" className="flex flex-col min-h-screen">
              <PageTransition>{children}</PageTransition>
            </main>

            {/* Shared Global Footer */}
            <Footer />
          </SmoothScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
