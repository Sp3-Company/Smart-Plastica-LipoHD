import { CONTACT, ADDRESS, PROCEDURES } from "@/lib/constants"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Contato",
  description:
    "Entre em contato com a Smart Plástica. Agende sua videochamada gratuita ou tire suas dúvidas sobre cirurgia plástica em São Paulo.",
  path: "/contato",
})

const ALL_PROCEDURES = [
  ...PROCEDURES.women,
  ...PROCEDURES.men,
  ...PROCEDURES.facial,
]

const CONTACT_FAQ = [
  {
    question: "A videochamada é realmente gratuita?",
    answer: "Sim, totalmente gratuita e sem compromisso.",
  },
  {
    question: "Qual o tempo de retorno?",
    answer: "Até 24 horas úteis após envio do formulário.",
  },
  {
    question: "Posso fazer uma visita presencial?",
    answer:
      "As consultas com cirurgião são agendadas após a videochamada inicial com a consultora.",
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-tight max-w-5xl mx-auto">
            ENTRE EM CONTATO COM A SMART PLÁSTICA
          </h1>
          <p className="text-brand-neutral-warm text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            Agende sua videochamada gratuita ou tire suas dúvidas. Segurança,
            clareza e acolhimento.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column — Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-brand-dark mb-4">
                Comece sua jornada agora
              </h2>
              <p className="text-brand-neutral-warm leading-relaxed mb-8">
                A melhor forma de começar é conversando com a consultora
                especializada. Videochamada gratuita e sem compromisso. Primeiro
                passo para transformar o sonho em decisão.
              </p>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    className="w-full rounded-xl border border-brand-beige bg-white px-4 py-3 text-brand-dark placeholder:text-brand-neutral focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    className="w-full rounded-xl border border-brand-beige bg-white px-4 py-3 text-brand-dark placeholder:text-brand-neutral focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(11) 99999-9999"
                    className="w-full rounded-xl border border-brand-beige bg-white px-4 py-3 text-brand-dark placeholder:text-brand-neutral focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="procedimento"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Procedimento
                  </label>
                  <select
                    id="procedimento"
                    name="procedimento"
                    className="w-full rounded-xl border border-brand-beige bg-white px-4 py-3 text-brand-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition"
                  >
                    <option value="">Selecione um procedimento</option>
                    {ALL_PROCEDURES.map((proc) => (
                      <option key={proc.slug} value={proc.slug}>
                        {proc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder="Conte como podemos te ajudar..."
                    className="w-full rounded-xl border border-brand-beige bg-white px-4 py-3 text-brand-dark placeholder:text-brand-neutral focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white rounded-full px-8 py-3 font-semibold hover:bg-brand-warm transition-colors"
                >
                  Falar com a Consultora
                </button>
              </form>
            </div>

            {/* Right column — Contact info */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-brand-dark mb-4">
                Outras formas de contato
              </h2>

              {/* WhatsApp card */}
              <div className="bg-white rounded-2xl p-6 border border-brand-beige">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href={CONTACT.whatsappDefault}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary hover:text-brand-warm transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white rounded-2xl p-6 border border-brand-beige">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      E-mail
                    </h3>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-brand-primary hover:text-brand-warm transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white rounded-2xl p-6 border border-brand-beige">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      Horário de Atendimento
                    </h3>
                    <p className="text-brand-neutral-warm">{CONTACT.hours}</p>
                  </div>
                </div>
              </div>

              {/* Address card */}
              <div className="bg-white rounded-2xl p-6 border border-brand-beige">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-brand-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      Endereço
                    </h3>
                    <p className="text-brand-neutral-warm">{ADDRESS.full}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-brand-beige h-[300px]">
                <iframe
                  src={ADDRESS.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smart Plástica São Paulo - Mapa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-brand-gray/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              DÚVIDAS SOBRE CONTATO
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3">
              PERGUNTAS FREQUENTES
            </h2>
          </div>

          <div className="space-y-0">
            {CONTACT_FAQ.map((item, index) => (
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
    </>
  )
}
