import Image from "next/image"

export function Dobra() {
  return (
    <section className="relative py-12 md:py-16">
      {/* Background image */}
      <Image
        src="/images/dobra.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-brand-dark/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {/* Stat 1 — 5 anos */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/selo-5anos.png"
              alt="+ 5 anos realizando sonhos"
              width={150}
              height={150}
              className="mb-1"
            />
          </div>

          {/* Stat 2 — 2000 Smart Lovers */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/selo-2000.png"
              alt="+ de 2.000 Smart Lovers"
              width={150}
              height={150}
              className="mb-1"
            />
          </div>

          {/* SBCP */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#f0eae1]/70 text-sm">
              Todos os cirurgiões certificados pela:
            </p>
            <Image
              src="/images/sbcp.webp"
              alt="Sociedade Brasileira de Cirurgia Plástica"
              width={160}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
