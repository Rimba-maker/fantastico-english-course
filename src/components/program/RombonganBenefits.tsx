import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../motion/variants";

const benefits = [
  "Kurikulum custom sesuai kebutuhan instansi (conversational, business English, atau TOEFL/IELTS prep massal)",
  "Bisa onsite (instruktur kami datang ke lokasi instansi) atau online",
  "Sertifikat kolektif untuk seluruh peserta",
  "Laporan progress per peserta untuk pihak instansi",
  "Harga khusus volume, minimal 15 peserta",
];

export default function RombonganBenefits() {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.08)}
      className="mx-auto mt-8 max-w-2xl space-y-3"
    >
      {benefits.map((b) => (
        <motion.li
          key={b}
          variants={fadeUp}
          className="rounded-lg bg-canvas p-4 text-left text-body-md text-ink shadow-card"
        >
          ✓ {b}
        </motion.li>
      ))}
    </motion.ul>
  );
}
