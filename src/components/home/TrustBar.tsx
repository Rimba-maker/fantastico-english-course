import { motion } from "motion/react";
import { FileCheck2, Languages, Users, GraduationCap, type LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";

const badges: { icon: LucideIcon; label: string }[] = [
  { icon: FileCheck2, label: "Terdaftar SK Diknas & NPSN" },
  { icon: Languages, label: "Akses Native Speaker" },
  { icon: Users, label: "Rasio Kelas Maks. 10 Siswa" },
  { icon: GraduationCap, label: "3.000+ Alumni" },
];

export default function TrustBar() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.08)}
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-hairline bg-canvas-soft px-6 py-5 text-caption text-ink-mute"
    >
      {badges.map(({ icon: Icon, label }) => (
        <motion.span key={label} variants={fadeUp} className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-navy" strokeWidth={1.75} />
          {label}
        </motion.span>
      ))}
    </motion.div>
  );
}
