import { FAQ_ITEMS, CONTACT } from "@/lib/constants"

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3">
            DÚVIDAS FREQUENTES
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group border-b border-brand-beige [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer py-5 text-left">
                <span className="font-semibold text-brand-dark pr-4">
                  {item.question}
                </span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center text-brand-primary transition-transform group-open:rotate-45">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </summary>
              <div className="pb-5 text-brand-neutral-warm leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-14 space-y-4">
          <p className="text-brand-neutral-warm">
            Não encontrou a resposta? Entre em contato pelo WhatsApp
          </p>
          <a
            href={CONTACT.whatsappDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-brand-warm transition group"
          >
            Falar com a consultora
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
