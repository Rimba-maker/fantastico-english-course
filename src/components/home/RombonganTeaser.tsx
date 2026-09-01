import { motion } from "motion/react";
import { fadeUp } from "../motion/variants";

export default function RombonganTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="rounded-lg bg-canvas-gold px-8 py-12 text-center"
      >
        <h2 className="text-display-md text-navy">Untuk Sekolah, Kampus, atau Perusahaan.</h2>
        <p className="mx-auto mt-3 max-w-xl text-body-md text-ink-mute">
          Kami sediakan program training bahasa Inggris untuk kelompok/instansi — kurikulum custom,
          laporan progress, dan harga khusus volume.
        </p>
        <a
          href="/program/rombongan-instansi/"
          className="mt-6 inline-block text-button-md text-navy underline-offset-4 hover:underline"
        >
          Lihat Program Rombongan →
        </a>
      </motion.div>
    </section>
  );
}
