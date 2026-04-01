import Link from "next/link"
import { SITE, CONTACT } from "@/lib/constants"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Termos de Uso",
  description:
    "Termos de Uso do site da Smart Plástica. Condições gerais de uso, propriedade intelectual, limitação de responsabilidade e legislação aplicável.",
  path: "/termos-de-uso",
})

export default function TermosDeUsoPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-dark">
            TERMOS DE USO
          </h1>
          <p className="mt-4 text-brand-neutral-warm">
            Última atualização: Março de 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-12 text-brand-dark/80 leading-relaxed">
            {/* 1. Aceitação dos termos */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                1. Aceitação dos termos
              </h2>
              <p>
                Ao acessar e utilizar o site {SITE.domain} (&quot;Site&quot;),
                você declara que leu, compreendeu e concorda com estes Termos de
                Uso. Caso não concorde com alguma das disposições aqui
                apresentadas, solicitamos que não utilize o Site.
              </p>
            </div>

            {/* 2. Uso do site */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                2. Uso do site
              </h2>
              <p className="mb-3">
                O conteúdo disponibilizado neste Site tem caráter informativo e
                educativo. As informações sobre procedimentos cirúrgicos,
                tratamentos estéticos e orientações de saúde{" "}
                <strong>
                  não substituem a consulta médica profissional
                </strong>
                .
              </p>
              <p className="mb-3">
                Nenhuma informação apresentada neste Site deve ser interpretada
                como diagnóstico, prescrição ou recomendação médica. Cada caso é
                único e requer avaliação individualizada por um profissional
                qualificado.
              </p>
              <p>
                Você se compromete a utilizar o Site de forma ética, respeitando
                a legislação vigente e os direitos de terceiros.
              </p>
            </div>

            {/* 3. Propriedade intelectual */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                3. Propriedade intelectual
              </h2>
              <p className="mb-3">
                Todo o conteúdo deste Site, incluindo, mas não se limitando a
                textos, imagens, logotipos, ícones, vídeos, layout, design,
                código-fonte e a marca &quot;{SITE.name}&quot;, é protegido por
                leis de propriedade intelectual e direitos autorais.
              </p>
              <p>
                É proibida a reprodução, distribuição, modificação ou utilização
                de qualquer conteúdo deste Site sem autorização prévia e expressa
                da {SITE.name}.
              </p>
            </div>

            {/* 4. Limitação de responsabilidade */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                4. Limitação de responsabilidade
              </h2>
              <p className="mb-3">
                A {SITE.name} empenha-se para manter as informações do Site
                atualizadas e precisas, mas não garante que todo o conteúdo
                esteja livre de erros ou omissões.
              </p>
              <p className="mb-3">
                Não nos responsabilizamos por:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Decisões tomadas com base exclusivamente nas informações do
                  Site
                </li>
                <li>
                  Interrupções temporárias no acesso ao Site por questões
                  técnicas
                </li>
                <li>
                  Danos decorrentes do uso de links externos que possam estar
                  disponibilizados no Site
                </li>
                <li>
                  Resultados individuais de procedimentos, que variam de paciente
                  para paciente
                </li>
              </ul>
            </div>

            {/* 5. Agendamentos e consultas */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                5. Agendamentos e consultas
              </h2>
              <p className="mb-3">
                A videochamada com a consultora especializada oferecida pela{" "}
                {SITE.name} é gratuita e sem compromisso. Ela tem como objetivo
                esclarecer dúvidas e apresentar as opções disponíveis.
              </p>
              <p className="mb-3">
                A realização de qualquer procedimento cirúrgico ou estético está
                sujeita à avaliação médica presencial, que determinará a
                viabilidade, indicação e riscos associados, considerando as
                condições individuais de cada paciente.
              </p>
              <p>
                A {SITE.name} trabalha exclusivamente com cirurgiões certificados
                pela Sociedade Brasileira de Cirurgia Plástica (SBCP).
              </p>
            </div>

            {/* 6. Privacidade */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                6. Privacidade
              </h2>
              <p>
                O tratamento dos seus dados pessoais é regido pela nossa{" "}
                <Link
                  href="/politica-de-privacidade"
                  className="text-brand-primary hover:text-brand-warm underline transition-colors"
                >
                  Política de Privacidade
                </Link>
                , que detalha como coletamos, utilizamos e protegemos suas
                informações em conformidade com a LGPD.
              </p>
            </div>

            {/* 7. Alterações nos termos */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                7. Alterações nos termos
              </h2>
              <p>
                A {SITE.name} reserva-se o direito de alterar estes Termos de
                Uso a qualquer momento, sem aviso prévio. As alterações entram em
                vigor imediatamente após sua publicação no Site. Recomendamos que
                você revise esta página periodicamente.
              </p>
            </div>

            {/* 8. Legislação aplicável */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                8. Legislação aplicável
              </h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República
                Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo,
                Estado de São Paulo, para dirimir quaisquer controvérsias
                decorrentes destes Termos, com renúncia a qualquer outro, por
                mais privilegiado que seja.
              </p>
            </div>

            {/* 9. Contato */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                9. Contato
              </h2>
              <p>
                Para dúvidas ou solicitações relacionadas a estes Termos de Uso,
                entre em contato conosco:
              </p>
              <div className="mt-4 rounded-2xl border border-brand-beige bg-brand-gray/30 p-6">
                <p>
                  <strong>{SITE.name}</strong>
                </p>
                <p>
                  E-mail:{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-brand-primary hover:text-brand-warm underline transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </p>
                <p>Telefone: {CONTACT.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
