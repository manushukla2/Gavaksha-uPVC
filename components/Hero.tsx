"use client"
import Image from 'next/image'
import { HERO_IMAGE, HERO_IMAGES } from '@/lib/site-images'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

export function Hero() {
  const slides = useMemo(() => (HERO_IMAGES && HERO_IMAGES.length > 0 ? HERO_IMAGES : [HERO_IMAGE]), [])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="relative isolate min-h-[60vh] md:min-h-[70vh]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="h-full"
          style={{
            width: '100%',
          }}
        >
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${index * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((src) => (
              <div key={src} className="relative h-full" style={{ width: `${100 / slides.length}%` }}>
                <SlideImage src={src} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-white/60" />
      </div>
      <div className="container-lg py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Find the Perfect Window or Door for Your Home
          </h1>
          <p className="mt-4 max-w-xl text-slate-700">
            Energy-efficient, low-maintenance uPVC windows and doors built for Indian climates. Beautifully designed. Professionally installed.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/products" className="btn-primary">Explore Products</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function SlideImage({ src }: { src: string }) {
  const [broken, setBroken] = useState(false)
  const safeSrc = broken ? '/images/placeholder.svg' : src
  return (
    <Image
      src={safeSrc}
      alt="Hero background"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
      onError={() => setBroken(true)}
    />
  )
}
