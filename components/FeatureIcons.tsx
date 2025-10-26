import React from 'react'

const features = [
  {
    title: 'Comprehensive Comparisons',
    desc: 'Compare styles, glass options, and hardware across categories to pick the best fit.',
    icon: (
      <svg className="h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm4.5 2.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 4.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 4.5a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5H7.5Z"/></svg>
    )
  },
  {
    title: 'Expert Reviews',
    desc: 'Backed by engineering best practices for thermal and acoustic performance.',
    icon: (
      <svg className="h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="currentColor"><path d="M11.7 2.3a1 1 0 0 1 1.6 0l8 10.5A1 1 0 0 1 20.5 14H3.5a1 1 0 0 1-.8-1.7l9-10Z"/><path d="M3 16.5A1.5 1.5 0 0 1 4.5 15h15a1.5 1.5 0 0 1 0 3h-15A1.5 1.5 0 0 1 3 16.5Z"/></svg>
    )
  },
  {
    title: 'Save Time & Money',
    desc: 'Transparent pricing guidance with quick quotes for standard sizes.',
    icon: (
      <svg className="h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm.75 5.25a.75.75 0 0 0-1.5 0v4.19l-2.14 2.14a.75.75 0 1 0 1.06 1.06l2.33-2.33a.75.75 0 0 0 .25-.55V7.5Z"/></svg>
    )
  },
  {
    title: 'Eco-Friendly Options',
    desc: 'Low-E glass, multi-chamber frames, and tight sealing for real savings.',
    icon: (
      <svg className="h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="currentColor"><path d="M12.75 3.75a8.25 8.25 0 1 1-8.25 8.25c0-4.56 3.69-8.25 8.25-8.25Z"/><path d="M12 7.5c1.86 0 3.75 1.5 3.75 3.75S13.86 15 12 15 8.25 13.5 8.25 11.25 10.14 7.5 12 7.5Z" fill="white"/></svg>
    )
  }
]

export function FeatureIcons() {
  return (
    <section id="features" className="container-lg py-12">
      <h2 className="text-center text-2xl font-semibold">Top Features</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
            <div className="mb-3">{f.icon}</div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
