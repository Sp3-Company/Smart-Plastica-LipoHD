"use client"

import { useState } from "react"
import Link from "next/link"
import { PROCEDURES, CONTACT } from "@/lib/constants"

type Tab = "mulher" | "homem"

export function Procedures() {
  const [activeTab, setActiveTab] = useState<Tab>("mulher")

  const womenProcedures = [...PROCEDURES.women, ...PROCEDURES.facial]
  const menProcedures = PROCEDURES.men

  const currentProcedures =
    activeTab === "mulher" ? womenProcedures : menProcedures

  return (
    <section className="py-16 md:py-24 bg-brand-gray/30">
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
            Cada procedimento e realizado com tecnica, seguranca e um olhar
            atento a naturalidade dos resultados.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-10">
          <button
            onClick={() => setActiveTab("mulher")}
            className={`pb-2 text-lg font-semibold border-b-2 transition-colors ${
              activeTab === "mulher"
                ? "border-brand-primary text-brand-primary"
                : "border-transparent text-brand-neutral hover:text-brand-dark"
            }`}
          >
            Mulher
          </button>
          <button
            onClick={() => setActiveTab("homem")}
            className={`pb-2 text-lg font-semibold border-b-2 transition-colors ${
              activeTab === "homem"
                ? "border-brand-primary text-brand-primary"
                : "border-transparent text-brand-neutral hover:text-brand-dark"
            }`}
          >
            Homem
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProcedures.map((proc) => (
            <div
              key={proc.slug}
              className="bg-white rounded-2xl p-6 border border-brand-beige hover:border-brand-primary transition-colors"
            >
              <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-3">
                {proc.name}
              </h3>
              <p className="text-brand-neutral-warm text-sm leading-relaxed">
                {proc.description}
              </p>
            </div>
          ))}
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
