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
          {/* Stat 1 */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/selo-realizando-sonhos-light.svg"
              alt="Smart Plástica - Realizando Sonhos"
              width={80}
              height={80}
            />
            <p className="font-display text-2xl md:text-3xl text-[#f0eae1] font-semibold">
              + 5 anos
            </p>
            <p className="text-[#f0eae1]/70 text-sm">realizando sonhos</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/selo-smart-lovers-light.svg"
              alt="Smart Lovers"
              width={80}
              height={80}
            />
            <p className="font-display text-2xl md:text-3xl text-[#f0eae1] font-semibold">
              + de 2.000
            </p>
            <p className="text-[#f0eae1]/70 text-sm">Smart Lovers</p>
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
