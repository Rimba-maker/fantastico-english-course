import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DayPicker, type DayButtonProps } from "react-day-picker";
import { id as idLocale } from "react-day-picker/locale";
import { X } from "lucide-react";
import type { MonthData } from "./MonthCard";
import { statusMeta } from "./statusMeta";
import { waLink } from "../../lib/site";
import { openWhatsApp } from "../../lib/openWhatsApp";
import { monthDateFromName, parseIntakeDate } from "../../lib/kalender";
import "react-day-picker/style.css";

const titleId = "month-detail-title";

function IntakeDayButton(statusClassName: string) {
  return function DayButtonWithStatus({ day, modifiers, className: _className, ...rest }: DayButtonProps) {
    const isIntake = modifiers.intake;
    return (
      <button
        {...rest}
        className={[
          "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-body-sm transition-colors",
          isIntake
            ? `${statusClassName} font-semibold text-white`
            : modifiers.disabled
              ? "text-ink-mute/30"
              : "text-ink-mute",
          modifiers.today && !isIntake ? "ring-1 ring-navy/40" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {day.date.getDate()}
      </button>
    );
  };
}

export default function MonthDetailModal({ data, onClose }: { data: MonthData | null; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!data) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [data, onClose]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-press/60 px-6"
          onClick={onClose}
        >
          <motion.div
            layoutId={`month-card-${data.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-xl bg-canvas p-8 shadow-modal"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id={titleId} className="text-heading-lg text-navy">
                {data.month} {data.year}
              </h3>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="text-ink-mute hover:text-navy"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <DayPicker
              locale={idLocale}
              month={monthDateFromName(data.month, data.year)}
              hideNavigation
              onDayClick={(date, modifiers) => {
                if (!modifiers.intake) return;
                const label = date.toLocaleDateString("id-ID", { day: "numeric", month: "long" });
                openWhatsApp(waLink(`Halo, saya mau tanya slot intake ${label} ${data.year}.`));
              }}
              modifiers={{ intake: data.intakeDates.map((label) => parseIntakeDate(label, data.year)) }}
              disabled={(date) =>
                !data.intakeDates.some((label) => {
                  const d = parseIntakeDate(label, data.year);
                  return d.toDateString() === date.toDateString();
                })
              }
              components={{ DayButton: IntakeDayButton(statusMeta[data.status].className) }}
              classNames={{
                root: "mt-4 w-full",
                months: "w-full",
                month: "w-full",
                month_caption: "hidden",
                month_grid: "w-full border-collapse",
                weekdays: "flex w-full",
                weekday: "flex-1 text-center text-micro-cap uppercase text-ink-mute",
                weeks: "block w-full",
                week: "mt-1 flex w-full",
                day: "flex-1 py-0.5 text-center",
              }}
            />
            <p className="mt-3 flex items-center gap-2 text-caption text-ink-mute">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${statusMeta[data.status].className}`} />
              Tanggal berwarna = intake {statusMeta[data.status].label.toLowerCase()}
            </p>
            <p className="mt-3 text-body-md text-ink-mute">Program: {data.program}</p>
            {data.highlight && <p className="mt-2 text-body-md font-semibold text-gold">{data.highlight}</p>}

            <a
              href={waLink(`Halo, saya mau tanya slot intake ${data.month} ${data.year}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-navy px-5 py-3 text-center text-button-md text-white"
            >
              Tanya Slot Bulan Ini
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
