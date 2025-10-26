import Image from 'next/image'

export type Product = {
  id: string
  title: string
  subtitle?: string
  description?: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-48 bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        {product.subtitle && <p className="text-sm text-slate-600">{product.subtitle}</p>}
        {product.description && (
          <p className="mt-2 text-sm text-slate-600 line-clamp-3 transition-all group-hover:line-clamp-none">
            {product.description}
          </p>
        )}
        <div className="mt-3 flex items-center justify-end">
          <button className="btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  )
}
