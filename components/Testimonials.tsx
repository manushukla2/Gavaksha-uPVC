export function Testimonials() {
  const items = [
    {
      quote: 'The acoustic insulation is fantastic. Our apartment is much quieter now.',
      name: 'Rahul Sharma',
    },
    {
      quote: 'Smooth sliding doors and zero drafts—big difference in summer.',
      name: 'Aparna Mishra',
    },
    {
      quote: 'Professional installation and great product quality.',
      name: 'Mahesh Kumar Singh'
    }
  ]
  return (
    <section className="container-lg py-12">
      <h2 className="text-center text-2xl font-semibold">Client Testimonials</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(t => (
          <blockquote key={t.name} className="group rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
            <p className="text-slate-700">“{t.quote}”</p>
            <footer className="mt-3 text-sm font-medium text-slate-600">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
