import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowRight, MapPin, Monitor, Check } from "lucide-react";
import { waLink } from "../../lib/site";

type Mode = "offline" | "online";
const modes = {
  offline: { label: "Offline / Bootcamp", title: "Belajar bersama, tumbuh bersama.", description: "Asrama, English Area 24 jam, dan latihan langsung bersama tutor.", price: "Rp 1.800.000", href: "/program/offline-bootcamp/", photo: "campus-group", alt: "Ilustrasi mahasiswa belajar bersama di perpustakaan", icon: MapPin },
  online: { label: "Kelas Online", title: "Tujuan besar, dari ruang belajarmu.", description: "Live class, feedback tutor, dan waktu belajar dari rumah atau kantor.", price: "Rp 650.000", href: "/program/online/", photo: "online-study", alt: "Ilustrasi belajar online menggunakan laptop", icon: Monitor },
} as const;

export default function Hero() {
  const [mode, setMode] = useState<Mode>("offline");
  const reducedMotion = useReducedMotion();
  const active = modes[mode];
  const SceneIcon = active.icon;
  return (
    <section className="home-hero section-shell" aria-label="Pilihan program bahasa Inggris">
      <div className="hero-copy">
        <h1>Bahasa Inggris<br />untuk langkah<br /><span>besarmu.</span></h1>
        <p className="hero-intro">Dari percakapan pertama hingga persiapan TOEFL & IELTS. Temukan cara belajar yang cocok untuk tujuan dan keseharianmu.</p>
        <div className="hero-actions">
          <a className="button-primary" href={waLink("Halo, saya ingin konsultasi pilihan program Fantastico.")} target="_blank" rel="noopener noreferrer">Temukan programmu <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="text-link" href="/kalender-akademik/">Lihat jadwal belajar <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="hero-choice">
          <div className="mode-selector" role="group" aria-label="Pilih jalur belajar">
            {(Object.keys(modes) as Mode[]).map(key => {
              const ModeIcon = modes[key].icon;
              return <button key={key} type="button" aria-pressed={mode === key} onClick={() => setMode(key)}><ModeIcon size={16} aria-hidden="true" />{modes[key].label}</button>;
            })}
          </div>
          <div className="mode-description" aria-live="polite">
            <p>{active.description}</p>
            <a className="mode-price" href={active.href}><span>Mulai <strong>{active.price}</strong></span><ArrowUpRight size={19} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="hero-gallery">
        <div className="hero-main-photo">
          <motion.img key={active.photo} src={`/images/pexels/${active.photo}.webp`} alt={active.alt} width="1400" height="1000" fetchPriority="high" initial={{ filter: reducedMotion ? "blur(0px)" : "blur(3px)", scale: reducedMotion ? 1 : 1.025 }} animate={{ filter: "blur(0px)", scale: 1 }} transition={{ duration: reducedMotion ? 0 : .45, ease: [.16, 1, .3, 1] }} />
          <span className="photo-scene"><SceneIcon size={14} aria-hidden="true" />{active.label}</span>
        </div>
        <div className="hero-gallery-bottom">
          <img src="/images/pexels/community-outdoor.webp" alt="Ilustrasi mahasiswa belajar bersama di luar ruangan" width="1000" height="750" loading="eager" />
          <div className="hero-scene-copy"><Check size={21} aria-hidden="true" /><h2>{active.title}</h2><p>Satu tujuan.<br />Dua cara untuk memulai.</p></div>
          <img src="/images/pexels/study-notes.webp" alt="Ilustrasi catatan untuk latihan bahasa" width="1000" height="750" loading="eager" />
        </div>
        <p className="hero-photo-note">Suasana belajar sebagai inspirasi · Foto ilustrasi dari Pexels</p>
      </div>
    </section>
  );
}
