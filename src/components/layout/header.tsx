"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_ITEMS, CONTACT } from "@/lib/constants"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-brand-beige/50 transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Smart Plastica"
            width={160}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wider text-brand-dark transition-colors hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={CONTACT.whatsappDefault}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-warm lg:inline-flex"
        >
          Fale com a Consultora
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-brand-dark transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-brand-dark transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-brand-dark transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-white lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-semibold uppercase tracking-wider text-brand-dark transition-colors hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT.whatsappDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-brand-primary px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-warm"
            >
              Fale com a Consultora
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
