import { motion } from "motion/react";
import { staggerContainer } from "../motion/variants";
import TestimonialCard, { type Testimonial } from "../alumni/TestimonialCard";

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
          <TestimonialCard key={t.name} testimonial={t} />
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
