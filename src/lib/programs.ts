import type { TierIcon } from "../components/program/ProgramTierCard";

export type ProgramTier = {
  icon: TierIcon;
  title: string;
  price: string;
  suitableFor: string;
  features: string[];
  featured?: boolean;
};

export const offlineTiers: ProgramTier[] = [
  {
    icon: "sprout",
    title: "Bootcamp 1 Bulan — Foundation Intensive",
    price: "Rp 2.500.000",
    suitableFor: "Cocok untuk: pemula yang mau kick-start cepat, atau yang waktunya terbatas",
    features: [
      "Kelas Confidence (dari nol) penuh waktu",
      "Asrama & akses English Area 24 jam",
      "Modul cetak + sertifikat kelulusan",
      "1x evaluasi kemajuan di akhir program",
    ],
  },
  {
    icon: "leaf",
    title: "Bootcamp 2 Bulan — Active Speaker",
    price: "Rp 4.500.000",
    suitableFor: "Cocok untuk: yang mau progres signifikan, siap komitmen lebih lama",
    features: [
      "Kelas Confidence + Active (conversation lebih natural)",
      "1x sesi native speaker/minggu",
      "Asrama & English Area 24 jam",
      "2x evaluasi kemajuan",
    ],
  },
  {
    icon: "target",
    title: "Bootcamp 3 Bulan — Fluent & Test-Ready",
    price: "Rp 6.500.000",
    suitableFor:
      "Cocok untuk: yang butuh hasil maksimal sampai siap tes TOEFL/IELTS, ada rencana studi/kerja ke luar negeri",
    features: [
      "Confidence + Active + Fluent & TOEFL/IELTS Prep",
      "2x sesi native speaker/minggu",
      "Simulasi TOEFL ITP & IELTS resmi",
      "Asrama & English Area 24 jam",
      "Garansi mengulang materi gratis jika belum capai target level di evaluasi akhir",
    ],
    featured: true,
  },
  {
    icon: "palmtree",
    title: "Program Holiday (2 Minggu)",
    price: "Rp 1.800.000",
    suitableFor: "Cocok untuk: pelajar/mahasiswa yang mau manfaatin libur sekolah/semester",
    features: [
      "Kelas intensif kilat gaya bootcamp",
      "Kegiatan wisata terjadwal ke Bromo/Kawah Ijen/Batu Malang (paket khusus batch holiday, bukan cuma opsional weekend)",
      "Asrama & English Area 24 jam",
      "Sertifikat kelulusan",
    ],
  },
];

export const onlineTiers: ProgramTier[] = [
  {
    icon: "zap",
    title: "Online 2 Minggu — Trial Sprint",
    price: "Rp 650.000",
    suitableFor: "Cocok untuk: coba dulu sebelum commit, atau butuh polish cepat sebelum interview/acara tertentu",
    features: ["Live class via Zoom, 5x/minggu", "Modul digital + grup diskusi WhatsApp", "Sertifikat kelulusan"],
  },
  {
    icon: "trending-up",
    title: "Online 1 Bulan — Regular Progress",
    price: "Rp 1.200.000",
    suitableFor: "Cocok untuk: yang mau belajar rutin tapi tetap fleksibel dari rumah/kantor",
    features: [
      "Semua di Trial Sprint",
      "1x sesi private feedback dengan tutor",
      "Akses rekaman kelas (untuk yang ketinggalan sesi)",
    ],
  },
  {
    icon: "target",
    title: "Online 2 Bulan — Deep Progress",
    price: "Rp 2.200.000",
    suitableFor: "Cocok untuk: yang serius mau level up signifikan tanpa harus pindah ke asrama",
    features: [
      "Live class rutin + modul TOEFL/IELTS prep",
      "1x sesi native speaker online/minggu",
      "2x sesi private feedback dengan tutor",
      "Sertifikat kelulusan",
    ],
    featured: true,
  },
];
