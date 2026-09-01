import { motion } from "motion/react";
import {
  Home,
  BookOpen,
  Utensils,
  Wifi,
  PartyPopper,
  Laptop,
  FileText,
  MessageCircle,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";

const icons = {
  home: Home,
  "book-open": BookOpen,
  utensils: Utensils,
  wifi: Wifi,
  "party-popper": PartyPopper,
  laptop: Laptop,
  "file-text": FileText,
  "message-circle": MessageCircle,
  "bar-chart": BarChart3,
} satisfies Record<string, LucideIcon>;

export type FacilityIcon = keyof typeof icons;

type FacilityItem = { icon: FacilityIcon; text: string };

export default function FacilityList({ title, items }: { title: string; items: FacilityItem[] }) {
  return (
    <div>
      <h2 className="text-heading-lg text-navy">{title}</h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.08)}
        className="mt-4 space-y-3"
      >
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <motion.li
              key={item.text}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-lg bg-canvas p-4 text-body-md text-ink shadow-card"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-navy" strokeWidth={1.75} />
              {item.text}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
