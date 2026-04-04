export function Comparison() {
  const tradicional = [
    "Atua apenas na camada profunda da gordura",
    "Foco em reduzir volume geral",
    "Resultado: silhueta menor, sem desenho",
    "Pós-operatório padrão",
  ]

  const hd = [
    "Atua em camada profunda e superficial",
    "Esculpe contorno e evidencia musculatura",
    "Resultado: desenho anatômico harmônico",
    "Protocolo intensivo de drenagens e recuperação",
    "Técnica desenhada para anatomia feminina",
  ]

  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-6xl mx-auto px-4">
        <div data-reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            DUAS TÉCNICAS, DOIS OBJETIVOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            POR QUE LIPO HD <span className="italic text-brand-primary">não é</span> LIPO COMUM
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-4">
            Entenda a diferença antes de decidir qual caminho é o seu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Lipo Tradicional */}
          <div data-reveal data-reveal-delay="1" className="relative bg-brand-beige/60 rounded-3xl p-6 md:p-10 flex flex-col">
            <div className="pb-5 mb-6 border-b border-brand-neutral/30">
              <span className="text-brand-neutral text-xs font-semibold uppercase tracking-widest">
                Opção tradicional
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-brand-dark mt-2">
                Lipo Tradicional
              </h3>
              <p className="text-brand-dark/75 text-sm mt-2">
                Reduz volume de gordura localizada
              </p>
            </div>

            <ul className="space-y-4 flex-1">
              {tradicional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-dark/80">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-neutral" />
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 pt-6 border-t border-brand-neutral/30 text-xs text-brand-neutral uppercase tracking-wider">
              Indicado para quem quer apenas reduzir
            </p>
          </div>

          {/* Lipo HD — destaque */}
          <div data-reveal data-reveal-delay="2" className="relative bg-brand-dark text-white rounded-3xl p-6 md:p-10 flex flex-col shadow-2xl md:-mt-4 md:mb-4">
            {/* Ribbon recomendado */}
            <div className="absolute -top-3 right-4 md:right-8 bg-brand-primary text-white text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 md:px-4 py-1.5 rounded-full shadow-lg">
              Recomendado
            </div>

            <div className="pb-5 mb-6 border-b border-white/20">
              <span className="text-brand-light text-xs font-semibold uppercase tracking-widest">
                Técnica avançada
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-white mt-2">
                Lipo HD <span className="text-brand-light">(High Definition)</span>
              </h3>
              <p className="text-white/70 text-sm mt-2">
                Esculpe contorno e evidencia musculatura natural
              </p>
            </div>

            <ul className="space-y-4 flex-1">
              {hd.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm md:text-base leading-relaxed text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 pt-6 border-t border-white/20 text-xs text-brand-light uppercase tracking-wider">
              Indicada para escultura + definição
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
