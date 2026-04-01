"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_ITEMS, CONTACT } from "@/lib/constants"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "bg-brand-dark/95 shadow-lg backdrop-blur-sm"
          : "bg-brand-dark"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Smart Plástica"
            width={160}
            height={48}
            priority
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-normal text-white/80 transition-colors hover:text-white after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-brand-light after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <a
          href={CONTACT.whatsappDefault}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20 lg:inline-flex lg:items-center lg:gap-1"
        >
          Fale com a Consultora
          <span aria-hidden="true">&rarr;</span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 ml-auto flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45 bg-brand-dark" : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 bg-brand-dark" : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45 bg-brand-dark" : "bg-white"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-brand-beige lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-normal text-brand-dark transition-colors hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT.whatsappDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-warm"
            >
              Fale com a Consultora &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
