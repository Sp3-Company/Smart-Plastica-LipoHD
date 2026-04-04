"use client"

import { useRef, useState, useEffect } from "react"
import { SectionBridge } from "./brand-graphics"

type Video =
  | { type: "youtube"; id: string }
  | { type: "instagram"; path: string; id: string }

const VIDEOS: Video[] = [
  { type: "youtube", id: "xxydFfbiVHA" },
  { type: "youtube", id: "8A9bx97mdyE" },
  { type: "youtube", id: "2_qXau_fWm4" },
  { type: "instagram", path: "reel/DUJzgjGkZj3", id: "DUJzgjGkZj3" },
  { type: "instagram", path: "reel/DRfqGIjkefb", id: "DRfqGIjkefb" },
  { type: "instagram", path: "p/DOEw9xQAa0n", id: "DOEw9xQAa0n" },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-brand-dark translate-x-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [playingIdx, setPlayingIdx] = useState<number | null>(null)

  const updateBoundaries = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    updateBoundaries()
    const el = trackRef.current
    if (!el) return
    el.addEventListener("scroll", updateBoundaries, { passive: true })
    window.addEventListener("resize", updateBoundaries)
    return () => {
      el.removeEventListener("scroll", updateBoundaries)
      window.removeEventListener("resize", updateBoundaries)
    }
  }, [])

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const step = (card?.offsetWidth ?? 320) + 20
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" })
  }

  return (
    <section className="relative py-16 md:py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4">
        <div data-reveal className="text-center mb-10">
          <span className="text-brand-primary uppercase text-sm font-semibold tracking-widest">
            QUEM JÁ PASSOU POR AQUI
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark mt-3 leading-tight">
            HISTÓRIAS REAIS DE SMART LOVERS
          </h2>
          <p className="text-brand-dark/75 text-base md:text-lg leading-relaxed mt-4">
            Pacientes reais contando em primeira pessoa.
          </p>
        </div>

        {/* Carrossel com setas nas laterais */}
        <div className="relative">
          {/* Seta esquerda — desktop only */}
          <button
            type="button"
            onClick={() => scrollBy("left")}
            disabled={atStart}
            aria-label="Vídeo anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 h-12 w-12 items-center justify-center rounded-full bg-white text-brand-dark border border-brand-dark/10 shadow-lg hover:bg-brand-dark hover:text-white transition disabled:opacity-0 disabled:pointer-events-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Seta direita — desktop only */}
          <button
            type="button"
            onClick={() => scrollBy("right")}
            disabled={atEnd}
            aria-label="Próximo vídeo"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 h-12 w-12 items-center justify-center rounded-full bg-white text-brand-dark border border-brand-dark/10 shadow-lg hover:bg-brand-dark hover:text-white transition disabled:opacity-0 disabled:pointer-events-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-6 md:px-4 pb-2"
          >
            {VIDEOS.map((v, i) => {
              const isPlaying = playingIdx === i
              const isYt = v.type === "youtube"
              const thumbnail = isYt
                ? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
                : null
              const iframeSrc = isYt
                ? `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
                : `https://www.instagram.com/${v.path}/embed`

              return (
                <div
                  key={i}
                  data-card
                  className="snap-start shrink-0 w-[68vw] sm:w-[280px] md:w-[320px]"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden bg-brand-dark shadow-lg"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    {isPlaying ? (
                      <iframe
                        src={iframeSrc}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        scrolling="no"
                        title={`Depoimento ${i + 1}`}
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingIdx(i)}
                        aria-label={`Reproduzir depoimento ${i + 1}`}
                        className="group absolute inset-0 w-full h-full"
                      >
                        {/* Thumbnail */}
                        {thumbnail ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={thumbnail}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-warm to-brand-primary" />
                        )}
                        {/* Overlay escuro */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        {/* Play button central */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <PlayIcon />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Arrow controls — mobile (abaixo) */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={() => scrollBy("left")}
            disabled={atStart}
            aria-label="Vídeo anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-dark border border-brand-dark/10 disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy("right")}
            disabled={atEnd}
            aria-label="Próximo vídeo"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark text-white disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <SectionBridge align="center" size="md" />
    </section>
  )
}
