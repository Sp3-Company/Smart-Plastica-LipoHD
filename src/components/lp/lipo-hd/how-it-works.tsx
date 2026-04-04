import { CONTACT } from "@/lib/constants"

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Videochamada com a consultora",
      text: "Em 30 minutos, entendemos seu caso, suas dúvidas e o que você quer transformar. Sem pressão.",
    },
    {
      n: "02",
      title: "Consulta presencial com cirurgião SBCP",
      text: "Planejamento personalizado, exames prévios e apresentação do que é — e do que não é — realista no seu caso.",
    },
    {
      n: "03",
      title: "Cirurgia em hospital de referência",
      text: "Centro cirúrgico hospitalar, anestesista, equipe completa. Nunca em clínica de fundo de quintal.",
    },
    {
      n: "04",
      title: "Pós-operatório acompanhado",
      text: "Drenagens, retornos programados, protocolo de recuperação e suporte da equipe até sua plena recuperação.",
    },
  ]

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-brand-dark text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div data-reveal className="text-center mb-14">
          <span className="text-brand-light uppercase text-sm font-semibold tracking-widest">
            COMO FUNCIONA
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-3 leading-tight">
            DO PRIMEIRO "OI" AO ESPELHO DEPOIS
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Um caminho claro, seguro e acompanhado — em 4 etapas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              data-reveal-delay={i + 1}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <span className="font-display text-5xl text-brand-light block mb-4">{s.n}</span>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="text-center mt-12">
          <a
            href={CONTACT.whatsappAgenda}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-dark rounded-full pl-6 pr-2 py-2.5 text-sm md:text-base font-semibold hover:bg-brand-beige transition group"
          >
            Começar pela videochamada
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-white transition group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
