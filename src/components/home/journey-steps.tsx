import Link from "next/link"

const STEPS = [
  {
    number: 1,
    title: "Videochamada gratuita com consultora especializada",
    description:
      "Agende uma conversa sem compromisso para nos contar sobre o que deseja. Vamos ouvir você com acolhimento e clareza.",
  },
  {
    number: 2,
    title: "Conhecemos suas necessidades",
    description:
      "Entendemos suas expectativas, histórico e desejos para recomendar o melhor caminho para o seu caso.",
  },
  {
    number: 3,
    title: "Indicamos o cirurgião ideal",
    description:
      "Com base no seu perfil, conectamos você ao cirurgião certificado pela SBCP mais indicado para o seu procedimento.",
  },
  {
    number: 4,
    title: "Consulta médica e elaboração do plano cirúrgico",
    description:
      "O cirurgião avalia seu caso, apresenta as possibilidades e elabora um plano personalizado com total transparência.",
  },
  {
    number: 5,
    title: "Planejamento e investimento",
    description:
      "Organizamos juntos as condições para que sua decisão seja viável, com clareza sobre valores e formas de pagamento.",
  },
  {
    number: 6,
    title: "Acompanhamos você do início ao fim",
    description:
      "Do pré-operatório à recuperação completa, nossa equipe está presente com retornos, orientações e suporte dedicado.",
  },
]

export function JourneySteps() {
  return (
    <section className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — title, subtitle, CTA */}
          <div className="flex flex-col justify-center">
            <span className="text-brand-light uppercase text-sm font-semibold tracking-widest">
              COMO FUNCIONA
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-4">
              SUA JORNADA COM A SMART PLÁSTICA
            </h2>
            <p className="text-brand-beige text-lg leading-relaxed mb-10">
              Seu sonho vira decisão em seis passos
            </p>

            <div>
              <Link
                href="/como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Entenda sua jornada completa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right column — numbered steps */}
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-5">
                {/* Number circle */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-light text-white flex items-center justify-center font-display text-xl font-semibold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl text-white font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-brand-beige text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
