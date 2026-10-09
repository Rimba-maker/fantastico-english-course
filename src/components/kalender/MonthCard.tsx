import { ArrowUpRight } from "lucide-react";
import { statusMeta, type IntakeStatus } from "./statusMeta";

export type MonthData = {
  id: string;
  month: string;
  year: number;
  intakeDates: string[];
  program: string;
  status: IntakeStatus;
  highlight?: string;
};

export default function MonthCard({ data, onSelect }: { data: MonthData; index: number; onSelect: (id: string) => void }) {
  const status = statusMeta[data.status];
  return (
    <button type="button" aria-haspopup="dialog" aria-label={`Lihat intake ${data.month} ${data.year}, ${status.label}`} onClick={() => onSelect(data.id)} className="group flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-5 text-left hover:border-navy">
      <span className="flex w-full items-start justify-between gap-3"><span className="font-display text-xl font-semibold text-navy">{data.month}<span className="ml-2 text-sm font-normal text-ink-secondary">{data.year}</span></span><ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-navy" /></span>
      <span className="mt-4 text-sm text-ink-secondary">Intake: {data.intakeDates.join(", ")}</span>
      {data.highlight && <span className="mt-2 text-sm font-medium text-navy">{data.highlight}</span>}
      <span className="mt-auto pt-5"><span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white ${status.className}`}><status.icon aria-hidden="true" className="h-3.5 w-3.5" />{status.label}</span></span>
    </button>
  );
}
