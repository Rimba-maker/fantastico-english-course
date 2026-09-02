import { toast } from "sonner";

/** Opens a WhatsApp link in a new tab; if the browser blocks the popup, offers a manual fallback via toast. */
export function openWhatsApp(url: string) {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (win) return;

  toast.error("Popup diblokir browser.", {
    description: "Klik tombol di bawah untuk buka WhatsApp secara manual.",
    action: {
      label: "Buka WhatsApp",
      onClick: () => window.open(url, "_blank", "noopener,noreferrer"),
    },
  });
}
