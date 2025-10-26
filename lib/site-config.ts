// Site-wide configuration values
// Set your WhatsApp number here or via env var NEXT_PUBLIC_WHATSAPP_NUMBER
// Format preferred by wa.me: country code + number, digits only (e.g., 919876543210)

export const RAW_WHATSAPP_NUMBER =
  (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER as string | undefined) ||
  "7546904515"; // Provided local number; will be auto-prefixed with DEFAULT_COUNTRY_CODE when needed

// Default country code to prefix when a 10-digit local number is provided (without '+').
// You can override via NEXT_PUBLIC_DEFAULT_COUNTRY_CODE.
export const DEFAULT_COUNTRY_CODE =
  (process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE as string | undefined) ||
  "91"; // India by default

export const DEFAULT_WHATSAPP_MESSAGE =
  (process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE as string | undefined) ||
  "Hello! I'm interested in your uPVC windows and doors.";

export function getSanitizedWhatsAppNumber(input: string): string {
  // Keep digits only; wa.me expects international format without '+' or leading zeros
  const digitsOnly = (input || "").replace(/\D+/g, "");
  // If it's a 10-digit local number, prefix with default country code
  if (digitsOnly.length === 10 && DEFAULT_COUNTRY_CODE) {
    return `${DEFAULT_COUNTRY_CODE}${digitsOnly}`;
  }
  return digitsOnly;
}

// Returns a "+<country><number>" display string, e.g., +919876543210
export function getDisplayPhone(input: string): string {
  const intl = getSanitizedWhatsAppNumber(input)
  return intl ? `+${intl}` : ""
}

// Optional list of contact numbers to display across the site (comma-separated in env)
export const CONTACT_NUMBERS: string[] = (
  (process.env.NEXT_PUBLIC_CONTACT_NUMBERS as string | undefined)?.split(",") || [RAW_WHATSAPP_NUMBER, "9430400047"]
).map((s) => s.trim()).filter(Boolean)

// Build a tel: href from a display phone like +9190...
export function toTelHref(displayPhone: string): string {
  return `tel:${(displayPhone || "").replace(/[^\d+]/g, "")}`
}

// Build a WhatsApp deep link to open app/web with a prefilled message
export function getWhatsAppHref(
  numberRaw: string = RAW_WHATSAPP_NUMBER,
  message: string = DEFAULT_WHATSAPP_MESSAGE
): string | null {
  const num = getSanitizedWhatsAppNumber(numberRaw)
  if (!num) return null
  const text = encodeURIComponent(message || "Hello!")
  return `https://wa.me/${num}?text=${text}`
}
