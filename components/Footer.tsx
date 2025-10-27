import Link from 'next/link'
import Image from 'next/image'
import { CONTACT_NUMBERS, getDisplayPhone, toTelHref } from '@/lib/site-config'

export function Footer() {
  const address = 'Dighi Tinmuhani, Mahua 🛣️ Road, near Hajipur, Krishnanagar, Bihar 844102'
  const mapsHref = `https://www.google.com/maps?q=${encodeURIComponent(address)}`
  const displayPhones = CONTACT_NUMBERS.map(getDisplayPhone).filter(Boolean)
  return (
    <footer className="mt-16 border-t bg-slate-50">
      <div className="container-lg grid gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-3 font-semibold">
            <Image
              src="/images/logo.png"
              alt="Gavaksha uPVC Doors & Windows logo"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span>Gavaksha uPVC Doors & Windows</span>
          </div>
          <p className="text-sm text-slate-600">Premium uPVC doors and windows engineered for comfort, efficiency, and lasting beauty.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <p className="text-sm text-slate-600">Email: <a href="mailto:gavakshaupvc@gmail.com" className="underline underline-offset-2">gavakshaupvc@gmail.com</a></p>
          <p className="text-sm text-slate-600">
            Phone: {displayPhones.length ? (
              displayPhones.map((dp, i) => (
                <span key={dp}>
                  <a href={toTelHref(dp)} className="underline underline-offset-2">{dp}</a>
                  {i < displayPhones.length - 1 ? ', ' : null}
                </span>
              ))
            ) : '—'}
          </p>
          <p className="text-sm text-slate-600">
            Address: <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{address}</a>
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Get a Quote</h4>
          <div className="flex flex-col gap-3">
            <a
              href="https://share.google/AWtZVaE1UxK81ASLM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Reviews
            </a>
            <Link href="/contact" className="btn-primary">Request Pricing</Link>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Gavaksha uPVC Doors & Windows Pvt Ltd</div>
    </footer>
  )
}
