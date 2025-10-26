import { Hero } from '@/components/Hero'
import { FeatureIcons } from '@/components/FeatureIcons'
import { ProductCard, type Product } from '@/components/ProductCard'
import { Testimonials } from '@/components/Testimonials'
import { CTASection } from '@/components/CTASection'
import Image from 'next/image'
import { HERO_IMAGES } from '@/lib/site-images'
import { PRODUCT_IMAGES } from '@/lib/site-images'

const products: Product[] = [
  {
    id: 'sliding-window',
    title: 'uPVC Sliding Window',
    subtitle: 'Space-saving, smooth glide',
    description:
      'Designed for smooth horizontal movement, these sliding windows save space while allowing maximum light and ventilation. Perfect for modern homes and balconies with 2 or 3 track options.',
    image: PRODUCT_IMAGES['sliding-window'] || '/images/placeholder.svg'
  },
  {
    id: 'casement-window',
    title: 'Casement Window',
    subtitle: 'Tight sealing, classic look',
    description:
      'Casement windows open outward with a hinge mechanism, ensuring tight sealing and energy efficiency. Ideal for superior insulation and easy maintenance.',
    image: PRODUCT_IMAGES['casement-window'] || '/images/placeholder.svg'
  },
  {
    id: 'french-door',
    title: 'French uPVC Door',
    subtitle: 'Elegant open-out style',
    description:
      'Elegant and classic, French uPVC doors bring sophistication with large glass panes for natural light. They’re durable, weather-resistant, and perfect for patios or balconies.',
    image: PRODUCT_IMAGES['french-door'] || '/images/placeholder.svg'
  }
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container-lg py-12">
        <h2 className="text-center text-2xl font-semibold">Featured Products</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <FeatureIcons />
      <Testimonials />
      <CTASection />
    </>
  )
}
