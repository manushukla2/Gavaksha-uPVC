"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="container-lg flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/images/logo.png"
            alt="Gavaksha uPVC doors and Windows logo"
            width={120}
            height={40}
            priority
            className="h-8 md:h-9 w-auto object-contain"
          />
          <span>Gavaksha uPVC doors and Windows</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <Link href="/about" className="hover:text-brand-blue">About Us</Link>
          <Link href="/products" className="hover:text-brand-blue">Products</Link>
          <Link href="/contact" className="hover:text-brand-blue">Contact</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://share.google/AWtZVaE1UxK81ASLM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="Open Google reviews in a new tab"
          >
            Reviews
          </a>
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-lg space-y-3 py-3">
            <Link href="/" onClick={() => setOpen(false)} className="block">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block">About Us</Link>
            <Link href="/products" onClick={() => setOpen(false)} className="block">Products</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
            <a
              href="https://share.google/AWtZVaE1UxK81ASLM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center"
              onClick={() => setOpen(false)}
            >
              Reviews
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full text-center">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  )
}
