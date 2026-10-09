import { Check, Star } from "lucide-react";

export type TierIcon = "sprout" | "leaf" | "target" | "palmtree" | "zap" | "trending-up";

type Props = {
  icon: TierIcon;
  title: string;
  price: string;
  suitableFor: string;
  features: string[];
  featured?: boolean;
  ctaHref: string;
  ctaLabel: string;
  index?: number;
};

export default function ProgramTierCard({ title, price, suitableFor, features, featured = false, ctaHref, ctaLabel }: Props) {
  const [duration, name] = title.split(" — ");
  return (
    <article className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-8 ${featured ? "bg-canvas-gold" : "border border-hairline bg-canvas"}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-navy">{duration}</h3>
        {featured && <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy"><Star aria-hidden="true" className="h-3.5 w-3.5" />Terpopuler</span>}
      </div>
      {name && <p className="mt-2 text-base text-ink-secondary">{name}</p>}
      <p className="mt-6 font-display text-3xl font-semibold tracking-tight text-navy tabular-nums sm:text-4xl">{price}</p>
      <p className="mt-4 min-h-16 text-sm leading-relaxed text-ink-secondary">{suitableFor}</p>
      <ul className="mt-6 flex-1 space-y-3 border-t border-navy/15 pt-6">
        {features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-ink-secondary"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-navy" strokeWidth={2} /><span>{feature}</span></li>)}
      </ul>
      <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="button-primary mt-8 text-center">{ctaLabel}</a>
    </article>
  );
}
