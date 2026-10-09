import { siteConfig } from "../../lib/site";

const stats = [
  { value: String(siteConfig.stats.foundedYear), label: "Tahun berdiri (contoh)" },
  { value: siteConfig.stats.alumniCount, label: "Jumlah alumni (contoh)" },
  { value: `Maks. ${siteConfig.stats.classSizeMax}`, label: "Kapasitas kelas program" },
  { value: String(siteConfig.stats.instansiPartnerCount), label: "Partner instansi (contoh)" },
];

export default function StatsRow() {
  return <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-hairline py-7 md:grid-cols-4">{stats.map((stat) => <div key={stat.label}><dt className="text-sm text-ink-secondary">{stat.label}</dt><dd className="mt-2 font-display text-3xl font-semibold text-navy tabular-nums">{stat.value}</dd></div>)}</dl>;
}
