"use client"
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

type Props = {
  images: string[]
  height?: number // in px
  intervalMs?: number
  objectFit?: 'cover' | 'contain'
}

export function ImageSequence({ images, height = 260, intervalMs = 3500, objectFit = 'cover' }: Props) {
  const slides = useMemo(() => (images && images.length > 0 ? images : []), [images])
  const [index, setIndex] = useState(0)
  const fitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover'

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [slides.length, intervalMs])

  if (slides.length === 0) return null

  return (
    <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-sm" style={{ height }}>
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ width: `${slides.length * 100}%`, transform: `translateX(-${index * (100 / slides.length)}%)` }}
      >
        {slides.map((src) => (
          <div key={src} className="relative h-full" style={{ width: `${100 / slides.length}%` }}>
            <Image src={src} alt="Gallery" fill sizes="(min-width: 768px) 66vw, 100vw" className={`${fitClass} object-center`} />
          </div>
        ))}
      </div>
      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((s, i) => (
            <span key={s} className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-slate-800' : 'bg-slate-300'}`} />)
          )}
        </div>
      )}
    </div>
  )
}
