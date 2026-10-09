import { useEffect, useId, useRef } from "react";
import { DayPicker, type DayButtonProps } from "react-day-picker";
import { id as idLocale } from "react-day-picker/locale";
import { X } from "lucide-react";
import type { MonthData } from "./MonthCard";
import { statusMeta } from "./statusMeta";
import { waLink } from "../../lib/site";
import { openWhatsApp } from "../../lib/openWhatsApp";
import { monthDateFromName, parseIntakeDate } from "../../lib/kalender";
import "react-day-picker/style.css";

function IntakeDayButton(statusClassName: string) {
  return function DayButtonWithStatus({ day, modifiers, className: _className, ...rest }: DayButtonProps) {
    return <button {...rest} className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm ${modifiers.intake ? `${statusClassName} font-semibold text-white` : "text-ink-secondary"} ${modifiers.today && !modifiers.intake ? "ring-1 ring-navy" : ""}`}>{day.date.getDate()}</button>;
  };
}

export default function MonthDetailModal({ data, onClose }: { data: MonthData | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!data || !dialog) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [data]);

  return <dialog ref={dialogRef} aria-labelledby={titleId} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} className="m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto rounded-2xl bg-canvas p-0 text-ink backdrop:bg-navy/60">
    {data && <div className="p-6 sm:p-8"><div className="flex items-start justify-between gap-4"><div><h2 id={titleId} className="font-display text-3xl font-semibold text-navy">{data.month} {data.year}</h2><span className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white ${statusMeta[data.status].className}`}><span>{statusMeta[data.status].label}</span></span></div><button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Tutup detail bulan" className="rounded-full bg-canvas-soft p-3 text-navy"><X aria-hidden="true" className="h-5 w-5" /></button></div>
      <DayPicker locale={idLocale} month={monthDateFromName(data.month, data.year)} hideNavigation
        onDayClick={(date, modifiers) => { if (!modifiers.intake) return; const label = date.toLocaleDateString("id-ID", { day: "numeric", month: "long" }); openWhatsApp(waLink(`Halo, saya mau tanya slot intake ${label} ${data.year}.`)); }}
        modifiers={{ intake: data.intakeDates.map((label) => parseIntakeDate(label, data.year)) }}
        disabled={(date) => !data.intakeDates.some((label) => parseIntakeDate(label, data.year).toDateString() === date.toDateString())}
        components={{ DayButton: IntakeDayButton(statusMeta[data.status].className) }}
        classNames={{ root: "mt-6 w-full", months: "w-full", month: "w-full", month_caption: "hidden", month_grid: "w-full border-collapse", weekdays: "flex w-full", weekday: "flex-1 text-center text-xs text-ink-secondary", weeks: "block w-full", week: "mt-1 flex w-full", day: "flex-1 py-0.5 text-center" }}
      />
      <p className="mt-4 text-sm leading-relaxed text-ink-secondary">Tanggal berwarna adalah jadwal intake. Pilih tanggal untuk menanyakan slot melalui WhatsApp.</p>
      <dl className="mt-5 border-t border-hairline pt-5 text-sm leading-relaxed"><div><dt className="font-semibold text-navy">Program</dt><dd className="mt-1 text-ink-secondary">{data.program}</dd></div><div className="mt-4"><dt className="font-semibold text-navy">Tanggal intake</dt><dd className="mt-1 text-ink-secondary">{data.intakeDates.join(", ")}</dd></div></dl>
      {data.highlight && <p className="mt-4 rounded-xl bg-canvas-gold p-4 text-sm font-medium text-navy">{data.highlight}</p>}
      <a href={waLink(`Halo, saya mau tanya slot intake ${data.month} ${data.year}.`)} target="_blank" rel="noopener noreferrer" className="button-primary mt-6 w-full text-center">Tanya slot bulan ini</a>
    </div>}
  </dialog>;
}
