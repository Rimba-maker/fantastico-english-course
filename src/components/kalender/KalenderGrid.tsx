import { useState } from "react";
import MonthCard, { type MonthData } from "./MonthCard";
import MonthDetailModal from "./MonthDetailModal";

export default function KalenderGrid({ months }: { months: MonthData[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = months.find((m) => m.id === selectedId) ?? null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {months.map((m, i) => (
          <MonthCard key={m.id} data={m} index={i} onSelect={setSelectedId} />
        ))}
      </div>
      <MonthDetailModal data={selected} onClose={() => setSelectedId(null)} />
    </>
  );
}
