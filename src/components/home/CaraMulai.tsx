import { motion } from "motion/react";
import { MessageCircle, Wallet, Rocket, type LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";

const steps: { icon: LucideIcon; step: string; title: string; desc: string }[] = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Konsultasi via WhatsApp",
    desc: "Ceritakan target dan waktumu — kami bantu pilihkan jalur (offline/online) dan paket yang paling cocok.",
  },
  {
    icon: Wallet,
    step: "2",
    title: "Daftar & Bayar DP",
    desc: "DP minimal 50%, transfer bank atau QRIS. Pelunasan sebelum atau saat program dimulai.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Mulai Belajar",
    desc: "Ikuti intake terdekat sesuai Kalender Akademik — kelas kecil, native speaker, hasil terukur.",
  },
];

export default function CaraMulai() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-display-md text-navy md:text-display-lg md:text-left">Cara Mulai.</h2>
      <p className="mt-3 max-w-xl text-center text-body-lg text-ink-mute md:mx-0 md:text-left">
        Tiga langkah, tanpa proses berbelit.
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.12)}
        className="mt-10 grid gap-8 md:grid-cols-3"
      >
        {steps.map((s) => (
          <motion.div key={s.step} variants={fadeUp} className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-heading-sm font-semibold text-white">
              {s.step}
            </div>
            <s.icon className="mx-auto mt-4 h-6 w-6 text-gold" strokeWidth={1.75} />
            <h3 className="mt-3 text-heading-sm font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-body-md text-ink-mute">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
