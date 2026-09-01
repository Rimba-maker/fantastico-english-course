import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../motion/variants";

type MonthPreview = {
  month: string;
  year: number;
  intakeDates: string[];
  status: "tersedia" | "hampir-penuh" | "penuh";
  highlight?: string;
};

const statusMeta: Record<MonthPreview["status"], { label: string; className: string; pulse?: boolean }> = {
  tersedia: { label: "🟢 Tersedia", className: "bg-status-available" },
  "hampir-penuh": { label: "🟡 Hampir Penuh", className: "bg-status-almost-full", pulse: true },
  penuh: { label: "⚪ Penuh", className: "bg-status-full" },
};

export default function KalenderPreview({ months }: { months: MonthPreview[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-display-md text-navy md:text-display-lg">Kapan Bisa Mulai?</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.08)}
        className="mt-10 grid gap-6 sm:grid-cols-3"
      >
        {months.map((m) => {
          const status = statusMeta[m.status];
          return (
            <motion.div key={`${m.year}-${m.month}`} variants={fadeUp} className="rounded-lg bg-canvas p-6 shadow-card">
              <div className="flex items-center justify-between">
                <p className="text-heading-sm font-semibold text-navy">
                  {m.month} {m.year}
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-micro-cap uppercase text-white ${status.className} ${
                    status.pulse ? "animate-pulse" : ""
                  }`}
                >
                  {status.label}
                </span>
              </div>
              <p className="mt-3 text-body-md text-ink-mute">Intake: {m.intakeDates.join(", ")}</p>
              {m.highlight && <p className="mt-2 text-caption text-gold">{m.highlight}</p>}
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-10 text-center">
        <a href="/kalender-akademik/" className="text-button-md text-navy underline-offset-4 hover:underline">
          Lihat Kalender Akademik Penuh →
        </a>
      </div>
    </section>
  );
}
