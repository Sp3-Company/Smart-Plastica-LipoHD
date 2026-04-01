import Image from "next/image"
import Link from "next/link"
import { CONTACT } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Desktop background */}
      <Image
        src="/images/hero-desktop.webp"
        alt="Smart Plastica - Cirurgia plastica em Sao Paulo"
        fill
        priority
        className="hidden md:block object-cover object-center"
        sizes="100vw"
      />
      {/* Mobile background */}
      <Image
        src="/images/hero-mobile.webp"
        alt="Smart Plastica - Cirurgia plastica em Sao Paulo"
        fill
        priority
        className="block md:hidden object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mb-6">
            REALIZE SUA CIRURGIA PLASTICA COM SEGURANCA, TECNOLOGIA E UM CAMINHO
            POSSIVEL PARA VOCE REALIZAR SEU SONHO
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Guiamos mulheres na conquista da sua melhor versao com tecnica,
            acompanhamento completo e cirurgioes certificados pela SBCP. Da
            primeira conversa ao pos-operatorio, voce nunca caminha sozinha.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CONTACT.whatsappDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white rounded-full px-8 py-3 text-center font-semibold hover:bg-brand-warm transition-colors"
            >
              Fale com a nossa Consultora
            </a>
            <Link
              href="/como-funciona"
              className="border-2 border-white text-white rounded-full px-8 py-3 text-center font-semibold hover:bg-white/10 transition-colors"
            >
              Saiba como funciona
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
