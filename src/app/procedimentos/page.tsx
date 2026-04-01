import Image from "next/image"
import { PROCEDURES, CONTACT } from "@/lib/constants"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Procedimentos",
  description:
    "Conheça os procedimentos de cirurgia plástica com segurança e resultados naturais. Cirurgiões certificados pela SBCP em São Paulo.",
  path: "/procedimentos",
})

function ProcedureCard({
  proc,
}: {
  proc: { name: string; slug: string; image: string; description: string }
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-brand-beige hover:border-brand-primary hover:shadow-md transition">
      <div className="relative aspect-[3/4]">
        <Image
          src={proc.image}
          alt={proc.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-8">
        <h4 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
          {proc.name}
        </h4>
        <p className="text-brand-neutral-warm leading-relaxed mb-6">
          {proc.description}
        </p>
        <a
          href={CONTACT.whatsappDefault}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-brand-primary font-semibold hover:text-brand-warm transition-colors"
        >
          Saiba mais &rarr;
        </a>
      </div>
    </div>
  )
}

export default function ProcedimentosPage() {
  const allWomenProcedures = PROCEDURES.women
  const allMenProcedures = PROCEDURES.men
  const allFacialProcedures = PROCEDURES.facial

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-tight max-w-5xl mx-auto">
            PROCEDIMENTOS DE CIRURGIA PLÁSTICA COM SEGURANÇA E RESULTADOS
            NATURAIS
          </h1>
          <p className="text-brand-neutral-warm text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            Cirurgiões certificados pela SBCP, tecnologia moderna e
            acompanhamento completo do pré ao pós-operatório.
          </p>
        </div>
      </section>

      {/* Body/Corporal Procedures */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-14">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              CORPO
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3">
              PROCEDIMENTOS CORPORAIS
            </h2>
          </div>

          {/* Women Procedures */}
          <div className="mb-10">
            <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-6">
              Femininos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allWomenProcedures.map((proc) => (
                <ProcedureCard key={proc.slug} proc={proc} />
              ))}
            </div>
          </div>

          {/* Men Procedures */}
          <div>
            <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-6">
              Masculinos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMenProcedures.map((proc) => (
                <ProcedureCard key={proc.slug} proc={proc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facial Procedures */}
      <section className="py-16 md:py-24 bg-brand-gray/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-14">
            <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
              FACE
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3">
              PROCEDIMENTOS FACIAIS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFacialProcedures.map((proc) => (
              <ProcedureCard key={proc.slug} proc={proc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mb-4">
            Não sabe qual procedimento é ideal para você?
          </h2>
          <p className="text-brand-neutral-warm text-lg leading-relaxed mb-10">
            Agende uma videochamada gratuita com nossa consultora especializada.
          </p>
          <a
            href={CONTACT.whatsappDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary text-white rounded-full px-8 py-3 font-semibold hover:bg-brand-warm transition-colors"
          >
            Falar com a Consultora
          </a>
        </div>
      </section>
    </>
  )
}
