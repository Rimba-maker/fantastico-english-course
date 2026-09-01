import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../motion/variants";

export default function FacilityList({ title, items }: { title: string; items: string[] }) {
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
        {items.map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            className="rounded-lg border border-hairline bg-canvas p-4 text-body-md text-ink shadow-card"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
