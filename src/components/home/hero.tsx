import Image from "next/image"
import Link from "next/link"
import { CONTACT } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[500px] max-h-[800px] w-full overflow-hidden">
      {/* Desktop background */}
      <Image
        src="/images/hero-desktop.webp"
        alt="Smart Plástica - Cirurgia plástica em São Paulo"
        fill
        priority
        className="hidden md:block object-cover object-center"
        sizes="100vw"
      />
      {/* Mobile background */}
      <Image
        src="/images/hero-mobile.webp"
        alt="Smart Plástica - Cirurgia plástica em São Paulo"
        fill
        priority
        className="block md:hidden object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      {/* Content — centered vertically */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-[#f5efe9] leading-tight max-w-3xl mb-5">
            REALIZE SUA CIRURGIA PLÁSTICA COM SEGURANÇA, TECNOLOGIA E UM CAMINHO
            POSSÍVEL PARA VOCÊ REALIZAR SEU SONHO
          </h1>

          <p className="text-[#f5efe9]/85 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Guiamos mulheres na conquista da sua melhor versão com técnica,
            acompanhamento completo e cirurgiões certificados pela SBCP. Da
            primeira conversa ao pós-operatório, você nunca caminha sozinha.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CONTACT.whatsappDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-brand-warm transition group"
            >
              Fale com a nossa Consultora
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-dark transition group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </span>
            </a>
            <Link
              href="/como-funciona"
              className="inline-flex items-center gap-3 border border-white/40 text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-white/10 transition group"
            >
              Saiba como funciona
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
