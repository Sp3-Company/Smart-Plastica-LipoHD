"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PROCEDURES } from "@/lib/constants"

type Tab = "mulher" | "homem"

export function Procedures() {
  const [activeTab, setActiveTab] = useState<Tab>("mulher")
  const scrollRef = useRef<HTMLDivElement>(null)

  const womenProcedures = [...PROCEDURES.women, ...PROCEDURES.facial]
  const menProcedures = PROCEDURES.men

  const currentProcedures =
    activeTab === "mulher" ? womenProcedures : menProcedures

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return
    const amount = 304 // card width (280) + gap (24)
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            PROCEDIMENTOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 mb-4">
            PROCEDIMENTOS QUE TRANSFORMAM VIDAS
          </h2>
          <p className="text-brand-neutral-warm text-lg leading-relaxed">
            Cada procedimento é realizado com técnica, segurança e um olhar
            atento à naturalidade dos resultados.
          </p>
        </div>

        {/* Tabs — pill style */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("mulher")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              activeTab === "mulher"
                ? "bg-brand-dark text-white"
                : "text-brand-dark hover:bg-brand-beige/60"
            }`}
          >
            Mulher
          </button>
          <button
            onClick={() => setActiveTab("homem")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              activeTab === "homem"
                ? "bg-brand-dark text-white"
                : "text-brand-dark hover:bg-brand-beige/60"
            }`}
          >
            Homem
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {currentProcedures.map((proc) => (
              <div
                key={proc.slug}
                className="w-[280px] flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-beige hover:border-brand-primary transition-colors"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={proc.image}
                    alt={proc.name}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-brand-dark mb-1.5">
                    {proc.name}
                  </h3>
                  <p className="text-sm text-brand-neutral leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-warm transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Próximo"
              className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-warm transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/procedimentos"
            className="inline-block border-2 border-brand-primary text-brand-primary rounded-full px-8 py-3 font-semibold hover:bg-brand-primary hover:text-white transition-colors"
          >
            Ver todos os procedimentos
          </Link>
        </div>
      </div>
    </section>
  )
}
