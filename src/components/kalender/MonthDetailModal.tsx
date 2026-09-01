import { motion, AnimatePresence } from "motion/react";
import type { MonthData } from "./MonthCard";
import { waLink } from "../../lib/site";

export default function MonthDetailModal({ data, onClose }: { data: MonthData | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-press/60 px-6"
          onClick={onClose}
        >
          <motion.div
            layoutId={`month-card-${data.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-xl bg-canvas p-8 shadow-modal"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-heading-lg text-navy">
                {data.month} {data.year}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="text-heading-sm text-ink-mute hover:text-navy"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-body-md text-ink">Intake: {data.intakeDates.join(", ")}</p>
            <p className="mt-2 text-body-md text-ink-mute">Program: {data.program}</p>
            {data.highlight && <p className="mt-2 text-body-md font-semibold text-gold">{data.highlight}</p>}

            <a
              href={waLink(`Halo, saya mau tanya slot intake ${data.month} ${data.year}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-navy px-5 py-3 text-center text-button-md text-white"
            >
              Tanya Slot Bulan Ini
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
