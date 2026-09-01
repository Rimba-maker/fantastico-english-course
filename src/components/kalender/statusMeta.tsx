import { CircleCheck, CircleAlert, CircleSlash, type LucideIcon } from "lucide-react";

export type IntakeStatus = "tersedia" | "hampir-penuh" | "penuh";

export const statusMeta: Record<IntakeStatus, { label: string; icon: LucideIcon; className: string; pulse?: boolean }> = {
  tersedia: { label: "Tersedia", icon: CircleCheck, className: "bg-status-available" },
  "hampir-penuh": { label: "Hampir Penuh", icon: CircleAlert, className: "bg-status-almost-full", pulse: true },
  penuh: { label: "Penuh", icon: CircleSlash, className: "bg-status-full" },
};
