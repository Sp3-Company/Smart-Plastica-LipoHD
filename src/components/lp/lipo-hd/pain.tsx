import { SectionBridge } from "./brand-graphics"

export function Pain() {
  const points = [
    {
      title: "Exercício não esculpe contorno",
      text: "Treino define músculo, mas não remove gordura localizada nem desenha a silhueta abaixo da pele.",
    },
    {
      title: "Genética dita onde você acumula",
      text: "Abdômen, flanco, costas, culote — a gordura teima em ficar justamente onde incomoda mais.",
    },
    {
      title: "Dieta restritiva esgota e não resolve",
      text: "Você emagrece o corpo inteiro, menos a área que realmente queria mudar.",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-brand-white">
      <div className="max-w-5xl mx-auto px-4">
        <div data-reveal className="text-center mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            SE VOCÊ ESTÁ AQUI, JÁ TENTOU DE TUDO
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight max-w-3xl mx-auto">
            SEU ESPELHO FALA UMA COISA.
            <br />
            SUA ROTINA, OUTRA.
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
            Você treina 4, 5 vezes por semana. Cuida da alimentação. Acompanha profissionais.
            E, ainda assim, aquela gordurinha localizada simplesmente não vai embora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              data-reveal-delay={i + 1}
              className="border-l-2 border-brand-primary pl-5 py-2"
            >
              <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-2">{p.title}</h3>
              <p className="text-brand-dark/75 text-sm md:text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p data-reveal className="text-center mt-14 font-display text-2xl md:text-3xl text-brand-dark italic">
          Esse incômodo tem técnica. E ela tem nome: <span className="text-brand-primary not-italic font-semibold">Lipo HD.</span>
        </p>
      </div>
      <SectionBridge align="center" size="md" />
    </section>
  )
}
