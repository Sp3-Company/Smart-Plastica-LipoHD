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

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProcedures.map((proc) => (
            <div
              key={proc.slug}
              className="rounded-2xl border border-brand-beige overflow-hidden hover:border-brand-primary transition-colors"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-brand-primary to-brand-light" />
              <div className="p-6">
                <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-3">
                  {proc.name}
                </h3>
                <p className="text-brand-neutral-warm text-sm leading-relaxed">
                  {proc.description}
                </p>
              </div>
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
