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
        className="group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 ring-1 ring-black/5 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
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
        {/* Simple phone-in-bubble icon (not the WhatsApp logo) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-8 w-8 text-white"
          fill="currentColor"
        >
          <path d="M12 2C6.477 2 2 6.03 2 10.773c0 2.592 1.29 4.93 3.343 6.517L4.6 21.6a.8.8 0 0 0 1.102.945l4.23-1.815c.67.12 1.363.186 2.068.186 5.523 0 10-4.03 10-8.773C22 6.03 17.523 2 12 2Zm-1.1 6.4c.16 0 .33.007.51.02.376.027.58.267.664.613.108.448.262.883.46 1.3.13.28.07.54-.127.77-.173.2-.35.396-.536.583-.156.156-.184.292-.09.49.62 1.318 1.65 2.196 3.002 2.706.152.057.277.03.39-.085.206-.208.415-.413.62-.622.24-.243.51-.286.82-.16.37.15.74.293 1.117.43.31.113.49.34.51.67.027.42-.05.83-.232 1.206-.277.58-.76.934-1.36 1.12-.54.168-1.09.132-1.64.026-1.03-.195-1.96-.61-2.79-1.2-1.1-.79-1.98-1.79-2.64-2.98-.33-.6-.57-1.23-.66-1.91-.09-.67-.06-1.33.21-1.97.25-.58.66-.96 1.26-1.11.13-.03.27-.043.41-.043Z"/>
        </svg>
      </a>
    </div>
  )
}
