import { CONTACT } from "@/lib/constants"

const DIFFERENTIALS = [
  {
    title: "Consultora especializada",
    description:
      "Desde a primeira conversa, uma consultora dedicada entende suas necessidades e guia cada passo da sua jornada com acolhimento e clareza.",
  },
  {
    title: "Tecnologia a favor da sua beleza",
    description:
      "Utilizamos ferramentas modernas para planejamento cirurgico, simulacoes e acompanhamento, trazendo mais previsibilidade ao seu resultado.",
  },
  {
    title: "Seguranca em toda a jornada",
    description:
      "Cirurgioes certificados pela SBCP, hospitais de referencia e protocolos rigorosos para que voce se sinta segura do inicio ao fim.",
  },
  {
    title: "O sonho precisa ser possivel",
    description:
      "Acreditamos que realizar seu sonho nao deve ser um sacrificio. Por isso, buscamos condicoes que tornem sua decisao viavel e planejada.",
  },
  {
    title: "Voce nunca caminha sozinha",
    description:
      "Do pre ao pos-operatorio, nossa equipe esta presente em cada momento, com retornos programados e suporte dedicado a sua recuperacao.",
  },
  {
    title: "Tecnica que sustenta resultados",
    description:
      "Procedimentos realizados por especialistas que priorizam naturalidade, harmonia e resultados que se mantem ao longo do tempo.",
  },
]

export function Differentials() {
  return (
    <section className="py-16 md:py-24 bg-brand-gray/30">
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
            Somos a ponte entre o seu sonho e a realizacao dele, conectando voce
            com o medico ideal para o seu caso.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-5">
                <div className="w-5 h-5 rounded-full bg-brand-primary" />
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
            className="inline-block bg-brand-primary text-white rounded-full px-8 py-3 font-semibold hover:bg-brand-warm transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
