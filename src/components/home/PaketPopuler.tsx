import ProgramTierCard from "../program/ProgramTierCard";
import RombonganPricingCard from "../program/RombonganPricingCard";
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

          <RombonganPricingCard index={2} />
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
