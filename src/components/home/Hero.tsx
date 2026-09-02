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
      className="overflow-hidden bg-navy text-white"
    >
      <div className="grid gap-10 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-0 md:py-0 md:min-h-[620px]">
        <div className="relative px-6 text-center md:flex md:flex-col md:justify-center md:px-0 md:py-16 md:pr-10 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:text-left">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-1/2 -z-10 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-navy-soft/25 blur-3xl md:block"
          />

          <motion.h1 variants={item} className="relative text-display-lg md:text-display-xxl">
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
            className="relative mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href={waLink("Halo, saya mau daftar Fantastico English Course.")}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-button-md text-navy-press"
            >
              Daftar Sekarang
            </a>
            <a
              href={active.href}
              className="whitespace-nowrap rounded-full border border-white/30 px-6 py-3 text-button-md text-white hover:bg-white/10"
            >
              Lihat Program →
            </a>
            <a
              href="/kalender-akademik/"
              className="whitespace-nowrap text-button-sm text-white/80 underline-offset-4 hover:underline"
            >
              Lihat Kalender Akademik
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative min-h-[320px] w-full">
          <img
            src="/images/hero-students.jpg"
            alt="Siswa belajar bahasa Inggris bersama"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
