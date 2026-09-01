import { motion } from "motion/react";

type Props = {
  photo: string;
  name: string;
  isNativeSpeaker: boolean;
  degree: string;
  university: string;
  scoreLabel: string;
  yearsExperience: number;
  specialization: string;
  index?: number;
};

export default function TutorCard({
  photo,
  name,
  isNativeSpeaker,
  degree,
  university,
  scoreLabel,
  yearsExperience,
  specialization,
  index = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="rounded-lg bg-canvas p-6 text-center shadow-card"
    >
      <img src={photo} alt={name} className="mx-auto h-24 w-24 rounded-full object-cover" loading="lazy" />
      <h3 className="mt-4 text-heading-sm font-semibold text-navy">{name}</h3>

      <span
        className={`mt-2 inline-block rounded-full px-3 py-1 text-micro-cap uppercase ${
          isNativeSpeaker ? "bg-gold-soft text-navy-press" : "bg-navy-subtle text-navy-press"
        }`}
      >
        {isNativeSpeaker ? "🌍 Native Speaker" : "🇮🇩 Tutor Lokal Bersertifikat"}
      </span>

      <p className="mt-3 text-body-md text-ink-mute">
        🎓 {degree}, {university}
      </p>
      <p className="mt-1 text-heading-sm font-semibold text-gold">📊 {scoreLabel}</p>
      <p className="mt-1 text-body-md text-ink-mute">📅 {yearsExperience} tahun pengalaman mengajar</p>
      <p className="mt-1 text-body-md text-ink-mute">🎯 Spesialisasi: {specialization}</p>
    </motion.div>
  );
}
