"use client";

import { useEffect, useState } from "react";
import { Section, Container } from "@/components/layout";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function BookingCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container className="text-center">
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(07) RESERVATION DESK</p>
        <h2 className="font-display text-[clamp(56px,9vw,200px)] uppercase tracking-[-0.02em] leading-[0.88] mb-6">NEXT BOOKING WINDOW CLOSING IN</h2>
        <p className="font-body text-[clamp(20px,1.6vw,28px)] leading-tight mx-auto mb-16 text-bone-dim max-w-[50ch]">
          We&apos;ve made booking your favourite SUV a breeze. Just login, review your
          details and pay to book.
        </p>

        {/* Live Countdown Display */}
        <div className="mx-auto mb-16 flex max-w-2xl justify-center gap-6 md:gap-12 bg-ink-800 p-8 rounded-3xl border border-line">
          <CountdownUnit value={timeLeft.days} label="DAYS" />
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">:</span>
          <CountdownUnit value={timeLeft.hours} label="HOURS" />
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">:</span>
          <CountdownUnit value={timeLeft.minutes} label="MINUTES" />
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">:</span>
          <CountdownUnit value={timeLeft.seconds} label="SECONDS" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <MagneticButton variant="ember" size="lg">
            Book Now
          </MagneticButton>
          <MagneticButton variant="ghost" size="lg">
            Set Reminder
          </MagneticButton>
          <MagneticButton variant="gold" size="lg">
            Know More
          </MagneticButton>
        </div>
      </Container>
    </Section>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-bone font-mono tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-mono text-xs uppercase tracking-wider font-medium mt-2 text-bone-dim text-[10px]">{label}</span>
    </div>
  );
}
