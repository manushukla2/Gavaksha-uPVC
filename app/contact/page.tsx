import { CONTACT_NUMBERS, getDisplayPhone, toTelHref } from '@/lib/site-config'
export const metadata = { title: 'Contact Us' }

export default function ContactPage() {
  const displayPhones = CONTACT_NUMBERS.map(getDisplayPhone).filter(Boolean)
  const address = 'Dighi Tinmuhani, Mahua 🛣️ Road, near Hajipur, Krishnanagar, Bihar 844102'
  const mapsHref = `https://www.google.com/maps?q=${encodeURIComponent(address)}`
  return (
    <section className="container-lg py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 max-w-2xl text-slate-700">Reach out via phone, email, or find us on the map below.</p>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="font-semibold">Reach us</h3>
        <p className="mt-1 text-sm text-slate-600">Email: <a href="mailto:gavakshaupvc@gmail.com" className="underline underline-offset-2">gavakshaupvc@gmail.com</a></p>
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
        <div className="mt-4 w-full overflow-hidden rounded-lg bg-slate-100 h-[420px] md:h-[520px]">
          <iframe
            title="Location Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
