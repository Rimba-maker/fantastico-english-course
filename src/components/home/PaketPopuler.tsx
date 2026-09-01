import { motion } from "motion/react";
import { Users } from "lucide-react";
import ProgramTierCard from "../program/ProgramTierCard";
import { waLink } from "../../lib/site";

export default function PaketPopuler() {
  return (
    <section className="bg-canvas-soft px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-display-md text-navy md:text-display-lg">Pilih Paketmu.</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-body-lg text-ink-mute">
          Tiga jalur, satu standar hasil. Bandingkan paket paling banyak diambil di bawah ini.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ProgramTierCard
            icon="target"
            title="Bootcamp 3 Bulan — Fluent & Test-Ready"
            price="Rp 6.500.000"
            suitableFor="Cocok untuk: hasil maksimal sampai siap tes TOEFL/IELTS"
            features={[
              "Confidence + Active + Fluent & TOEFL/IELTS Prep",
              "2x sesi native speaker/minggu",
              "Simulasi TOEFL ITP & IELTS resmi",
            ]}
            featured
            ctaHref={waLink("Halo, saya mau konsultasi Bootcamp 3 Bulan — Fluent & Test-Ready.")}
            ctaLabel="Konsultasi via WhatsApp"
          />

          <ProgramTierCard
            icon="trending-up"
            title="Online 2 Bulan — Deep Progress"
            price="Rp 2.200.000"
            suitableFor="Cocok untuk: level up signifikan tanpa harus pindah ke asrama"
            features={[
              "Live class rutin + modul TOEFL/IELTS prep",
              "1x sesi native speaker online/minggu",
              "2x sesi private feedback dengan tutor",
            ]}
            index={1}
            ctaHref={waLink("Halo, saya mau konsultasi Online 2 Bulan — Deep Progress.")}
            ctaLabel="Konsultasi via WhatsApp"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            className="flex flex-col rounded-lg bg-canvas p-8 shadow-card"
          >
            <Users className="h-8 w-8 text-navy" strokeWidth={1.75} />
            <h3 className="mt-4 text-heading-lg text-navy">Rombongan & Instansi</h3>
            <p className="mt-3 text-display-md font-semibold text-gold">Custom Quote</p>
            <p className="mt-3 text-caption text-ink-mute">Cocok untuk: sekolah, kampus, atau perusahaan (minimal 15 peserta)</p>
            <ul className="mt-6 flex-1 space-y-2 text-body-md text-ink">
              <li>Kurikulum custom sesuai kebutuhan</li>
              <li>Onsite atau online, laporan progress berkala</li>
              <li>Harga khusus volume</li>
            </ul>
            <a
              href="/program/rombongan-instansi/"
              className="mt-6 rounded-full bg-navy px-5 py-3 text-center text-button-md text-white"
            >
              Konsultasi Kebutuhan Instansi
            </a>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <a href="/biaya/" className="text-button-md text-navy underline-offset-4 hover:underline">
            Lihat Semua Paket & Harga →
          </a>
        </div>
      </div>
    </section>
  );
}
