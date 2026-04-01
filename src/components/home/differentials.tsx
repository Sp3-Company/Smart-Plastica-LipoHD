import { CONTACT } from "@/lib/constants"

const DIFFERENTIALS = [
  {
    title: "Consultora especializada",
    description:
      "Desde a primeira conversa, uma consultora dedicada entende suas necessidades e guia cada passo da sua jornada com acolhimento e clareza.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Tecnologia a favor da sua beleza",
    description:
      "Utilizamos ferramentas modernas para planejamento cirúrgico, simulações e acompanhamento, trazendo mais previsibilidade ao seu resultado.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Segurança em toda a jornada",
    description:
      "Cirurgiões certificados pela SBCP, hospitais de referência e protocolos rigorosos para que você se sinta segura do início ao fim.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "O sonho precisa ser possível",
    description:
      "Acreditamos que realizar seu sonho não deve ser um sacrifício. Por isso, buscamos condições que tornem sua decisão viável e planejada.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Você nunca caminha sozinha",
    description:
      "Do pré ao pós-operatório, nossa equipe está presente em cada momento, com retornos programados e suporte dedicado à sua recuperação.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Técnica que sustenta resultados",
    description:
      "Procedimentos realizados por especialistas que priorizam naturalidade, harmonia e resultados que se mantêm ao longo do tempo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export function Differentials() {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            DIFERENCIAIS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-4">
            POR QUE SER UMA SMART LOVER
          </h2>
          <p className="text-brand-neutral-warm text-lg leading-relaxed">
            Somos a ponte entre o seu sonho e a realização dele, conectando você
            com o médico ideal para o seu caso.
          </p>
        </div>

        {/* Cards grid — first card spans 2 rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First card — larger */}
          <div className="bg-brand-beige/50 rounded-2xl p-8 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-5">
                {DIFFERENTIALS[0].icon}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-brand-dark mb-3">
                {DIFFERENTIALS[0].title}
              </h3>
              <p className="text-brand-neutral-warm leading-relaxed">
                {DIFFERENTIALS[0].description}
              </p>
            </div>
            {/* Placeholder for optional image */}
            <div className="mt-8 h-32 rounded-xl bg-brand-beige/60" />
          </div>

          {/* Remaining cards — 2x2 grid on desktop */}
          {DIFFERENTIALS.slice(1).map((item) => (
            <div
              key={item.title}
              className="bg-brand-beige/50 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-brand-neutral-warm leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={CONTACT.whatsappAgenda}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white rounded-full px-8 py-3 font-semibold hover:bg-brand-dark/90 transition-colors"
          >
            Agendar Consulta
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
          </a>
        </div>
      </div>
    </section>
  )
}
