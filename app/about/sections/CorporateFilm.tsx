"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";
import { useMagnetic } from "@/lib/hooks/useMagnetic";

export function CorporateFilm() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playButtonRef = useMagnetic<HTMLButtonElement>({ radius: 80, maxDistance: 14 });
  const { setVariant, setCursorText } = useCursor();
  const [posterError, setPosterError] = useState(false);

  return (
    <>
      <Section className="bg-ink-900 border-t border-line">
        <Container>
          <p className="t-label text-gold mb-4">(02) CORPORATE FILM</p>
          <h2 className="t-h1 mb-12">OUR PURPOSE IN MOTION</h2>

          {/* Interactive Poster Banner */}
          <div
            className="group relative flex h-[60vh] min-h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl bg-ink-800 border border-line shadow-2xl cursor-pointer"
            onClick={() => setIsPlaying(true)}
            onMouseEnter={() => {
              setVariant("view");
              setCursorText("PLAY");
            }}
            onMouseLeave={() => {
              setVariant("default");
              setCursorText("");
            }}
          >
            {/* Background Poster */}
            {posterError ? (
              <div className="absolute inset-0 bg-ink-800 flex items-center justify-center p-6 text-gold">
                <span className="t-label font-bold text-center">MAHINDRA CORPORATE FILM</span>
              </div>
            ) : (
              <Image
                src="https://www.mahindra.com/sites/default/files/2025-09/Corporate%20Film-Homepage%20Banner-V2.webp"
                alt="Mahindra Corporate Film"
                fill
                sizes="100vw"
                onError={() => setPosterError(false)}
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-900 via-ink-900/30 to-ink-900/50 pointer-events-none" />

            {/* Quote Overlay */}
            <div className="relative z-20 max-w-[30ch] text-center p-6">
              <p className="font-display text-[clamp(28px,3.5vw,56px)] font-normal uppercase leading-tight text-bone mb-8">
                &ldquo;THE NUMBERS WE ARE MOST PROUD OF ARE THE NUMBER OF LIVES WE&apos;VE TOUCHED&rdquo;
              </p>

              {/* Magnetic Play Ring Button */}
              <button
                ref={playButtonRef}
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 text-ink-900 shadow-2xl transition-transform duration-300 group-hover:scale-110"
                aria-label="Play Corporate Film"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Fullscreen Video Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink-900/95 backdrop-blur-xl p-4 lg:p-12 animate-fadeIn"
          onClick={() => setIsPlaying(false)}
        >
          <div className="relative h-full max-h-[80vh] w-full max-w-[1280px] overflow-hidden rounded-2xl bg-black border border-line">
            <button
              onClick={() => setIsPlaying(false)}
              className="t-label absolute top-4 right-4 z-20 rounded-full bg-ink-900/80 px-4 py-2 text-bone hover:text-gold"
            >
              [ ESC CLOSE ✕ ]
            </button>
            <iframe
              src="https://www.youtube.com/embed/qbUwoWr4PFk?autoplay=1"
              title="Mahindra Corporate Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
