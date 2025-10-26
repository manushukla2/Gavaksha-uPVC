export const metadata = {
  title: 'About Us'
}

export default function AboutPage() {
  return (
    <section className="container-lg py-12">
      <h1 className="text-3xl font-bold">About Gavaksha</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Gavaksha uPVC Doors and Windows Pvt Ltd designs and installs premium uPVC systems engineered for Indian homes. Our products balance thermal efficiency, acoustic comfort, and timeless aesthetics. With quality profiles, precision hardware, and trained installation teams, we ensure long-lasting performance.
      </p>
      {/* Animated images showcasing our work */}
      {/**/}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <AboutImages />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { stat: '10,000+', label: 'Units Installed' },
          { stat: '12+ yrs', label: 'Team Experience' },
          { stat: '100%', label: 'Lead-free Profiles' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-brand-blue">{s.stat}</div>
            <div className="mt-1 text-sm text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { HERO_IMAGES } from '@/lib/site-images'
import { ImageSequence } from '@/components/ImageSequence'

function AboutImages() {
  return (
    <div className="mt-8">
      <ImageSequence images={HERO_IMAGES} height={300} intervalMs={3500} objectFit="contain" />
    </div>
  )
}
