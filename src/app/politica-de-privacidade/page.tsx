import Link from "next/link"
import { SITE, CONTACT } from "@/lib/constants"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Smart Plástica. Saiba como coletamos, utilizamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  path: "/politica-de-privacidade",
})

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-dark">
            POLÍTICA DE PRIVACIDADE
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
            {/* Intro */}
            <div>
              <p>
                A {SITE.name} ({SITE.domain}) valoriza a privacidade de seus
                usuários e pacientes. Esta Política de Privacidade descreve como
                coletamos, utilizamos, armazenamos e protegemos suas informações
                pessoais, em conformidade com a Lei Geral de Proteção de Dados
                (LGPD — Lei nº 13.709/2018).
              </p>
            </div>

            {/* 1. Informações que coletamos */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                1. Informações que coletamos
              </h2>

              <h3 className="font-semibold text-brand-dark mb-2 mt-6">
                Dados pessoais
              </h3>
              <p className="mb-3">
                Podemos coletar os seguintes dados pessoais quando você interage
                conosco:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone / WhatsApp</li>
                <li>Informações sobre o procedimento de interesse</li>
                <li>Mensagens enviadas por formulários de contato</li>
              </ul>

              <h3 className="font-semibold text-brand-dark mb-2 mt-6">
                Dados de navegação
              </h3>
              <p className="mb-3">
                Coletamos automaticamente informações técnicas durante sua
                navegação:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Origem do acesso (referrer)</li>
                <li>Dados de cookies e tecnologias semelhantes</li>
              </ul>
            </div>

            {/* 2. Como utilizamos suas informações */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                2. Como utilizamos suas informações
              </h2>
              <p className="mb-3">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Agendamento:</strong> Entrar em contato para agendar
                  videochamadas, consultas e procedimentos
                </li>
                <li>
                  <strong>Comunicação:</strong> Enviar informações sobre sua
                  jornada, atualizações e orientações relevantes
                </li>
                <li>
                  <strong>Melhoria dos serviços:</strong> Analisar dados de
                  navegação para aprimorar a experiência no site e personalizar
                  conteúdos
                </li>
                <li>
                  <strong>Marketing:</strong> Enviar comunicações promocionais,
                  mediante consentimento prévio
                </li>
                <li>
                  <strong>Obrigações legais:</strong> Cumprir exigências legais e
                  regulatórias aplicáveis
                </li>
              </ul>
            </div>

            {/* 3. Compartilhamento de dados */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                3. Compartilhamento de dados
              </h2>
              <p className="mb-3">
                Seus dados pessoais podem ser compartilhados com:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Parceiros médicos:</strong> Cirurgiões e profissionais
                  de saúde envolvidos no seu atendimento
                </li>
                <li>
                  <strong>Prestadores de serviço:</strong> Plataformas de
                  hospedagem, ferramentas de análise e serviços de comunicação
                  que auxiliam nossas operações
                </li>
                <li>
                  <strong>Obrigações legais:</strong> Autoridades competentes,
                  quando exigido por lei ou ordem judicial
                </li>
              </ul>
              <p className="mt-3">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com
                terceiros para fins comerciais não relacionados aos nossos
                serviços.
              </p>
            </div>

            {/* 4. Cookies e tecnologias semelhantes */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                4. Cookies e tecnologias semelhantes
              </h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua
                experiência de navegação, analisar o tráfego do site e
                personalizar conteúdos. Para mais informações sobre os cookies
                que utilizamos e como gerenciá-los, consulte nossa{" "}
                <Link
                  href="/politica-de-cookies"
                  className="text-brand-primary hover:text-brand-warm underline transition-colors"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </div>

            {/* 5. Segurança dos dados */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                5. Segurança dos dados
              </h2>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger seus dados pessoais contra acesso não autorizado,
                alteração, divulgação ou destruição. Entre as medidas adotadas
                estão:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-3">
                <li>Criptografia de dados em trânsito (SSL/TLS)</li>
                <li>Controle de acesso restrito a informações sensíveis</li>
                <li>
                  Monitoramento contínuo de nossas plataformas e sistemas
                </li>
              </ul>
            </div>

            {/* 6. Seus direitos (LGPD) */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                6. Seus direitos (LGPD)
              </h2>
              <p className="mb-3">
                Em conformidade com a LGPD, você tem os seguintes direitos em
                relação aos seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Acesso:</strong> Solicitar informações sobre quais
                  dados pessoais temos sobre você
                </li>
                <li>
                  <strong>Correção:</strong> Solicitar a correção de dados
                  incompletos, inexatos ou desatualizados
                </li>
                <li>
                  <strong>Eliminação:</strong> Solicitar a exclusão dos seus
                  dados pessoais, exceto quando houver obrigação legal de
                  retenção
                </li>
                <li>
                  <strong>Portabilidade:</strong> Solicitar a transferência dos
                  seus dados a outro fornecedor de serviço
                </li>
                <li>
                  <strong>Revogação do consentimento:</strong> Revogar o
                  consentimento para tratamento de dados a qualquer momento
                </li>
                <li>
                  <strong>Informação sobre compartilhamento:</strong> Saber com
                  quais entidades seus dados foram compartilhados
                </li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer um desses direitos, entre em contato
                conosco pelo e-mail indicado na seção de Contato abaixo.
              </p>
            </div>

            {/* 7. Retenção de dados */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                7. Retenção de dados
              </h2>
              <p>
                Seus dados pessoais serão mantidos pelo tempo necessário para
                cumprir as finalidades para as quais foram coletados, incluindo
                obrigações legais, contratuais e regulatórias. Dados relacionados
                a procedimentos médicos podem ser retidos pelo prazo exigido pela
                legislação de saúde vigente.
              </p>
            </div>

            {/* 8. Alterações nesta política */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                8. Alterações nesta política
              </h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. A
                data da última atualização será sempre indicada no topo desta
                página. Recomendamos que você revise esta página regularmente
                para se manter informado sobre nossas práticas de privacidade.
              </p>
            </div>

            {/* 9. Contato */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                9. Contato
              </h2>
              <p>
                Para dúvidas, solicitações ou exercício dos seus direitos
                relacionados a esta Política de Privacidade, entre em contato com
                nosso Encarregado de Dados (DPO):
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
