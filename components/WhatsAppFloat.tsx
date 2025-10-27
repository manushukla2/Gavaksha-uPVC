"use client"
import { DEFAULT_WHATSAPP_MESSAGE, RAW_WHATSAPP_NUMBER, getSanitizedWhatsAppNumber } from "@/lib/site-config"
import { useMemo } from "react"

function buildWhatsAppHref(numberRaw: string, message: string): string | null {
  const num = getSanitizedWhatsAppNumber(numberRaw)
  if (!num) return null
  const text = encodeURIComponent(message || "Hello!")
  // wa.me works for both mobile (app) and desktop (web)
  return `https://wa.me/${num}?text=${text}`
}

export function WhatsAppFloat({
  number = RAW_WHATSAPP_NUMBER,
  message = DEFAULT_WHATSAPP_MESSAGE,
  tooltip = "Chat on WhatsApp",
}: {
  number?: string
  message?: string
  tooltip?: string
}) {
  const href = useMemo(() => buildWhatsAppHref(number, message), [number, message])

  if (!href) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title={tooltip}
        className="group relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-lg shadow-black/20 ring-1 ring-black/5 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        {/* Hover label (desktop) */}
        <span
          className="pointer-events-none absolute right-full mr-3 hidden translate-y-0 rounded-full bg-[#25D366] px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow ring-1 ring-black/5 transition-opacity duration-200 group-hover:opacity-100 md:inline-block"
          aria-hidden="true"
        >
          WhatsApp
        </span>
        {/* Pulse ring */}
        <span
          className="pointer-events-none absolute inset-0 -z-10 rounded-full border-2 border-[#25D366] opacity-30 [animation:ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite]"
          aria-hidden="true"
        />
        {/* WhatsApp logo image (provided asset) */}
        <img src="/images/logowhat.png" alt="WhatsApp" className="h-10 w-10" />
      </a>
    </div>
  )
}
