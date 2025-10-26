import Link from 'next/link'
import { getWhatsAppHref } from '@/lib/site-config'

export function CTASection() {
  const waHref = getWhatsAppHref()
  return (
    <section className="container-lg py-12">
      <div className="rounded-2xl bg-gradient-to-r from-brand-blue to-brand-teal p-8 text-white shadow-sm">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Ready to Transform Your Space?</h3>
            <p className="mt-2 text-white/90">Talk to our experts for a free consultation and quick estimates tailored to your home.</p>
          </div>
          <div className="text-right">
            {waHref ? (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-slate-900"
                aria-label="Contact us on WhatsApp"
                title="Contact us on WhatsApp"
              >
                Contact Us on WhatsApp
              </a>
            ) : (
              <Link href="/contact" className="btn-secondary bg-white text-slate-900">Contact Us on WhatsApp</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
