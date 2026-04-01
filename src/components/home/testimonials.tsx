import { TESTIMONIALS, CONTACT } from "@/lib/constants"

export function Testimonials() {
  const visibleTestimonials = TESTIMONIALS.filter((t) => t.text)

  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            DEPOIMENTOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-4">
            O QUE DIZEM NOSSAS SMART LOVERS
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              {/* Quote mark */}
              <div className="text-brand-light text-5xl font-display leading-none mb-4">
                &ldquo;
              </div>

              <p className="text-brand-dark/80 leading-relaxed mb-6">
                {testimonial.text}
              </p>

              <div className="border-t border-brand-beige pt-4">
                <p className="font-semibold text-brand-dark">
                  {testimonial.name}
                </p>
                {testimonial.procedure && (
                  <p className="text-brand-neutral text-sm">
                    {testimonial.procedure}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Badge + CTA */}
        <div className="text-center mt-12 space-y-6">
          <div className="inline-block bg-brand-primary/10 rounded-full px-6 py-2">
            <span className="font-display text-xl text-brand-primary font-semibold">
              + de 2000 SmartLovers
            </span>
          </div>

          <div>
            <a
              href={CONTACT.whatsappDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary text-white rounded-full px-8 py-3 font-semibold hover:bg-brand-warm transition-colors"
            >
              Ver mais depoimentos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
