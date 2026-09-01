import { motion } from "motion/react";
import { statusMeta, type IntakeStatus } from "./statusMeta";

export type MonthData = {
  id: string; // "2026-03"
  month: string;
  year: number;
  intakeDates: string[];
  program: string;
  status: IntakeStatus;
  highlight?: string;
};

export default function MonthCard({
  data,
  index,
  onSelect,
}: {
  data: MonthData;
  index: number;
  onSelect: (id: string) => void;
}) {
  const status = statusMeta[data.status];

  return (
    <motion.button
      type="button"
      layoutId={`month-card-${data.id}`}
      onClick={() => onSelect(data.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="flex flex-col rounded-lg bg-canvas p-5 text-left shadow-card"
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-heading-sm font-semibold text-navy">
          {data.month} {data.year}
        </p>
        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-micro-cap uppercase text-white ${status.className} ${
            status.pulse ? "animate-pulse" : ""
          }`}
        >
          <status.icon className="h-3 w-3" strokeWidth={2.5} />
          {status.label}
        </span>
      </div>
      <p className="mt-2 text-caption text-ink-mute">Intake: {data.intakeDates.join(", ")}</p>
      {data.highlight && <p className="mt-1 text-caption text-gold">{data.highlight}</p>}
    </motion.button>
  );
}
