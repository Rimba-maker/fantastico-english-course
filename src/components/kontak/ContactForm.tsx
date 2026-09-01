import { useState, type FormEvent } from "react";
import { waLink } from "../../lib/site";

const inputClass =
  "mt-1 w-full rounded-md border border-hairline-input px-3 py-2 text-body-md text-ink focus:border-navy focus:outline-none";
const labelClass = "block text-caption font-semibold text-ink-mute";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [jalur, setJalur] = useState("Offline");
  const [program, setProgram] = useState("");
  const [bulan, setBulan] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = [
      "Halo, saya mau daftar Fantastico English Course.",
      `Nama: ${nama}`,
      `WhatsApp: ${whatsapp}`,
      `Jalur: ${jalur}`,
      `Program yang diminati: ${program || "-"}`,
      `Preferensi bulan mulai: ${bulan || "-"}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass} htmlFor="nama">
          Nama
        </label>
        <input id="nama" required value={nama} onChange={(e) => setNama(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="whatsapp">
          Nomor WhatsApp
        </label>
        <input
          id="whatsapp"
          type="tel"
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="jalur">
          Pilih Jalur
        </label>
        <select id="jalur" value={jalur} onChange={(e) => setJalur(e.target.value)} className={inputClass}>
          <option>Offline</option>
          <option>Online</option>
          <option>Rombongan</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="program">
          Program yang Diminati
        </label>
        <input
          id="program"
          placeholder="mis. Bootcamp 3 Bulan, Online 2 Bulan"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="bulan">
          Preferensi Bulan Mulai
        </label>
        <input
          id="bulan"
          placeholder="mis. Maret 2026"
          value={bulan}
          onChange={(e) => setBulan(e.target.value)}
          className={inputClass}
        />
        <a href="/kalender-akademik/" className="mt-1 inline-block text-caption text-navy underline-offset-4 hover:underline">
          Lihat Kalender Akademik →
        </a>
      </div>

      <button type="submit" className="w-full rounded-full bg-navy px-6 py-3 text-button-md text-white">
        Kirim & Konsultasi via WhatsApp
      </button>
    </form>
  );
}
