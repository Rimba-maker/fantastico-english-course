export type Testimonial = {
  name: string;
  track: "offline" | "online" | "rombongan";
  scoreType?: "toefl" | "ielts";
  scoreBefore?: number;
  scoreAfter?: number;
  quote: string;
};

const trackLabels = { offline: "Offline / Bootcamp", online: "Online", rombongan: "Rombongan / Instansi" };

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { scoreType, scoreBefore, scoreAfter } = testimonial;
  const decimals = scoreType === "ielts" ? 1 : 0;
  return (
    <article className="flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs"><span className="rounded-full bg-canvas-soft px-3 py-1.5 font-medium text-navy">{trackLabels[testimonial.track]}</span><span className="text-ink-secondary">Data contoh</span></div>
      {scoreType && scoreAfter !== undefined && <div className="mt-6 border-b border-hairline pb-6"><p className="text-sm text-ink-secondary">Contoh hasil {scoreType === "toefl" ? "TOEFL ITP" : "IELTS Band"}</p><p className="mt-2 font-display text-3xl font-semibold text-navy tabular-nums">{scoreBefore !== undefined && <><span className="text-ink-secondary">{scoreBefore.toFixed(decimals)}</span><span className="mx-3 text-xl" aria-label="menjadi">→</span></>}{scoreAfter.toFixed(decimals)}</p></div>}
      <blockquote className="mt-6 flex-1"><p className="text-base leading-relaxed text-ink-secondary">&ldquo;{testimonial.quote}&rdquo;</p><footer className="mt-6 text-sm font-semibold text-navy">{testimonial.name}<span className="mt-1 block font-normal text-ink-secondary">Identitas dan kisah contoh, belum terverifikasi</span></footer></blockquote>
    </article>
  );
}
