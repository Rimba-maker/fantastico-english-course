import { motion } from "motion/react";
import { Sprout, Leaf, Target, Palmtree, Zap, TrendingUp, Check, Star } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";

const icons = {
  sprout: Sprout,
  leaf: Leaf,
  target: Target,
  palmtree: Palmtree,
  zap: Zap,
  "trending-up": TrendingUp,
} as const;

export type TierIcon = keyof typeof icons;

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

export default function ProgramTierCard({
  icon,
  title,
  price,
  suitableFor,
  features,
  featured = false,
  ctaHref,
  ctaLabel,
  index = 0,
}: Props) {
  const IconComponent = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className={`relative flex flex-col rounded-lg p-8 shadow-card ${
        featured ? "bg-navy-900 text-white" : "bg-canvas text-ink"
      }`}
    >
      {featured && (
        <motion.span
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 left-8 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-micro-cap uppercase text-navy-press"
        >
          <Star className="h-3 w-3 fill-current" strokeWidth={2.5} />
          Terpopuler
        </motion.span>
      )}

      <IconComponent className={featured ? "h-8 w-8 text-gold" : "h-8 w-8 text-navy"} strokeWidth={1.75} />
      <h3 className={`mt-4 text-heading-lg ${featured ? "text-white" : "text-navy"}`}>{title}</h3>
      <p className="mt-3 text-display-md font-semibold text-gold">{price}</p>
      <p className={`mt-3 text-caption ${featured ? "text-white/70" : "text-ink-mute"}`}>{suitableFor}</p>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.06)}
        className="mt-6 flex-1 space-y-2"
      >
        {features.map((f) => (
          <motion.li
            key={f}
            variants={fadeUp}
            className={`flex items-start gap-2 text-body-md ${featured ? "text-white/90" : "text-ink"}`}
          >
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-gold" : "text-status-available"}`} strokeWidth={2.5} />
            {f}
          </motion.li>
        ))}
      </motion.ul>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 rounded-full px-5 py-3 text-center text-button-md ${
          featured ? "bg-white text-navy-press" : "bg-navy text-white"
        }`}
      >
        {ctaLabel}
      </a>
    </motion.div>
  );
}
