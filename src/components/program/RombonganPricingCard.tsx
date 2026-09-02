import { motion } from "motion/react";
import { Users, Check } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";

const benefits = [
  "Kurikulum custom sesuai kebutuhan instansi",
  "Onsite (instruktur datang ke lokasi) atau online",
  "Sertifikat kolektif untuk seluruh peserta",
  "Laporan progress per peserta untuk pihak instansi",
  "Harga khusus volume, minimal 15 peserta",
];

type Props = {
  index?: number;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function RombonganPricingCard({
  index = 0,
  ctaHref = "/program/rombongan-instansi/",
  ctaLabel = "Konsultasi Kebutuhan Instansi",
}: Props) {
  const external = ctaHref.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="flex flex-col rounded-lg bg-canvas p-8 shadow-card"
    >
      <Users className="h-8 w-8 text-navy" strokeWidth={1.75} />
      <h3 className="mt-4 text-heading-lg text-navy">Rombongan & Instansi</h3>
      <p className="mt-3 text-display-md font-semibold text-gold">Custom Quote</p>
      <p className="mt-3 text-caption text-ink-mute">
        Cocok untuk: sekolah, kampus, atau perusahaan (minimal 15 peserta)
      </p>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.06)}
        className="mt-6 flex-1 space-y-2"
      >
        {benefits.map((b) => (
          <motion.li key={b} variants={fadeUp} className="flex items-start gap-2 text-body-md text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-status-available" strokeWidth={2.5} />
            {b}
          </motion.li>
        ))}
      </motion.ul>

      <a
        href={ctaHref}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="mt-6 rounded-full bg-navy px-5 py-3 text-center text-button-md text-white"
      >
        {ctaLabel}
      </a>
    </motion.div>
  );
}
