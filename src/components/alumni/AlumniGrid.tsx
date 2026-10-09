import { useState } from "react";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";

const filters = [
  { key: "semua", label: "Semua jalur" },
  { key: "offline", label: "Offline" },
  { key: "online", label: "Online" },
  { key: "rombongan", label: "Rombongan / Instansi" },
] as const;
type FilterKey = (typeof filters)[number]["key"];

export default function AlumniGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const [filter, setFilter] = useState<FilterKey>("semua");
  const filtered = filter === "semua" ? testimonials : testimonials.filter((testimonial) => testimonial.track === filter);
  return <div><div role="group" aria-label="Filter kisah berdasarkan jalur belajar" className="flex flex-wrap gap-2">{filters.map((option) => <button key={option.key} type="button" aria-pressed={filter === option.key} onClick={() => setFilter(option.key)} className={`rounded-full px-5 py-3 text-sm font-semibold ${filter === option.key ? "bg-navy text-white" : "bg-canvas-soft text-navy hover:bg-navy-subtle"}`}>{option.label}</button>)}</div><p role="status" aria-live="polite" className="mt-5 text-sm text-ink-secondary">{filtered.length} kisah contoh ditampilkan. Bukan bukti hasil alumni aktual.</p><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((testimonial) => <TestimonialCard key={`${testimonial.track}-${testimonial.name}`} testimonial={testimonial} />)}</div>{filtered.length === 0 && <p className="mt-6 rounded-2xl bg-canvas-soft p-6 text-base text-ink-secondary">Belum ada kisah untuk jalur ini. Pilih jalur lain untuk melihat data contoh.</p>}</div>;
}
