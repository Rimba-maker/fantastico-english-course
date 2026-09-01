import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { waLink } from "../../lib/site";

const fantasticoReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

type Mode = "offline" | "online";

const modeContent: Record<Mode, { label: string; blurb: string; price: string; href: string }> = {
  offline: {
    label: "Offline / Bootcamp",
    blurb: "Immersive penuh — asrama, English Area 24 jam, tutor tinggal bersama.",
    price: "Mulai Rp 1.800.000",
    href: "/program/offline-bootcamp/",
  },
  online: {
    label: "Online",
    blurb: "Live class rutin dari rumah/kantor — fleksibel tanpa harus pindah kota.",
    price: "Mulai Rp 650.000",
    href: "/program/online/",
  },
};

export default function Hero() {
  const [mode, setMode] = useState<Mode>("offline");
  const active = modeContent[mode];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fantasticoReveal}
      className="bg-navy px-6 py-20 text-white md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <motion.h1 variants={item} className="text-display-lg md:text-display-xxl">
            Belajar di Asrama, atau dari Rumah — Kamu yang Pilih.
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-5 max-w-xl text-body-lg text-white/80 md:mx-0">
            Program bahasa Inggris intensif offline (bootcamp asrama) dan online, dirancang untuk hasil
            yang bisa diukur — bukan sekadar janji lancar.
          </motion.p>

          <motion.div
            variants={item}
            className="mx-auto mt-8 inline-flex rounded-full border border-white/20 bg-white/5 p-1 md:mx-0"
          >
            {(["offline", "online"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`rounded-full px-5 py-2 text-button-sm transition-colors ${
                  mode === m ? "bg-white text-navy-press" : "text-white/80 hover:text-white"
                }`}
              >
                {modeContent[m].label}
              </button>
            ))}
          </motion.div>

          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="text-body-md text-white/80">{active.blurb}</p>
                <p className="mt-1 text-heading-sm font-semibold text-gold">{active.price}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start"
          >
            <a
              href={waLink("Halo, saya mau daftar Fantastico English Course.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-button-md text-navy-press"
            >
              Daftar Sekarang
            </a>
            <a
              href={active.href}
              className="rounded-full border border-white/30 px-6 py-3 text-button-md text-white hover:bg-white/10"
            >
              Lihat Program {active.label} →
            </a>
            <a href="/kalender-akademik/" className="text-button-sm text-white/80 underline-offset-4 hover:underline">
              Lihat Kalender Akademik
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="overflow-hidden rounded-xl border border-white/10 shadow-modal"
        >
          <img
            src="/images/hero-students.jpg"
            alt="Siswa belajar bahasa Inggris bersama"
            className="aspect-[4/3] w-full object-cover"
            loading="eager"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
