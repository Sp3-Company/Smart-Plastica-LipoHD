import { SITE, CONTACT } from "@/lib/constants"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Política de Cookies",
  description:
    "Política de Cookies da Smart Plástica. Saiba quais cookies utilizamos, para que servem e como você pode gerenciá-los.",
  path: "/politica-de-cookies",
})

export default function PoliticaDeCookiesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-dark">
            POLÍTICA DE COOKIES
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
                Esta Política de Cookies explica o que são cookies, quais tipos
                utilizamos no site {SITE.domain} e como você pode gerenciá-los.
                Ao continuar navegando em nosso site, você concorda com o uso de
                cookies conforme descrito nesta política.
              </p>
            </div>

            {/* 1. O que são cookies */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                1. O que são cookies
              </h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu
                dispositivo (computador, tablet ou smartphone) quando você visita
                um site. Eles permitem que o site reconheça seu dispositivo em
                visitas futuras, melhore sua experiência de navegação e forneça
                informações ao proprietário do site.
              </p>
            </div>

            {/* 2. Tipos de cookies utilizados */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                2. Tipos de cookies utilizados
              </h2>

              <div className="space-y-6 mt-6">
                <div className="rounded-2xl border border-brand-beige p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">
                    Cookies necessários
                  </h3>
                  <p>
                    Essenciais para o funcionamento básico do site. Sem eles,
                    algumas funcionalidades podem não funcionar corretamente.
                    Estes cookies não coletam informações pessoais identificáveis.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-beige p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">
                    Cookies funcionais
                  </h3>
                  <p>
                    Permitem que o site lembre suas preferências e escolhas (como
                    idioma ou região), proporcionando uma experiência mais
                    personalizada.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-beige p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">
                    Cookies analíticos
                  </h3>
                  <p>
                    Coletam informações sobre como os visitantes utilizam o site,
                    como páginas mais acessadas e mensagens de erro. Esses dados
                    são utilizados exclusivamente para melhorar o desempenho e a
                    experiência do usuário.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-beige p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">
                    Cookies de publicidade
                  </h3>
                  <p>
                    Utilizados para exibir anúncios relevantes com base no seu
                    perfil de navegação. Também podem ser usados para limitar o
                    número de vezes que você vê um anúncio e ajudar a medir a
                    eficácia de campanhas publicitárias.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Como gerenciar cookies */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                3. Como gerenciar cookies
              </h2>
              <p className="mb-3">
                Você pode gerenciar ou desativar cookies a qualquer momento por
                meio das configurações do seu navegador. Abaixo, você encontra
                instruções para os navegadores mais utilizados:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Google Chrome:</strong> Configurações &gt;
                  Privacidade e segurança &gt; Cookies
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Configurações &gt;
                  Privacidade e Segurança &gt; Cookies e dados do site
                </li>
                <li>
                  <strong>Safari:</strong> Preferências &gt; Privacidade &gt;
                  Gerenciar dados do site
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Configurações &gt;
                  Privacidade, pesquisa e serviços &gt; Cookies
                </li>
              </ul>
              <p className="mt-3">
                Importante: a desativação de cookies pode afetar a
                funcionalidade de algumas áreas do nosso site.
              </p>
            </div>

            {/* 4. Cookies de terceiros */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                4. Cookies de terceiros
              </h2>
              <p className="mb-3">
                Nosso site pode utilizar cookies de serviços de terceiros,
                incluindo:
              </p>

              <div className="space-y-4 mt-4">
                <div className="rounded-2xl border border-brand-beige p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">
                    Google Analytics
                  </h3>
                  <p>
                    Utilizado para analisar o tráfego do site, entender o
                    comportamento dos usuários e melhorar nossos serviços. Os
                    dados coletados são anonimizados e utilizados apenas para
                    fins estatísticos.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-beige p-6">
                  <h3 className="font-semibold text-brand-dark mb-2">
                    Meta Pixel (Facebook / Instagram)
                  </h3>
                  <p>
                    Utilizado para medir a eficácia de campanhas publicitárias,
                    otimizar anúncios e criar públicos personalizados para
                    remarketing. Os dados coletados são processados pela Meta
                    Platforms, Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Alterações nesta política */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                5. Alterações nesta política
              </h2>
              <p>
                Podemos atualizar esta Política de Cookies periodicamente para
                refletir mudanças nas tecnologias utilizadas ou na legislação
                aplicável. A data da última atualização será sempre indicada no
                topo desta página.
              </p>
            </div>

            {/* 6. Contato */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-dark mb-4">
                6. Contato
              </h2>
              <p>
                Para dúvidas sobre esta Política de Cookies, entre em contato
                conosco:
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
