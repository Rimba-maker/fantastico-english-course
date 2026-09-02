import { motion } from "motion/react";

const cards = [
  {
    photo: "/images/offline-asrama.jpg",
    title: "Offline / Bootcamp (Asrama)",
    desc: "Immersive penuh — asrama, English Area 24 jam, tutor tinggal bersama. Untuk hasil paling maksimal.",
    price: "Mulai Rp 1.800.000",
    href: "/program/offline-bootcamp/",
    from: { x: -30 },
  },
  {
    photo: "/images/online-live-class.jpg",
    title: "Online",
    desc: "Live class rutin dari rumah/kantor — fleksibel tanpa harus pindah kota.",
    price: "Mulai Rp 650.000",
    href: "/program/online/",
    from: { x: 30 },
  },
];

export default function DuaJalurBelajar() {
  return (
    <section className="py-20">
      <h2 className="px-6 text-center text-display-md text-navy md:text-display-lg">Dua Cara Belajar, Standar Sama.</h2>

      <div className="mt-10 grid md:grid-cols-2">
        {cards.map((card) => (
          <motion.a
            key={card.title}
            href={card.href}
            initial={{ opacity: 0, ...card.from }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative flex min-h-[420px] items-end overflow-hidden md:min-h-[540px]"
          >
            <img
              src={card.photo}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-press/95 via-navy-press/30 to-transparent" />
            <div className="relative p-8 text-white lg:p-12">
              <h3 className="text-heading-lg md:text-display-md">{card.title}</h3>
              <p className="mt-2 max-w-sm text-body-md text-white/80">{card.desc}</p>
              <p className="mt-4 text-heading-sm font-semibold text-gold">{card.price}</p>
              <p className="mt-6 text-button-sm text-white group-hover:underline">Lihat Program →</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
