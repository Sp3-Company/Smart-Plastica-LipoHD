export function Manifesto() {
  return (
    <section className="relative py-16 md:py-24 bg-brand-dark overflow-hidden">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-light to-brand-primary" />
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-brand-light/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-10">
          ACREDITAMOS QUE BELEZA TAMBEM E SAUDE EMOCIONAL
        </h2>

        <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed">
          <p>
            Autoestima muda tudo. Muda a forma como voce se olha no espelho,
            como entra numa sala, como se apresenta ao mundo. A cirurgia
            plastica, quando feita com responsabilidade e tecnica, nao e sobre
            vaidade -- e sobre reconexao. E sobre olhar para si mesma e se
            reconhecer.
          </p>
          <p>
            Na Smart Plastica, acreditamos que cada mulher merece ter acesso a
            esse caminho com seguranca, acolhimento e transparencia. Nao
            vendemos procedimentos: guiamos transformacoes. E estamos aqui para
            caminhar ao seu lado, do sonho a realizacao.
          </p>
        </div>
      </div>
    </section>
  )
}
