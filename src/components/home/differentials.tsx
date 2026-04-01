import Image from "next/image"
import { CONTACT } from "@/lib/constants"

const DIFFERENTIALS = [
  {
    title: "Consultora especializada",
    description:
      "Desde a primeira conversa, uma consultora dedicada entende suas necessidades e guia cada passo da sua jornada com acolhimento e clareza.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "O sonho precisa ser possível",
    description:
      "Acreditamos que realizar seu sonho não deve ser um sacrifício. Por isso, buscamos condições que tornem sua decisão viável e planejada.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Você nunca caminha sozinha",
    description:
      "Do pré ao pós-operatório, nossa equipe está presente em cada momento, com retornos programados e suporte dedicado à sua recuperação.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
]

export function Differentials() {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-8">
          <div className="max-w-xl">
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
          <div className="hidden md:block shrink-0">
            <Image
              src="/images/selo-smart-lovers.svg"
              alt="Smart Lovers"
              width={120}
              height={120}
              className="animate-spin-slow"
            />
          </div>
        </div>

        {/* Cards grid — 3 columns: tall left card, 2x2 middle/right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Column 1: Tall card with image spanning 2 rows */}
          <div className="bg-[#e8ddd3] rounded-2xl overflow-hidden md:row-span-2 flex flex-col">
            <div className="flex-1 flex items-end justify-center overflow-hidden">
              <Image
                src="/images/diferencial.webp"
                alt="Smart Lovers"
                width={400}
                height={500}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-4">
                {DIFFERENTIALS[0].icon}
              </div>
              <h3 className="font-display text-xl text-brand-dark mb-2">
                {DIFFERENTIALS[0].title}
              </h3>
              <p className="text-brand-neutral-warm text-sm leading-relaxed">
                {DIFFERENTIALS[0].description}
              </p>
            </div>
          </div>

          {/* Column 2, Row 1: Tecnologia */}
          <div className="bg-[#e8ddd3] rounded-2xl p-6">
            <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-4">
              {DIFFERENTIALS[1].icon}
            </div>
            <h3 className="font-display text-xl text-brand-dark mb-2">
              {DIFFERENTIALS[1].title}
            </h3>
            <p className="text-brand-neutral-warm text-sm leading-relaxed">
              {DIFFERENTIALS[1].description}
            </p>
          </div>

          {/* Column 3, Row 1: Seguranca */}
          <div className="bg-[#e8ddd3] rounded-2xl p-6">
            <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-4">
              {DIFFERENTIALS[2].icon}
            </div>
            <h3 className="font-display text-xl text-brand-dark mb-2">
              {DIFFERENTIALS[2].title}
            </h3>
            <p className="text-brand-neutral-warm text-sm leading-relaxed">
              {DIFFERENTIALS[2].description}
            </p>
          </div>

          {/* Column 2, Row 2: O sonho */}
          <div className="bg-[#e8ddd3] rounded-2xl p-6">
            <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-4">
              {DIFFERENTIALS[3].icon}
            </div>
            <h3 className="font-display text-xl text-brand-dark mb-2">
              {DIFFERENTIALS[3].title}
            </h3>
            <p className="text-brand-neutral-warm text-sm leading-relaxed">
              {DIFFERENTIALS[3].description}
            </p>
          </div>

          {/* Column 3, Row 2: Voce nunca caminha sozinha */}
          <div className="bg-[#e8ddd3] rounded-2xl p-6">
            <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-4">
              {DIFFERENTIALS[4].icon}
            </div>
            <h3 className="font-display text-xl text-brand-dark mb-2">
              {DIFFERENTIALS[4].title}
            </h3>
            <p className="text-brand-neutral-warm text-sm leading-relaxed">
              {DIFFERENTIALS[4].description}
            </p>
          </div>
        </div>

        {/* Full-width card: Tecnica que sustenta resultados */}
        <div className="bg-[#e8ddd3] rounded-2xl p-6 mt-5">
          <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-4">
            {DIFFERENTIALS[5].icon}
          </div>
          <h3 className="font-display text-xl text-brand-dark mb-2">
            {DIFFERENTIALS[5].title}
          </h3>
          <p className="text-brand-neutral-warm text-sm leading-relaxed max-w-2xl">
            {DIFFERENTIALS[5].description}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={CONTACT.whatsappAgenda}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-brand-warm transition group"
          >
            Agendar Consulta
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
