import { Globe } from "lucide-react";
import { withBase } from "../../lib/site";

type Props = {
  photo: string;
  name: string;
  isNativeSpeaker: boolean;
  degree: string;
  university: string;
  scoreLabel: string;
  yearsExperience: number;
  specialization: string;
  index?: number;
};

export default function TutorCard({ photo, name, isNativeSpeaker, degree, university, scoreLabel, yearsExperience, specialization }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl bg-canvas-soft">
      <div className="relative"><img src={withBase(photo)} alt={`Foto stok untuk contoh profil ${name}, bukan tutor asli`} width="600" height="600" className="aspect-[4/3] w-full object-cover object-top" loading="lazy" /><span className="absolute bottom-3 left-3 rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-navy">Foto ilustrasi · profil contoh</span></div>
      <div className="p-6"><div className="flex flex-wrap items-center gap-3"><h3 className="font-display text-2xl font-semibold text-navy">{name}</h3><span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-navy ${isNativeSpeaker ? "bg-gold-soft" : "bg-canvas"}`}>{isNativeSpeaker && <Globe aria-hidden="true" className="h-3.5 w-3.5" />}{isNativeSpeaker ? "Native speaker · contoh" : "Tutor lokal bersertifikat · contoh"}</span></div>
        <p className="mt-3 text-base font-medium text-navy">{specialization}</p>
        <dl className="mt-5 space-y-4 border-t border-navy/15 pt-5 text-sm leading-relaxed"><div><dt className="text-ink-secondary">Pendidikan contoh</dt><dd className="mt-1 text-ink">{degree}, {university}</dd></div><div className="flex flex-wrap justify-between gap-4"><div><dt className="text-ink-secondary">Skor contoh</dt><dd className="mt-1 font-semibold text-navy tabular-nums">{scoreLabel}</dd></div><div><dt className="text-ink-secondary">Pengalaman contoh</dt><dd className="mt-1 font-semibold text-navy">{yearsExperience} tahun</dd></div></div></dl>
      </div>
    </article>
  );
}
