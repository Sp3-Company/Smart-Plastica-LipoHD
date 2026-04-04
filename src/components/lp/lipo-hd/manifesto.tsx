import { HalfArch } from "./brand-graphics"

export function Manifesto() {
  return (
    <section className="relative py-20 md:py-32 bg-brand-dark text-white overflow-hidden">
      {/* Grafismos de portal nas laterais */}
      <HalfArch className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-96 text-brand-light/20 pointer-events-none" />
      <HalfArch className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-96 text-brand-light/20 pointer-events-none scale-x-[-1]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div data-reveal>
          <span className="text-brand-light uppercase text-xs md:text-sm font-semibold tracking-[0.25em] mb-6 inline-block">
            MANIFESTO
          </span>
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight italic mb-8">
            &ldquo;Você não nasceu para se esconder.
            <br className="hidden sm:block" /> Você nasceu para{" "}
            <span className="text-brand-light not-italic">se reconhecer</span>.&rdquo;
          </blockquote>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Acreditamos que beleza também é saúde emocional. Quando a autoestima muda,
            muda a forma de andar na rua, de amar, de escolher, de dizer sim e não.
            Confiança muda tudo.
          </p>
        </div>
      </div>
    </section>
  )
}
