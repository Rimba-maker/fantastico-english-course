import { motion } from "motion/react";

const cards = [
  {
    emoji: "🏕️",
    title: "Offline / Bootcamp (Asrama)",
    desc: "Immersive penuh — asrama, English Area 24 jam, tutor tinggal bersama. Untuk hasil paling maksimal.",
    price: "Mulai Rp 1.800.000",
    href: "/program/offline-bootcamp/",
    from: { x: -30 },
  },
  {
    emoji: "💻",
    title: "Online",
    desc: "Live class rutin dari rumah/kantor — fleksibel tanpa harus pindah kota.",
    price: "Mulai Rp 650.000",
    href: "/program/online/",
    from: { x: 30 },
  },
];

export default function DuaJalurBelajar() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-display-md text-navy md:text-display-lg">Dua Cara Belajar, Standar Sama.</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <motion.a
            key={card.title}
            href={card.href}
            initial={{ opacity: 0, ...card.from }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group rounded-lg border border-hairline bg-canvas p-8 shadow-card transition-colors hover:border-navy"
          >
            <span className="text-3xl">{card.emoji}</span>
            <h3 className="mt-4 text-heading-lg text-navy">{card.title}</h3>
            <p className="mt-2 text-body-md text-ink-mute">{card.desc}</p>
            <p className="mt-4 text-heading-sm font-semibold text-gold">{card.price}</p>
            <p className="mt-6 text-button-sm text-navy group-hover:underline">Lihat Program →</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
