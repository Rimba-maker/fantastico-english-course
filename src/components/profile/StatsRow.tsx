import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../motion/variants";
import { siteConfig } from "../../lib/site";

const stats = [
  { value: String(siteConfig.stats.foundedYear), label: "Berdiri Sejak" },
  { value: siteConfig.stats.alumniCount, label: "Alumni" },
  { value: `Maks. ${siteConfig.stats.classSizeMax}`, label: "Rasio Kelas" },
  { value: String(siteConfig.stats.instansiPartnerCount), label: "Instansi Partner Rombongan" },
];

export default function StatsRow() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.08)}
      className="grid grid-cols-2 gap-6 md:grid-cols-4"
    >
      {stats.map((s) => (
        <motion.div key={s.label} variants={fadeUp} className="rounded-lg bg-canvas-soft p-6 text-center">
          <p className="text-display-md font-semibold text-navy">{s.value}</p>
          <p className="mt-1 text-caption text-ink-mute">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
