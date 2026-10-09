import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();
  return <div className="divide-y divide-hairline border-y border-hairline">{items.map((item, index) => {
    const isOpen = openIndex === index;
    const buttonId = `${id}-button-${index}`;
    const panelId = `${id}-panel-${index}`;
    return <div key={item.q}><h3><button id={buttonId} type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={panelId} className="flex w-full items-start justify-between gap-5 py-6 text-left text-base font-semibold leading-relaxed text-navy sm:text-lg"><span>{item.q}</span>{isOpen ? <Minus aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" /> : <Plus aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />}</button></h3><div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}><p className="max-w-[70ch] pb-6 pr-8 text-base leading-relaxed text-ink-secondary">{item.a}</p></div></div>;
  })}</div>;
}
