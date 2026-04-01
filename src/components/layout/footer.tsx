import Link from "next/link"
import Image from "next/image"
import { SITE, CONTACT, ADDRESS, NAV_ITEMS } from "@/lib/constants"

const LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Política de Cookies", href: "#" },
  { label: "Termos de Uso", href: "#" },
]

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Slogan */}
          <div className="space-y-4">
            <Image
              src="/images/logo.svg"
              alt="Smart Plástica"
              width={140}
              height={42}
              className="brightness-0 invert"
            />
            <p className="font-display text-lg italic text-brand-light">
              {SITE.slogan}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-light">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-brand-beige transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-light">
              Contato
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-brand-beige">
              <a
                href={`tel:${CONTACT.phoneClean}`}
                className="transition-colors hover:text-white"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-white"
              >
                {CONTACT.email}
              </a>
              <p>{CONTACT.hours}</p>
            </div>
          </div>

          {/* Column 4: Address + Social */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-light">
              Endereço
            </h3>
            <p className="text-sm text-brand-beige">
              {ADDRESS.street} - {ADDRESS.neighborhood}
              <br />
              {ADDRESS.city} - {ADDRESS.state}, {ADDRESS.zip}
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-beige transition-colors hover:bg-brand-primary hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-beige transition-colors hover:bg-brand-primary hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs text-brand-neutral-warm transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-6 space-y-1 text-xs text-brand-neutral-warm">
          <p>
            &copy; 2026 - {SITE.name} - Todos os direitos reservados. | CNPJ:{" "}
            {SITE.cnpj}
          </p>
          <p>Desenvolvido por: Lucas Tavares</p>
        </div>
      </div>
    </footer>
  )
}
