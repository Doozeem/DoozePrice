const WHATSAPP_NUMBER = "6285138378876";

export const WHATSAPP_DISPLAY_NUMBER = "+62 851-3837-8876";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Halo Dooze Project, saya ingin konsultasi pembuatan website untuk bisnis kuliner saya.";
