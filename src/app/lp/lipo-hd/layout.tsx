import type { Metadata } from "next"
import Image from "next/image"
import { CONTACT } from "@/lib/constants"
import { WhatsappFab } from "@/components/lp/lipo-hd/whatsapp-fab"
import { RevealObserver } from "@/components/lp/lipo-hd/reveal-observer"

export const metadata: Metadata = {
  title: "Lipo HD Feminina em São Paulo | Smart Plástica",
  description:
    "Lipo HD com cirurgiões certificados pela SBCP em São Paulo. Definição de contorno respeitando a anatomia feminina. Consultoria gratuita, hospital de referência e pós-op acompanhado.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lipo HD Feminina em São Paulo | Smart Plástica",
    description:
      "Definição corporal avançada com técnica HD. Cirurgiões SBCP, hospital de referência, consultora dedicada.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top bar minimalista — sem nav para reduzir leaks */}
      <header className="sticky top-0 z-40 w-full bg-brand-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <div className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Smart Plástica"
              width={140}
              height={42}
              priority
              className="brightness-0 invert"
            />
          </div>
          <a
            href={CONTACT.whatsappAgenda}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-dark rounded-full pl-4 pr-2 py-1.5 text-xs md:text-sm font-medium hover:bg-brand-beige transition group"
          >
            <span className="hidden sm:inline">Agendar minha consulta</span>
            <span className="sm:hidden">Agendar</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-dark text-white transition group-hover:rotate-45">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </a>
        </div>
      </header>
      <main>{children}</main>
      <RevealObserver />
      <WhatsappFab />
      {/* Rodapé mínimo de LP */}
      <footer className="bg-brand-dark text-white/70 py-8 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>Smart Plástica · R. Canário, 539 · Moema, São Paulo · SP</p>
          <p>CNPJ 65.268.316/0001-04 · Cirurgiões certificados pela SBCP</p>
        </div>
      </footer>
    </>
  )
}
