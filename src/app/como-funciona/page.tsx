import type { Metadata } from "next"
import { SITE, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Como Funciona | Smart Plastica Sao Paulo`,
  description:
    "Entenda como funciona sua jornada com a Smart Plastica. Do primeiro contato a recuperacao, um caminho seguro, claro e humanizado em Sao Paulo.",
  openGraph: {
    title: `Como Funciona | Smart Plastica Sao Paulo`,
    description:
      "Entenda como funciona sua jornada com a Smart Plastica. Do primeiro contato a recuperacao, um caminho seguro, claro e humanizado em Sao Paulo.",
    url: `https://${SITE.domain}/como-funciona`,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
}

const SUMMARY_STEPS = [
  "Conversa inicial para entender voce",
  "Definicao do procedimento com especialista",
  "Indicacao do cirurgiao ideal para o seu caso",
  "Organizacao da cirurgia com seguranca",
  "Suporte durante toda a recuperacao",
]

const DETAILED_STEPS = [
  {
    number: 1,
    title: "Primeiro contato: conhecemos voce",
    description:
      "Videochamada gratuita e sem compromisso. Sua consultora especializada conversa com voce para entender suas expectativas, tirar duvidas e orientar sobre possibilidades. Duracao media: 30 a 45 minutos.",
  },
  {
    number: 2,
    title: "Planejamento: o que voce precisa e o que e possivel",
    description:
      "Aprofundamos o entendimento sobre seu momento de vida, rotina, corpo e expectativas para criar um plano personalizado.",
  },
  {
    number: 3,
    title: "Match perfeito: o profissional certo para voce",
    description:
      "Fazemos o match ideal entre voce e o cirurgiao certificado pela SBCP mais indicado para o seu caso. Agendamos a consulta presencial e orientamos sobre como se preparar.",
  },
  {
    number: 4,
    title: "Avaliacao medica: seguranca e planejamento tecnico",
    description:
      "Consulta presencial com avaliacao fisica completa, analise do historico clinico, definicao do plano cirurgico, solicitacao de exames pre-operatorios e definicao da data.",
  },
  {
    number: 5,
    title: "Planejamento financeiro: seu sonho ao seu alcance",
    description:
      "Apresentacao do investimento, possibilidades de pagamento e planejamento consciente e sem pressao.",
  },
  {
    number: 6,
    title: "Recuperacao: presentes em cada fase",
    description:
      "Cirurgia em hospital de referencia em Sao Paulo. Pos-operatorio com protocolos rigorosos, retornos programados e acompanhamento proximo.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Quanto tempo leva do primeiro contato ate a cirurgia?",
    answer:
      "Em media, 2 a 4 semanas apos a consulta presencial, dependendo dos exames e preparo necessarios.",
  },
  {
    question: "Posso escolher meu cirurgiao?",
    answer:
      "O match e feito pela consultora com base no seu perfil e necessidades. Se voce tiver preferencia por um profissional especifico, avaliamos a melhor indicacao.",
  },
  {
    question: "E se eu tiver duvidas entre a consulta e a cirurgia?",
    answer:
      "Nossa equipe esta disponivel durante toda a jornada para esclarecer qualquer questao.",
  },
  {
    question: "Qual a forma de pagamento?",
    answer:
      "Oferecemos parcelamento em ate 18x no cartao de credito, alem de outras formas que sua consultora pode detalhar.",
  },
  {
    question: "Preciso de acompanhante?",
    answer:
      "Sim, e obrigatorio ter um acompanhante no dia da cirurgia e nas primeiras 24 a 48 horas.",
  },
]

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6">
            COMO FUNCIONA A SUA JORNADA COM A SMART PLASTICA
          </h1>
          <p className="text-brand-dark/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Do primeiro contato a plena recuperacao, um caminho seguro, claro e
            humanizado.
          </p>
        </div>
      </section>

      {/* Overview: summary pills */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              VISAO GERAL
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-brand-dark mt-3">
              SUA JORNADA EM 5 PASSOS
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {SUMMARY_STEPS.map((step, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 bg-brand-beige/60 border border-brand-beige rounded-full px-5 py-2.5"
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="text-brand-dark text-sm font-medium">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 6 steps */}
      <section className="py-16 md:py-24 bg-brand-gray/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              PASSO A PASSO
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3">
              CADA ETAPA DA SUA JORNADA
            </h2>
          </div>

          {/* Alternating steps with vertical line */}
          <div className="relative">
            {/* Vertical connector line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-beige -translate-x-1/2" />

            <div className="space-y-12 md:space-y-0">
              {DETAILED_STEPS.map((step) => {
                const isEven = step.number % 2 === 0

                return (
                  <div key={step.number} className="relative md:flex md:items-center md:min-h-[180px]">
                    {/* Left side (content or empty) */}
                    <div className={`md:w-1/2 ${isEven ? "md:order-2" : ""}`}>
                      <div className={`${isEven ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-beige">
                          <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-3">
                            {step.title}
                          </h3>
                          <p className="text-brand-neutral-warm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center circle (number) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-2xl font-semibold shadow-lg ring-4 ring-brand-white">
                        {step.number}
                      </div>
                    </div>

                    {/* Mobile number circle */}
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-xl font-semibold shrink-0">
                        {step.number}
                      </div>
                      <div className="h-px flex-1 bg-brand-beige" />
                    </div>

                    {/* Right side (empty or content) */}
                    <div className={`hidden md:block md:w-1/2 ${isEven ? "md:order-1" : ""}`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3">
              DUVIDAS SOBRE A JORNADA
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-0">
            {FAQ_ITEMS.map((item, index) => (
              <details
                key={index}
                className="group border-b border-brand-beige [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer py-5 text-left">
                  <span className="font-semibold text-brand-dark pr-4">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-brand-primary transition-transform group-open:rotate-45">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="pb-5 text-brand-neutral-warm leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mb-6">
            PRONTA PARA COMECAR?
          </h2>
          <p className="text-brand-dark/80 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Fale com uma consultora especializada e de o primeiro passo na sua
            jornada com a Smart Plastica.
          </p>
          <a
            href={CONTACT.whatsappAgenda}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-brand-warm transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar minha consulta
          </a>
        </div>
      </section>
    </>
  )
}
