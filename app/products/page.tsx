import { ProductCard, type Product } from '@/components/ProductCard'
import { PRODUCT_IMAGES } from '@/lib/site-images'

const allProducts: Product[] = [
  {
    id: 'sliding-window',
    title: 'uPVC Sliding Window',
    subtitle: '2/3 track options',
    description:
      'Designed for smooth horizontal movement, these sliding windows save space while allowing maximum light and ventilation. Perfect for modern homes and balconies with 2 or 3 track options.',
    image: PRODUCT_IMAGES['sliding-window'] || '/images/placeholder.svg',
  },
  {
    id: 'casement-window',
    title: 'Casement Window',
    subtitle: 'Openable, tight sealing',
    description:
      'Casement windows open outward with a hinge mechanism, ensuring tight sealing and energy efficiency. Ideal for superior insulation and easy maintenance.',
    image: PRODUCT_IMAGES['casement-window'] || '/images/placeholder.svg',
  },
  {
    id: 'tilt-turn',
    title: 'Tilt & Turn Window',
    subtitle: 'Dual opening for ventilation',
    description:
      'A dual-function design that allows tilting for gentle ventilation and full opening for cleaning or emergency exits. A stylish, secure, and versatile choice for any room.',
    image: PRODUCT_IMAGES['tilt-turn'] || '/images/placeholder.svg',
  },
  {
    id: 'french-door',
    title: 'French uPVC Door',
    subtitle: 'Elegant openable pair',
    description:
      'Elegant and classic, French uPVC doors bring sophistication with large glass panes for natural light. They’re durable, weather-resistant, and perfect for patios or balconies.',
    image: PRODUCT_IMAGES['french-door'] || '/images/placeholder.svg',
  },
  {
    id: 'sliding-door',
    title: 'uPVC Sliding Door',
    subtitle: 'Smooth & secure',
    description:
      'Engineered for effortless operation, uPVC sliding doors offer wide openings and a seamless indoor–outdoor experience. They ensure smooth movement, security, and modern aesthetics.',
    image: PRODUCT_IMAGES['sliding-door'] || '/images/placeholder.svg',
  },
]

export default function ProductsPage() {
  return (
    <section className="container-lg py-12">
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {allProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
