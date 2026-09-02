import { motion } from "motion/react";
import { Languages, Users, FileCheck2, Target, type LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";

const points: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Languages,
    title: "Akses Native Speaker",
    desc: "Sesi rutin dengan penutur asli, bukan cuma tutor lokal.",
  },
  {
    icon: Users,
    title: "Kelas Kecil, Maks. 10 Siswa",
    desc: "Riset pendidikan menunjukkan kelas kecil bikin partisipasi belajar jauh lebih tinggi.",
  },
  {
    icon: FileCheck2,
    title: "Legalitas Jelas",
    desc: "Terdaftar resmi, bukan lembaga abal-abal.",
  },
  {
    icon: Target,
    title: "TOEFL & IELTS Ready",
    desc: "Dua jalur sertifikasi internasional, sesuai kebutuhanmu.",
  },
];

export default function KenapaFantastico() {
  return (
    <section className="bg-canvas-soft px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-display-md text-navy md:text-display-lg md:text-left">Kenapa Pilih Kami?</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.08)}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {points.map((point) => (
            <motion.div key={point.title} variants={fadeUp} className="rounded-lg bg-canvas p-6 shadow-card">
              <point.icon className="h-7 w-7 text-navy" strokeWidth={1.75} />
              <h3 className="mt-3 text-heading-sm font-semibold text-navy">{point.title}</h3>
              <p className="mt-2 text-body-md text-ink-mute">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
