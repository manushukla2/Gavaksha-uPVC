import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://gavaksha.example'),
  title: {
    template: '%s | Gavaksha uPVC',
    default: 'Gavaksha uPVC Doors and Windows Pvt Ltd'
  },
  description: 'Premium uPVC doors and windows—crafted for Indian homes. Energy efficient, durable, and beautifully designed.',
  keywords: ['uPVC windows', 'uPVC doors', 'sliding windows', 'casement windows', 'energy efficient windows', 'Gavaksha'],
  icons: {
    icon: '/images/logo.png'
  },
  openGraph: {
    title: 'Gavaksha uPVC Doors and Windows',
    description: 'Premium uPVC doors and windows—crafted for Indian homes.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Floating WhatsApp chat button (configure number via NEXT_PUBLIC_WHATSAPP_NUMBER) */}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
