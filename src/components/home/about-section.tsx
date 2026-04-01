import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              QUEM SOMOS
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-8">
              A SMART PLÁSTICA
            </h2>

            <div className="space-y-5 text-brand-dark/80 leading-relaxed">
              <p>
                A Smart Plástica é uma rede de cirurgia plástica que nasceu com
                um propósito claro: guiar mulheres na conquista da sua melhor
                versão com segurança, acolhimento e tecnologia. Atuamos em São
                Paulo conectando você ao cirurgião ideal para o seu caso.
              </p>
              <p>
                Nossas consultoras especializadas estão ao seu lado desde a
                primeira conversa. Elas entendem suas necessidades, tiram
                dúvidas, orientam sobre procedimentos e acompanham cada etapa da
                sua jornada -- da videochamada gratuita ao pós-operatório
                completo.
              </p>
              <p>
                Todos os cirurgiões da nossa rede são certificados pela
                Sociedade Brasileira de Cirurgia Plástica (SBCP), garantindo
                técnica, ética e resultados naturais. As cirurgias são
                realizadas em hospitais de referência em São Paulo, com
                infraestrutura completa e equipe multidisciplinar.
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
                <p className="text-brand-neutral text-sm mt-1">Smart Lovers</p>
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
          <div className="relative aspect-[3/4] max-h-[550px] rounded-2xl overflow-hidden">
            <Image
              src="/images/quem-somos.webp"
              alt="Equipe Smart Plástica São Paulo"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
