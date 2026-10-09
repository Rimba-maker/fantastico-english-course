import { Check } from "lucide-react";

const benefits = [
  "Kurikulum custom sesuai kebutuhan instansi (conversational, business English, atau TOEFL/IELTS prep massal)",
  "Bisa onsite (instruktur kami datang ke lokasi instansi) atau online",
  "Sertifikat kolektif untuk seluruh peserta",
  "Laporan progress per peserta untuk pihak instansi",
  "Harga khusus volume, minimal 15 peserta",
];

export default function RombonganBenefits() {
  return <ul className="mt-6 divide-y divide-hairline border-y border-hairline">{benefits.map((benefit) => <li key={benefit} className="flex items-start gap-4 py-5 text-base leading-relaxed text-ink-secondary"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-navy" /><span>{benefit}</span></li>)}</ul>;
}
