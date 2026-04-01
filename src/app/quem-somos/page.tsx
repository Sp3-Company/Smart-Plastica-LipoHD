import type { Metadata } from "next"
import Image from "next/image"
import { SITE, CONTACT, ADDRESS } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Quem Somos | Smart Plastica Sao Paulo`,
  description:
    "Conheca a Smart Plastica. Ha mais de 5 anos guiando mulheres na conquista da sua melhor versao com tecnologia, seguranca e tecnica em Sao Paulo.",
  openGraph: {
    title: `Quem Somos | Smart Plastica Sao Paulo`,
    description:
      "Conheca a Smart Plastica. Ha mais de 5 anos guiando mulheres na conquista da sua melhor versao com tecnologia, seguranca e tecnica em Sao Paulo.",
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

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6">
            TORNAMOS POSSIVEL REALIZAR SONHOS
          </h1>
          <p className="text-brand-dark/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Guiamos mulheres na conquista da sua melhor versao com tecnologia,
            seguranca e tecnica. Ha mais de 5 anos realizando sonhos por meio de
            uma jornada completa, humana e responsavel em cirurgia plastica.
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
                NOSSA HISTORIA
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-8">
                NOSSA HISTORIA E PROPOSITO
              </h2>

              <div className="space-y-5 text-brand-dark/80 leading-relaxed">
                <p>
                  A Smart Plastica nasceu com um proposito claro. Tornar possivel
                  a realizacao de sonhos, guiando mulheres na conquista da sua
                  melhor versao com tecnologia, seguranca e tecnica, criando um
                  caminho confiavel para transformar o desejo em decisao.
                </p>
                <p>
                  Atuamos em Sao Paulo oferecendo uma jornada estruturada,
                  responsavel e acolhedora. Cada paciente e acolhida por uma
                  consultora especializada que entende seu momento, esclarece
                  duvidas e faz o match ideal com cirurgioes certificados pela
                  SBCP.
                </p>
                <p>
                  Do primeiro contato ao pos-operatorio, jornada clara,
                  organizada e segura. Ja sao mais de 2.000 Smart Lovers.
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
                    cirurgioes certificados
                  </p>
                </div>
              </div>

              {/* SBCP badge */}
              <div className="mt-8">
                <Image
                  src="/images/sbcp.webp"
                  alt="Certificado SBCP - Sociedade Brasileira de Cirurgia Plastica"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/quem-somos.webp"
                alt="Equipe Smart Plastica Sao Paulo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
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
              Somos a ponte entre o seu sonho e a realizacao dele, conectando
              voce com o medico ideal para o seu caso.
            </p>
          </div>

          {/* 3-column grid */}
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
        </div>
      </section>

      {/* Unidade section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              LOCALIZACAO
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-4">
              NOSSA UNIDADE
            </h2>
            <p className="text-brand-neutral-warm text-lg leading-relaxed">
              Nossas cirurgias sao realizadas em hospitais de referencia em Sao
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
                    Sao Paulo
                  </h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    {ADDRESS.full}
                  </p>
                  <p className="text-brand-neutral text-sm mt-2">
                    Moema — Sao Paulo, SP
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a
                  href={CONTACT.whatsappDefault}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white rounded-full px-8 py-3 font-semibold hover:bg-brand-warm transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar pelo WhatsApp
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
                title="Smart Plastica Sao Paulo - Mapa"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
