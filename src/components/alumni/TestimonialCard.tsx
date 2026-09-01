import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp } from "../motion/variants";

export type Testimonial = {
  name: string;
  track: "offline" | "online" | "rombongan";
  scoreType?: "toefl" | "ielts";
  scoreBefore?: number;
  scoreAfter?: number;
  quote: string;
};

function ScoreCounter({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  function start() {
    if (started) return;
    setStarted(true);
    const duration = 900;
    const startTime = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(target * progress);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  return (
    <motion.span onViewportEnter={start} viewport={{ once: true }}>
      {value.toFixed(decimals)}
    </motion.span>
  );
}

function ScoreLine({ testimonial }: { testimonial: Testimonial }) {
  const { scoreType, scoreBefore, scoreAfter } = testimonial;
  if (!scoreType || scoreAfter === undefined) return null;

  const label = scoreType === "toefl" ? "TOEFL ITP" : "IELTS Band";
  const decimals = scoreType === "ielts" ? 1 : 0;

  return (
    <p className="mt-4 text-heading-sm font-semibold text-gold">
      {label}:{" "}
      {scoreBefore !== undefined && (
        <>
          <ScoreCounter target={scoreBefore} decimals={decimals} /> {"→ "}
        </>
      )}
      <ScoreCounter target={scoreAfter} decimals={decimals} />
    </p>
  );
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.blockquote variants={fadeUp} className="rounded-lg border border-hairline bg-canvas p-6 shadow-card">
      <p className="text-body-md text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
      <ScoreLine testimonial={testimonial} />
      <footer className="mt-4 text-caption text-ink-mute">— {testimonial.name}</footer>
    </motion.blockquote>
  );
}
