import Image from "next/image"
import Link from "next/link"

const BLOG_POSTS = [
  {
    image: "/images/blog-01.webp",
    category: "AUTOESTIMA E SAÚDE",
    title:
      "Cirurgia plástica e autoestima: o que a ciência diz sobre essa relação",
    slug: "cirurgia-plastica-e-autoestima",
  },
  {
    image: "/images/blog-02.webp",
    category: "DICAS DE PÓS-OPERATÓRIO",
    title:
      "Pós-operatório de cirurgia plástica: 10 cuidados essenciais para uma recuperação segura",
    slug: "pos-operatorio-cuidados-essenciais",
  },
  {
    image: "/images/blog-03.webp",
    category: "PROCEDIMENTOS CORPORAIS",
    title:
      "Abdominoplastia: tudo o que você precisa saber antes de decidir",
    slug: "abdominoplastia-guia-completo",
  },
]

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            BLOG
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3">
            ÚLTIMAS NOTÍCIAS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-beige hover:border-brand-primary transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-brand-primary uppercase text-xs font-semibold tracking-widest">
                  {post.category}
                </span>
                <h3 className="font-display text-xl text-brand-dark mt-2 leading-snug">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block border-2 border-brand-primary text-brand-primary rounded-full px-8 py-3 font-semibold hover:bg-brand-primary hover:text-white transition-colors"
          >
            Ver outras notícias
          </Link>
        </div>
      </div>
    </section>
  )
}
