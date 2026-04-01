import type { Metadata } from "next"
import Image from "next/image"
import { SITE, CONTACT, ADDRESS } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Quem Somos | Smart Plástica São Paulo`,
  description:
    "Conheça a Smart Plástica. Há mais de 5 anos guiando mulheres na conquista da sua melhor versão com tecnologia, segurança e técnica em São Paulo.",
  openGraph: {
    title: `Quem Somos | Smart Plástica São Paulo`,
    description:
      "Conheça a Smart Plástica. Há mais de 5 anos guiando mulheres na conquista da sua melhor versão com tecnologia, segurança e técnica em São Paulo.",
    url: `https://${SITE.domain}/quem-somos`,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
}

const DIFFERENTIALS = [
  {
    title: "Consultora especializada",
    description:
      "Desde a primeira conversa, uma consultora dedicada entende suas necessidades e guia cada passo da sua jornada com acolhimento e clareza.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  },
  {
    title: "Tecnologia a favor da sua beleza",
    description:
      "Utilizamos ferramentas modernas para planejamento cirúrgico, simulações e acompanhamento, trazendo mais previsibilidade ao seu resultado.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  },
  {
    title: "Segurança em toda a jornada",
    description:
      "Cirurgiões certificados pela SBCP, hospitais de referência e protocolos rigorosos para que você se sinta segura do início ao fim.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
  },
  {
    title: "O sonho precisa ser possível",
    description:
      "Acreditamos que realizar seu sonho não deve ser um sacrifício. Por isso, buscamos condições que tornem sua decisão viável e planejada.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
  },
  {
    title: "Você nunca caminha sozinha",
    description:
      "Do pré ao pós-operatório, nossa equipe está presente em cada momento, com retornos programados e suporte dedicado à sua recuperação.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    title: "Técnica que sustenta resultados",
    description:
      "Procedimentos realizados por especialistas que priorizam naturalidade, harmonia e resultados que se mantêm ao longo do tempo.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
  },
]

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6">
            TORNAMOS POSSÍVEL REALIZAR SONHOS
          </h1>
          <p className="text-brand-dark/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Guiamos mulheres na conquista da sua melhor versão com tecnologia,
            segurança e técnica. Há mais de 5 anos realizando sonhos por meio de
            uma jornada completa, humana e responsável em cirurgia plástica.
          </p>
        </div>
      </section>

      {/* Historia section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
                NOSSA HISTÓRIA
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-8">
                NOSSA HISTÓRIA E PROPÓSITO
              </h2>

              <div className="space-y-5 text-brand-dark/80 leading-relaxed">
                <p>
                  A Smart Plástica nasceu com um propósito claro. Tornar possível
                  a realização de sonhos, guiando mulheres na conquista da sua
                  melhor versão com tecnologia, segurança e técnica, criando um
                  caminho confiável para transformar o desejo em decisão.
                </p>
                <p>
                  Atuamos em São Paulo oferecendo uma jornada estruturada,
                  responsável e acolhedora. Cada paciente é acolhida por uma
                  consultora especializada que entende seu momento, esclarece
                  dúvidas e faz o match ideal com cirurgiões certificados pela
                  SBCP.
                </p>
                <p>
                  Do primeiro contato ao pós-operatório, jornada clara,
                  organizada e segura. Já são mais de 2.000 Smart Lovers.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-10">
                <div>
                  <p className="font-display text-3xl md:text-4xl text-brand-primary font-semibold">
                    + 5 anos
                  </p>
                  <p className="text-brand-neutral text-sm mt-1">
                    realizando sonhos
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl text-brand-primary font-semibold">
                    + de 2.000
                  </p>
                  <p className="text-brand-neutral text-sm mt-1">
                    Smart Lovers
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl text-brand-primary font-semibold">
                    SBCP
                  </p>
                  <p className="text-brand-neutral text-sm mt-1">
                    cirurgiões certificados
                  </p>
                </div>
              </div>

              {/* SBCP badge */}
              <div className="mt-8">
                <Image
                  src="/images/sbcp.webp"
                  alt="Certificado SBCP - Sociedade Brasileira de Cirurgia Plástica"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/quem-somos.webp"
                alt="Equipe Smart Plástica São Paulo"
                width={506}
                height={647}
                className="rounded-2xl w-full max-w-[420px] h-auto"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais section */}
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
              Somos a ponte entre o seu sonho e a realização dele, conectando
              você com o médico ideal para o seu caso.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((item) => (
              <div
                key={item.title}
                className="bg-[#e8ddd3] rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center mb-4">
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
        </div>
      </section>

      {/* Unidade section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              LOCALIZAÇÃO
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-4">
              NOSSA UNIDADE
            </h2>
            <p className="text-brand-neutral-warm text-lg leading-relaxed">
              Nossas cirurgias são realizadas em hospitais de referência em São
              Paulo, com infraestrutura completa e equipe multidisciplinar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Address card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-beige">
              <div className="flex items-start gap-4">
                {/* Pin icon */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1">
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
                  <h3 className="font-display text-2xl text-brand-dark mb-2">
                    São Paulo
                  </h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    {ADDRESS.full}
                  </p>
                  <p className="text-brand-neutral text-sm mt-2">
                    Moema — São Paulo, SP
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a
                  href={CONTACT.whatsappDefault}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-brand-warm transition group"
                >
                  Falar pelo WhatsApp
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-brand-beige h-[300px] lg:h-[350px]">
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
      </section>
    </>
  )
}
