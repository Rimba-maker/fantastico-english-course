import { Check } from "lucide-react";
import { withBase } from "../../lib/site";

const benefits = [
  "Kurikulum custom sesuai kebutuhan instansi",
  "Onsite (instruktur datang ke lokasi) atau online",
  "Sertifikat kolektif untuk seluruh peserta",
  "Laporan progress per peserta untuk pihak instansi",
  "Harga khusus volume, minimal 15 peserta",
];
type Props = { index?: number; ctaHref?: string; ctaLabel?: string };

export default function RombonganPricingCard({ ctaHref = "/program/rombongan-instansi/", ctaLabel = "Konsultasi Kebutuhan Instansi" }: Props) {
  const external = ctaHref.startsWith("http");
  return (
    <article className="flex h-full flex-col rounded-2xl bg-canvas-soft p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-navy">Rombongan & Instansi</h3>
      <p className="mt-5 font-display text-4xl font-semibold tracking-tight text-navy">Custom Quote</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-secondary">Untuk sekolah, kampus, atau perusahaan. Minimal 15 peserta; biaya disesuaikan cakupan program.</p>
      <ul className="mt-6 flex-1 space-y-3 border-t border-navy/15 pt-6">{benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-ink-secondary"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-navy" /><span>{benefit}</span></li>)}</ul>
      <a href={ctaHref.startsWith("/") && !ctaHref.startsWith("//") ? withBase(ctaHref) : ctaHref} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="button-primary mt-8 text-center">{ctaLabel}</a>
    </article>
  );
}
