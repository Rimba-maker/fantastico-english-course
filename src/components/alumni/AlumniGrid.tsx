import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { staggerContainer } from "../motion/variants";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";

const filters = [
  { key: "semua", label: "Semua" },
  { key: "offline", label: "Offline" },
  { key: "online", label: "Online" },
  { key: "rombongan", label: "Rombongan/Instansi" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function AlumniGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const [filter, setFilter] = useState<FilterKey>("semua");
  const filtered = filter === "semua" ? testimonials : testimonials.filter((t) => t.track === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-4 py-2 text-button-sm transition-colors ${
              filter === f.key ? "bg-navy text-white" : "border border-hairline text-ink-mute hover:text-navy"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.08)}
          className="mt-8 grid gap-6 md:grid-cols-3"
        >
          {filtered.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-body-md text-ink-mute">Belum ada testimoni untuk kategori ini.</p>
      )}
    </div>
  );
}
