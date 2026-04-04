import Image from "next/image"
import { CONTACT } from "@/lib/constants"
import { PortalArch } from "./brand-graphics"

export function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-[88vh] w-full overflow-hidden bg-brand-dark">
      {/* Vídeo ping-pong otimizado (396KB, loop contínuo) — desktop + mobile */}
      <video
        src="/videos/hero-lipo-hd-pingpong.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/procedures/corporal-fem-03.webp"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

      {/* Grafismo portal da marca — decoração sutil */}
      <PortalArch className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 w-[380px] h-[640px] text-brand-light/15 pointer-events-none" strokeWidth={1} />

      <div className="relative z-10 flex min-h-[92vh] md:min-h-[88vh] items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-light uppercase text-xs md:text-sm font-semibold tracking-[0.2em] mb-5">
              LIPO HD FEMININA · SÃO PAULO
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f5efe9] leading-[1.05] mb-6">
              O SONHO COMEÇA NO ESPELHO.
              <br />
              <span className="text-brand-light italic">A técnica revela quem você é.</span>
            </h1>

            <p className="text-[#f5efe9]/85 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Técnica que respeita suas curvas. Cirurgiões <strong className="text-white">SBCP</strong>,
              hospital de referência e consultora dedicada.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-10">
              <a
                href={CONTACT.whatsappAgenda}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-dark rounded-full pl-6 pr-2 py-2.5 text-sm md:text-base font-semibold hover:bg-brand-beige transition group"
              >
                Falar com a consultora
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-white transition group-hover:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </span>
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-3 border border-white/40 text-white rounded-full pl-6 pr-2 py-2.5 text-sm md:text-base font-medium hover:bg-white/10 transition group"
              >
                Entender como funciona
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </span>
              </a>
            </div>

            {/* Trust strip com selos da marca — estilo site oficial */}
            <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4 md:gap-8 border-t border-white/10 pt-5 md:pt-6 max-w-3xl">
              <div className="flex items-center gap-2.5 md:gap-3">
                <Image
                  src="/images/selo-realizando-sonhos-light.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-11 h-11 md:w-14 md:h-14 shrink-0 animate-spin-slow"
                />
                <div className="leading-tight">
                  <p className="font-display text-xl md:text-2xl text-[#f0eae1]">+ 5 anos</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider">realizando sonhos</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 md:gap-3">
                <Image
                  src="/images/selo-smart-lovers-light.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-11 h-11 md:w-14 md:h-14 shrink-0 animate-spin-slow"
                />
                <div className="leading-tight">
                  <p className="font-display text-xl md:text-2xl text-[#f0eae1]">+ de 2.000</p>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider">Smart Lovers</p>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 flex items-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
                <div>
                  <p className="text-white/60 text-[10px] md:text-xs leading-tight mb-1.5">
                    Cirurgiões certificados pela:
                  </p>
                  <Image
                    src="/images/sbcp.webp"
                    alt="Sociedade Brasileira de Cirurgia Plástica"
                    width={120}
                    height={30}
                    className="w-24 md:w-28 h-auto object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
