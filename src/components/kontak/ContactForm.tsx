import { useState, type FormEvent } from "react";
import { waLink, withBase } from "../../lib/site";
import { openWhatsApp } from "../../lib/openWhatsApp";

const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-hairline bg-canvas px-4 py-3 text-base text-ink placeholder:text-ink-secondary focus:border-navy focus:outline-2 focus:outline-offset-2 focus:outline-navy";
const labelClass = "block text-sm font-semibold text-navy";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [jalur, setJalur] = useState("Offline");
  const [program, setProgram] = useState("");
  const [bulan, setBulan] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const message = ["Halo, saya mau daftar Fantastico English Course.", `Nama: ${nama}`, `WhatsApp: ${whatsapp}`, `Jalur: ${jalur}`, `Program yang diminati: ${program || "-"}`, `Preferensi bulan mulai: ${bulan || "-"}`].join("\n");
    openWhatsApp(waLink(message));
  }

  return <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="submission-explanation">
    <p className="text-sm leading-relaxed text-ink-secondary">Nama dan nomor WhatsApp wajib diisi. Pilihan program dan bulan mulai boleh menyusul saat konsultasi.</p>
    <div><label className={labelClass} htmlFor="nama">Nama lengkap <span className="font-normal text-ink-secondary">(wajib)</span></label><input id="nama" name="nama" autoComplete="name" required value={nama} onChange={(event) => setNama(event.target.value)} className={inputClass} /></div>
    <div><label className={labelClass} htmlFor="whatsapp">Nomor WhatsApp <span className="font-normal text-ink-secondary">(wajib)</span></label><input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" required value={whatsapp} onChange={(event) => setWhatsapp(event.target.value)} className={inputClass} /></div>
    <div><label className={labelClass} htmlFor="jalur">Jalur belajar</label><select id="jalur" name="jalur" value={jalur} onChange={(event) => setJalur(event.target.value)} className={inputClass}><option value="Offline">Offline / Bootcamp</option><option value="Online">Online</option><option value="Rombongan">Rombongan / Instansi</option></select></div>
    <div><label className={labelClass} htmlFor="program">Program yang diminati <span className="font-normal text-ink-secondary">(opsional)</span></label><input id="program" name="program" placeholder="Misalnya: Bootcamp 3 Bulan" value={program} onChange={(event) => setProgram(event.target.value)} className={inputClass} /></div>
    <div><label className={labelClass} htmlFor="bulan">Bulan mulai <span className="font-normal text-ink-secondary">(opsional)</span></label><input id="bulan" name="bulan" placeholder="Bulan dan tahun pilihanmu" value={bulan} onChange={(event) => setBulan(event.target.value)} className={inputClass} /><a href={withBase("/kalender-akademik/")} className="text-link mt-3 inline-block text-sm">Lihat kalender intake</a></div>
    <p id="submission-explanation" className="rounded-xl bg-canvas-soft p-4 text-sm leading-relaxed text-ink-secondary">Tombol di bawah membuka WhatsApp dengan ringkasan isianmu. Pesan belum terkirim sampai kamu menekan Kirim di WhatsApp. Situs ini tidak menyimpan isian dan tidak otomatis mengonfirmasi pendaftaran.</p>
    <button type="submit" className="button-primary w-full">Lanjutkan konsultasi di WhatsApp</button>
  </form>;
}
