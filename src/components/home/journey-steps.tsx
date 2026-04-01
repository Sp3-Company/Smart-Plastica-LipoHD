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
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — sticky title + CTA */}
          <div className="lg:sticky lg:top-28 lg:self-start will-change-transform">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              COMO FUNCIONA
            </span>
            <h2 className="mt-3 mb-4 font-display text-3xl text-white md:text-4xl lg:text-5xl">
              SUA JORNADA COM A SMART PLÁSTICA
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/70">
              Seu sonho vira decisão em seis passos
            </p>

            <Link
              href="/como-funciona"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 py-2 pr-2 pl-6 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Entenda sua jornada completa
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Right column — scrollable numbered steps */}
          <div>
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className={`flex gap-6 py-12${index < STEPS.length - 1 ? " border-b border-white/10" : ""}`}
              >
                {/* Number circle */}
                <div className="shrink-0 pt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-light/40 text-sm text-brand-light">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
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
