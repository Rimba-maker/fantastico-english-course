import FaqAccordion from "../faq/FaqAccordion";
import { faqs } from "../../lib/faqs";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-display-md text-navy md:text-display-lg">Pertanyaan yang Sering Diajukan.</h2>

      <div className="mt-10">
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
