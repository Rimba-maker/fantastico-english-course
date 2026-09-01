import FaqAccordion from "../faq/FaqAccordion";

const items = [
  {
    q: "Bedanya offline dan online seberapa jauh hasilnya?",
    a: "Standar kurikulum sama, bedanya di intensitas interaksi (offline lebih immersive 24 jam). Online tetap efektif untuk yang konsisten mengikuti live class dan sesi feedback.",
  },
  {
    q: "Bagaimana kalau tidak lulus target skor TOEFL/IELTS di paket 3 bulan?",
    a: "Ada garansi mengulang materi gratis (bukan garansi skor pasti, tapi kesempatan belajar ulang tanpa biaya tambahan).",
  },
  {
    q: "Apakah sertifikat diakui secara resmi?",
    a: "Sertifikat kelulusan dari lembaga kami menunjukkan penyelesaian program, bukan sertifikat resmi TOEFL/IELTS (yang harus diambil di lembaga penyelenggara resmi seperti ETS/British Council) — kami membantu persiapan, bukan menerbitkan skor resmi.",
  },
];

export default function FaqTeaser() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-display-md text-navy md:text-display-lg">Pertanyaan yang Sering Diajukan.</h2>

      <div className="mt-10">
        <FaqAccordion items={items} />
      </div>

      <div className="mt-8 text-center">
        <a href="/faq/" className="text-button-md text-navy underline-offset-4 hover:underline">
          Lihat FAQ Lengkap →
        </a>
      </div>
    </section>
  );
}
