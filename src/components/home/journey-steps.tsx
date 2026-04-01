import Link from "next/link"

const STEPS = [
  {
    number: 1,
    title: "Videochamada gratuita com consultora especializada",
    description:
      "Agende uma conversa sem compromisso para nos contar sobre o que deseja. Vamos ouvir voce com acolhimento e clareza.",
  },
  {
    number: 2,
    title: "Conhecemos suas necessidades",
    description:
      "Entendemos suas expectativas, historico e desejos para recomendar o melhor caminho para o seu caso.",
  },
  {
    number: 3,
    title: "Indicamos o cirurgiao ideal",
    description:
      "Com base no seu perfil, conectamos voce ao cirurgiao certificado pela SBCP mais indicado para o seu procedimento.",
  },
  {
    number: 4,
    title: "Consulta medica e elaboracao do plano cirurgico",
    description:
      "O cirurgiao avalia seu caso, apresenta as possibilidades e elabora um plano personalizado com total transparencia.",
  },
  {
    number: 5,
    title: "Planejamento e investimento",
    description:
      "Organizamos juntos as condicoes para que sua decisao seja viavel, com clareza sobre valores e formas de pagamento.",
  },
  {
    number: 6,
    title: "Acompanhamos voce do inicio ao fim",
    description:
      "Do pre-operatorio a recuperacao completa, nossa equipe esta presente com retornos, orientacoes e suporte dedicado.",
  },
]

export function JourneySteps() {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            COMO FUNCIONA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-4">
            SUA JORNADA COM A SMART PLASTICA
          </h2>
          <p className="text-brand-neutral-warm text-lg leading-relaxed">
            Seu sonho vira decisao em seis passos
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex gap-5">
              {/* Number circle */}
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-xl font-semibold">
                  {step.number}
                </div>
                {/* Vertical connector (visible on desktop within same column) */}
                {step.number < 6 && (
                  <div className="hidden lg:block w-px h-full bg-brand-beige mx-auto mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-display text-xl text-brand-dark font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-neutral-warm text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/como-funciona"
            className="inline-block border-2 border-brand-primary text-brand-primary rounded-full px-8 py-3 font-semibold hover:bg-brand-primary hover:text-white transition-colors"
          >
            Entenda sua jornada completa
          </Link>
        </div>
      </div>
    </section>
  )
}
