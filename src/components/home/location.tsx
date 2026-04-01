import { ADDRESS } from "@/lib/constants"

export function Location() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mb-3">
            ONDE ENCONTRAR A SMART PLÁSTICA
          </h2>
          <p className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            ATENDEMOS VOCÊ EM SÃO PAULO
          </p>
          <p className="text-brand-neutral-warm text-lg leading-relaxed mt-4">
            Nossas cirurgias são realizadas em hospitais de referência em São
            Paulo, com infraestrutura completa e equipe multidisciplinar
            preparada para garantir sua segurança e conforto.
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
  )
}
