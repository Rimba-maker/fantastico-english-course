import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../motion/variants";

const badges = [
  "📜 Terdaftar SK Diknas & NPSN",
  "👩‍🏫 Akses Native Speaker",
  "👥 Rasio Kelas Maks. 10 Siswa",
  "🎓 3.000+ Alumni",
];

export default function TrustBar() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.08)}
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-hairline bg-canvas-soft px-6 py-5 text-caption text-ink-mute"
    >
      {badges.map((badge) => (
        <motion.span key={badge} variants={fadeUp}>
          {badge}
        </motion.span>
      ))}
    </motion.div>
  );
}
