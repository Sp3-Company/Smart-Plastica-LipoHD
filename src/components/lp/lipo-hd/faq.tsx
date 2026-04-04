import { CONTACT } from "@/lib/constants"

const FAQ_LIPO_HD = [
  {
    q: "Dói muito? Como é o pós-operatório?",
    a: "Nas primeiras 48–72h você sente um desconforto parecido com dor muscular intensa pós-treino, controlado com medicação. A partir da primeira semana, a maioria das pacientes retoma atividades leves. O segredo é seguir o protocolo de drenagens e cinta à risca.",
  },
  {
    q: "Em quantos dias eu volto à minha rotina?",
    a: "Rotina leve (home office, atividades domésticas): entre 7 e 14 dias. Academia e exercícios de maior impacto: após 30–45 dias, com liberação do cirurgião. Cada caso é avaliado individualmente nos retornos.",
  },
  {
    q: "Preciso usar cinta? Por quanto tempo?",
    a: "Sim, o uso da cinta pós-operatória é obrigatório — normalmente por 30 a 60 dias, em tempo integral nas primeiras semanas. A cinta molda o resultado e acelera a recuperação. Nosso protocolo explica cada fase.",
  },
  {
    q: "Se eu engordar depois, perco o resultado?",
    a: "A Lipo HD remove células de gordura da região tratada — elas não voltam. Porém, ganho de peso significativo pode deformar o contorno alcançado, já que o restante do corpo continua acumulando normalmente. Manter hábitos saudáveis preserva o resultado por anos.",
  },
  {
    q: "Ficam marcas ou cicatrizes?",
    a: "As incisões são mínimas (de 3 a 5 mm) e feitas em pontos estratégicos que cicatrizam de forma discreta. Com o protocolo de cuidados certo, as marcas se tornam praticamente imperceptíveis ao longo dos meses.",
  },
  {
    q: "Qualquer mulher pode fazer Lipo HD?",
    a: "Não — é preciso uma consulta individual. De forma geral, indicamos para mulheres com IMC adequado, boa saúde, que já tenham uma rotina de cuidados corporais e querem definição, não apenas redução de peso. A consulta presencial define com precisão.",
  },
  {
    q: "Qual o investimento? Tem parcelamento?",
    a: "O valor varia conforme áreas tratadas, complexidade e hospital. Nossa consultora apresenta todas as condições de parcelamento na sua consulta gratuita — sempre com clareza total, sem letras miúdas.",
  },
  {
    q: "Como funciona a primeira conversa com a consultora?",
    a: "É uma videochamada de 30 minutos, sem compromisso. É o momento de tirar dúvidas, entender o processo, conhecer as condições e decidir com calma se faz sentido seguir adiante.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div data-reveal className="text-center mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            FAQ · LIPO HD
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            AS DÚVIDAS QUE TODAS TÊM
          </h2>
        </div>

        <div data-reveal data-reveal-delay="1" className="space-y-0">
          {FAQ_LIPO_HD.map((item, i) => (
            <details
              key={i}
              className="group border-b border-brand-beige [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer py-5 text-left">
                <span className="font-semibold text-brand-dark pr-4">{item.q}</span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center text-brand-primary transition-transform group-open:rotate-45">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <div className="pb-5 text-brand-dark/75 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="text-center mt-14 space-y-4">
          <p className="text-brand-dark/75">
            Ainda tem dúvida? Fale direto com a consultora.
          </p>
          <a
            href={CONTACT.whatsappDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-6 pr-2 py-2.5 text-sm md:text-base font-medium hover:bg-brand-warm transition group"
          >
            Tirar minha dúvida no WhatsApp
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
