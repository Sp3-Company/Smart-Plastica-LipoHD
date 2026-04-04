import { SectionBridge } from "./brand-graphics"

export function WhatIs() {
  return (
    <section className="relative py-16 md:py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div data-reveal className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1 bg-brand-dark">
            <video
              src="/videos/lipo-hd-body-pingpong.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/procedures/corporal-fem-02.webp"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <div data-reveal data-reveal-delay="1" className="order-1 lg:order-2">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              O QUE É LIPO HD
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-6 leading-tight">
              LIPO HD NÃO É LIPO COMUM.
            </h2>
            <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mb-5">
              A lipoaspiração tradicional reduz volume. A <strong className="text-brand-dark">Lipo HD
              (High Definition)</strong> vai além: esculpe o contorno, trabalha em camadas
              superficial <em>e</em> profunda, e evidencia a musculatura natural que já existe no seu corpo.
            </p>
            <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mb-8">
              É um desenho anatômico milimétrico — respeitando as curvas femininas.
              O resultado não é um corpo masculinizado: é <strong className="text-brand-dark">você, mais definida,
              mais harmônica, mais você</strong>.
            </p>

            <div className="space-y-3">
              {[
                "Trabalha camada profunda + superficial da gordura",
                "Evidencia contorno de cintura, costas, flanco e abdômen",
                "Respeita a anatomia e as curvas femininas",
                "Preserva naturalidade e movimento do corpo",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-dark text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-brand-dark text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionBridge align="right" size="md" />
    </section>
  )
}
