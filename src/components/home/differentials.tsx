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
          <div className="hidden md:block shrink-0" aria-label="Smart Lovers">
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 150 150" fill="none">
              <g style={{ transformOrigin: "75px 75px", animation: "spin-slow 20s linear infinite" }}>
                <path d="M48.38 53.64C59.73 57.71 67.26 68.35 67.26 80.53V121.04c-.46-.08-.92-.16-1.38-.25l-.74-.16c-.22-.05-.46-.1-.69-.15h-.08c-.22-.05-.45-.1-.67-.16-.21-.05-.42-.11-.63-.16-.03 0-.05-.01-.08-.02-.2-.05-.4-.11-.59-.16h-.01c-.12-.03-.25-.07-.37-.1-.11-.03-.22-.06-.33-.1-.09-.03-.18-.05-.27-.08-.13-.04-.27-.08-.4-.12-.06-.02-.12-.04-.18-.06-.24-.08-.48-.16-.71-.24-.15-.05-.31-.11-.46-.16-.2-.07-.39-.13-.59-.2-.33-.12-.65-.24-.96-.36-.11-.04-.21-.08-.31-.12l-.15-.06c-.19-.07-.38-.15-.56-.23-.48-.2-.96-.41-1.43-.62l.01.01c-.06-.03-.12-.05-.18-.08-.12-.06-.24-.12-.37-.18.03.02.07.03.1.04-.06-.03-.13-.06-.19-.09-.01 0-.03-.01-.04-.02-.2-.1-.4-.19-.6-.29-.27-.14-.54-.27-.81-.41-.01 0-.03-.01-.04-.02-.14-.07-.28-.14-.41-.22-.11-.06-.23-.12-.34-.18-.1-.05-.2-.11-.29-.16-.1-.06-.2-.11-.3-.17l-.02.01-.27-.16c-.22-.12-.44-.25-.66-.38-.01-.01-.02-.01-.03-.02-.04-.02-.08-.05-.12-.07l-.39-.24c-.15-.09-.3-.18-.45-.28-.22-.14-.43-.28-.65-.42-.07-.04-.15-.09-.21-.14-.11-.07-.23-.15-.34-.23-.09-.05-.17-.11-.25-.17-.04-.03-.08-.06-.13-.09-.04-.03-.08-.06-.12-.08-.12-.08-.23-.16-.35-.24-.17-.12-.34-.24-.5-.36-.03-.02-.05-.04-.08-.05.01.01.03.02.04.03-.03-.02-.06-.04-.09-.06-.13-.1-.27-.2-.4-.3-.05-.03-.1-.06-.14-.1-.08-.06-.17-.13-.24-.19V63.15c0-1.8.16-3.59.47-5.33l.14-.74-.01-.01c.24-1.17.55-2.32.91-3.43h.01Z" fill="#5B2C1E"/>
                <path d="M101.67 53.64c.37 1.12.67 2.26.9 3.42l.01.01c.38 1.9.57 3.87.57 5.86v49.29c-.18.14-.37.28-.56.42-.27.2-.54.39-.81.58-.13.09-.26.18-.39.27-.04.02-.07.05-.11.07-.09.06-.17.12-.27.18-.11.07-.22.15-.33.22-.07.04-.13.09-.2.13-.09.06-.18.12-.28.18-.05.03-.09.06-.14.09-.32.21-.64.41-.96.61-.09.06-.19.11-.28.17-.01.01-.02.01-.04.02-.08.05-.16.09-.24.14-.23.13-.46.27-.7.4-.04.03-.09.05-.14.07-.08.04-.16.08-.24.13-.57.32-1.15.63-1.74.92-.03.02-.06.03-.09.05-.06.03-.12.06-.17.08-.16.08-.31.15-.47.23-.08.04-.17.08-.26.11-.2.09-.39.18-.59.27-.15.07-.3.14-.46.2-.09.04-.18.08-.27.12-.01.01-.03.01-.04.02-.11.05-.23.1-.34.15-.04.02-.07.03-.1.04-.07.03-.14.07-.22.09-.29.12-.59.24-.88.35-.11.04-.22.09-.33.13-.16.06-.31.12-.47.18-.08.03-.16.06-.24.09-.07.03-.15.06-.22.07-.13.05-.27.1-.4.14-.09.04-.18.07-.27.09-.2.08-.41.14-.62.21-.2.07-.4.13-.6.19-.02.01-.05.02-.07.02-.18.06-.35.11-.53.16-.07.02-.14.04-.2.06h-.05c-.02.01-.04.01-.07.02-.08.02-.16.04-.24.07-.12.04-.25.07-.37.1-.04.01-.07.03-.1.03-.02.01-.05.02-.08.02-.43.12-.87.22-1.3.33-.03.01-.05.01-.08.02-.24.06-.47.11-.71.16-.23.05-.46.1-.7.15h-.01c-.02 0-.04.01-.06.01-.03 0-.06.01-.09.01-.2.04-.4.08-.6.11-.01 0-.03.01-.05.01-.2.04-.39.07-.59.1V80.53c0-12.19 7.55-22.84 18.92-26.89Z" fill="#5B2C1E"/>
                <path d="M115.89 52.79c.31.55.6 1.11.87 1.68.14.29.28.57.41.85.02.03.03.06.04.09.31.65.6 1.31.87 1.98.03.05.05.11.07.16.2.48.39.96.56 1.46.09.24.18.49.26.73.18.49.34.98.49 1.48.08.25.15.5.22.75.07.24.14.47.2.72.05.17.09.34.14.51.05.19.1.39.15.58.01.03.02.07.03.12.06.22.11.45.16.67.07.31.14.61.2.92.04.18.08.37.11.56.05.24.09.48.14.71.04.18.07.35.09.52.03.16.05.32.08.48.03.17.05.35.08.52.09.6.17 1.19.23 1.79.02.15.04.31.05.46.02.21.04.42.06.63.02.17.03.33.04.5.01.13.02.26.03.38.04.56.07 1.13.08 1.69h.01c.01.45.02.91.02 1.36 0 12.48-4.87 24.2-13.72 33.01-.59.58-1.19 1.16-1.82 1.71V62.93c0-2.18-.21-4.34-.62-6.43-.25-1.24-.57-2.49-.97-3.7 1.28-.32 2.58-.55 3.89-.68 1.01-.11 2.01-.16 2.99-.16h4.11l.46.83Z" fill="#5B2C1E"/>
                <path d="M38.71 51.97c.75 0 1.49.03 2.25.09l.77.07c1.32.14 2.63.37 3.9.69-.39 1.19-.72 2.42-.98 3.68-.45 2.17-.67 4.41-.67 6.66v46.67c-.62-.55-1.23-1.12-1.81-1.7C33.31 99.31 28.43 87.58 28.43 75.1c0-.45.01-.91.02-1.36.01-.56.04-1.13.08-1.69.01-.13.01-.26.03-.38.01-.17.02-.33.04-.5.02-.21.04-.42.06-.63.01-.17.03-.33.05-.5.06-.59.13-1.17.22-1.76.03-.18.05-.35.08-.52.03-.16.05-.32.08-.48.03-.18.06-.35.09-.53.04-.24.09-.48.14-.71.04-.18.07-.37.11-.56.07-.31.13-.61.2-.92.06-.24.11-.49.17-.73.06-.24.12-.49.19-.73.07-.24.13-.48.2-.73.07-.24.14-.49.21-.73.07-.24.15-.48.22-.71.05-.16.1-.31.15-.47.07-.21.14-.41.21-.62.04-.12.08-.24.12-.35.08-.24.17-.47.26-.71.35-.94.73-1.87 1.15-2.79.18-.41.37-.82.57-1.23.35-.73.73-1.45 1.12-2.16.08-.14.16-.28.24-.43l.13-.23h4.12Z" fill="#5B2C1E"/>
                <path d="M75 28.53c5.9 0 11.63 1.09 17.05 3.22l.24.12h.06c8.62 3.47 16.08 9.52 21.27 17.21h-2.3c-1.08 0-2.18.06-3.29.17-1.56.16-3.11.44-4.62.84-2.56-5.99-6.89-10.93-12.29-14l-.33-.19h-.02c-3.86-2.13-8.03-3.2-12.4-3.2h-6.53c-4.32 0-8.46 1.05-12.28 3.11-5.67 3.05-10.22 8.09-12.9 14.29-1.51-.4-3.07-.68-4.64-.84-1.11-.09-2.23-.14-3.3-.17h-.82-2.32c5.39-7.99 13.2-14.19 22.23-17.59 5.23-1.97 10.5-2.97 16.39-2.97Z" fill="#5B2C1E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M75 21.84c29.36 0 53.16 23.8 53.16 53.16 0 29.36-23.8 53.16-53.16 53.16-29.36 0-53.16-23.8-53.16-53.16 0-29.36 23.8-53.17 53.16-53.16Zm0 3.8c-5.99 0-11.85 1.06-17.41 3.15-10.19 3.84-18.92 11.03-24.66 20.29-.15.23-.29.47-.43.71C27.95 57.41 25.54 66.17 25.53 75.1c0 13.25 5.18 25.71 14.58 35.07 1.44 1.44 3 2.8 4.61 4.04 6.91 5.37 15.15 8.81 23.8 9.94l1.64.21V80.53c0-13.39-8.26-25.08-20.72-29.58 2.44-5.47 6.48-9.92 11.49-12.61 3.4-1.83 7.07-2.76 10.91-2.76h6.53c3.99 0 7.79 1.01 11.3 3l.33.19h.01c4.62 2.72 8.35 6.99 10.63 12.16-12.49 4.48-20.77 16.18-20.77 29.59v43.83l1.63-.22c7.68-1 15.02-3.82 21.41-8.19.36-.24.72-.49 1.06-.75.44-.32.88-.65 1.31-.98 1.62-1.27 3.18-2.63 4.61-4.05 9.4-9.36 14.58-21.81 14.58-35.07 0-8.94-2.41-17.69-6.97-25.32-.14-.24-.28-.47-.43-.71-5.58-9-14.01-16.09-23.87-19.99l-.24-.12h-.06c-5.69-2.21-11.88-3.33-17.88-3.33Z" fill="#5B2C1E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M75 0c41.36 0 75 33.65 75 75s-33.65 75-75 75S0 116.36 0 75 33.65 0 75 0Zm0 2.28C34.84 2.28 2.28 34.84 2.28 75c0 40.16 32.56 72.72 72.72 72.72s72.72-32.56 72.72-72.72S115.16 2.28 75 2.28Z" fill="#5B2C1E"/>
              </g>
            </svg>
          </div>
        </div>

        {/* Cards grid — 3 columns: tall left card, 2x2 middle/right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Column 1: Tall card with image spanning 2 rows */}
          <div className="bg-[#e8ddd3] rounded-2xl overflow-hidden md:row-span-2 flex flex-col">
            {/* Image fills most of the card */}
            <div className="relative flex-1 min-h-[280px]">
              <Image
                src="/images/diferencial.webp"
                alt="Consultora especializada"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Text at the bottom */}
            <div className="p-6">
              <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-3">
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
