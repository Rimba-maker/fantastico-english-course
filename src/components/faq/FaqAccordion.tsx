import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `faq-button-${i}`;
        const panelId = `faq-panel-${i}`;
        return (
          <div
            key={item.q}
            className={`rounded-lg border bg-canvas shadow-card transition-colors ${
              isOpen ? "border-navy" : "border-hairline"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-body-lg font-semibold ${
                isOpen ? "text-navy" : "text-ink"
              }`}
            >
              {item.q}
              <span aria-hidden="true" className={`shrink-0 text-heading-sm ${isOpen ? "text-navy" : "text-ink-mute"}`}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="px-5 pb-5 text-body-md text-ink-mute">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
