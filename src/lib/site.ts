export const siteConfig = {
  name: "Fantastico English Course",
  tagline: "Upgrade Bahasa Inggrismu, Upgrade Peluangmu.",
  whatsappNumber: "6281234567890", // TODO: replace with real WhatsApp number before launch
  whatsappDefaultMessage: "Halo, saya mau tanya soal program Fantastico English Course.",
  email: "info@fantastico.id",
  phone: "+62 812-3456-7890",
  address: "Jl. Contoh Raya No. 123, Pare, Kediri, Jawa Timur",
  legal: {
    skDiknas: "421.9/1234-Disdik/2020", // TODO: replace with real SK Diknas number
    npsn: "69123456", // TODO: replace with real NPSN
    badanUsaha: "PT Fantastico Edukasi Nusantara", // TODO: confirm CV/PT + real name
  },
  stats: {
    foundedYear: 2019, // TODO: confirm real founding year
    alumniCount: "3.000+",
    classSizeMax: 10,
    instansiPartnerCount: 42, // TODO: confirm real instansi partner count
  },
  social: {
    instagram: "https://instagram.com/fantasticoenglish",
    tiktok: "https://tiktok.com/@fantasticoenglish",
    youtube: "https://youtube.com/@fantasticoenglish",
    linkedin: "https://linkedin.com/company/fantasticoenglish",
  },
} as const;

export function waLink(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navProgram = [
  { label: "Offline / Bootcamp", href: "/program/offline-bootcamp/" },
  { label: "Online", href: "/program/online/" },
  { label: "Rombongan & Instansi", href: "/program/rombongan-instansi/" },
] as const;

export const navInfoLainnya = [
  { label: "Profil Perusahaan", href: "/profile/perusahaan/" },
  { label: "Profil Guru & Tutor", href: "/profile/guru-tutor/" },
  { label: "Fasilitas", href: "/fasilitas/" },
  { label: "Alumni & Testimoni", href: "/alumni/" },
  { label: "FAQ", href: "/faq/" },
] as const;

export const navPrimary = [
  { label: "Beranda", href: "/" },
  { label: "Kalender Akademik", href: "/kalender-akademik/" },
  { label: "Biaya", href: "/biaya/" },
] as const;

export const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "Offline / Bootcamp", href: "/program/offline-bootcamp/" },
  { label: "Online", href: "/program/online/" },
  { label: "Rombongan & Instansi", href: "/program/rombongan-instansi/" },
  { label: "Profil Perusahaan", href: "/profile/perusahaan/" },
  { label: "Profil Guru & Tutor", href: "/profile/guru-tutor/" },
  { label: "Fasilitas", href: "/fasilitas/" },
  { label: "Kalender Akademik", href: "/kalender-akademik/" },
  { label: "Biaya", href: "/biaya/" },
  { label: "Alumni & Testimoni", href: "/alumni/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontak & Pendaftaran", href: "/kontak/" },
] as const;
