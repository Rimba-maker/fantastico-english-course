import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../motion/variants";

type Testimonial = {
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
      {label}: {scoreBefore !== undefined && (
        <>
          <ScoreCounter target={scoreBefore} decimals={decimals} /> {"→ "}
        </>
      )}
      <ScoreCounter target={scoreAfter} decimals={decimals} />
    </p>
  );
}

export default function AlumniHasil({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-display-md text-navy md:text-display-lg">Bukan Cuma Lancar — Ini Hasilnya.</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.08)}
        className="mt-10 grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.blockquote key={t.name} variants={fadeUp} className="rounded-lg border border-hairline bg-canvas p-6 shadow-card">
            <p className="text-body-md text-ink">&ldquo;{t.quote}&rdquo;</p>
            <ScoreLine testimonial={t} />
            <footer className="mt-4 text-caption text-ink-mute">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <a href="/alumni/" className="text-button-md text-navy underline-offset-4 hover:underline">
          Lihat Semua Kisah Alumni →
        </a>
      </div>
    </section>
  );
}
