import Image from "next/image"
import Link from "next/link"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Conteúdos sobre cirurgia plástica, autoestima e cuidados para sua jornada. Blog da Smart Plástica São Paulo.",
  path: "/blog",
})

const BLOG_POSTS = [
  {
    image: "/images/blog-01.webp",
    category: "AUTOESTIMA E SAÚDE",
    title:
      "Cirurgia plástica e autoestima: o que a ciência diz sobre essa relação",
    excerpt:
      "Descubra como a cirurgia plástica pode impactar positivamente a autoestima e o bem-estar emocional.",
    slug: "cirurgia-plastica-e-autoestima",
  },
  {
    image: "/images/blog-02.webp",
    category: "DICAS DE PÓS-OPERATÓRIO",
    title:
      "Pós-operatório de cirurgia plástica: 10 cuidados essenciais para uma recuperação segura",
    excerpt:
      "Conheça os cuidados fundamentais para garantir uma recuperação tranquila e resultados duradouros.",
    slug: "pos-operatorio-cuidados-essenciais",
  },
  {
    image: "/images/blog-03.webp",
    category: "PROCEDIMENTOS CORPORAIS",
    title:
      "Abdominoplastia: tudo o que você precisa saber antes de decidir",
    excerpt:
      "Entenda como funciona a abdominoplastia, indicações, recuperação e o que esperar do procedimento.",
    slug: "abdominoplastia-guia-completo",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-tight">
            BLOG
          </h1>
          <p className="text-brand-neutral-warm text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            Conteúdos sobre cirurgia plástica, autoestima e cuidados para sua
            jornada.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-beige hover:border-brand-primary hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <span className="inline-block bg-brand-beige text-brand-dark text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>

                  <h2 className="font-display text-xl md:text-2xl text-brand-dark mt-4 mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-brand-neutral-warm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="inline-block text-brand-primary font-semibold hover:text-brand-warm transition-colors"
                  >
                    Leia mais &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
