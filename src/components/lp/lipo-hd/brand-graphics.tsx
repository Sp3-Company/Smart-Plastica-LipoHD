// Grafismos da marca Smart Plástica — portais, arcos e curvas paralelas
// Baseados no brand book oficial (conceito de "portais entrelaçados")

export function PortalArch({ className = "", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 300 500"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden
    >
      {/* Portal oval — forma do logo/brand */}
      <path d="M 150 10 C 70 10, 10 70, 10 150 L 10 350 C 10 430, 70 490, 150 490 C 230 490, 290 430, 290 350 L 290 150 C 290 70, 230 10, 150 10 Z" />
    </svg>
  )
}

export function ParallelCurves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      {[...Array(7)].map((_, i) => (
        <path
          key={i}
          d={`M ${20 + i * 12} 200 L ${20 + i * 12} ${130 - i * 4} Q ${20 + i * 12} ${60 - i * 4}, ${100 + i * 12} ${60 - i * 4} L ${280 - i * 12} ${60 - i * 4} Q ${360 - i * 12} ${60 - i * 4}, ${360 - i * 12} ${130 - i * 4} L ${360 - i * 12} 200`}
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}

export function ArchCluster({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" className={className} aria-hidden>
      {/* 4 arcos capsule lado a lado */}
      {[0, 150, 300, 450].map((x, i) => (
        <rect
          key={i}
          x={x + 20}
          y="10"
          width="100"
          height="180"
          rx="50"
          fill="currentColor"
          opacity={i % 2 === 0 ? 0.9 : 0.6}
        />
      ))}
    </svg>
  )
}

import { SpinningSeal } from "@/components/ui/spinning-seal"

/**
 * Bridge que conecta duas seções atravessando a borda.
 * Usa o selo Smart Lovers (com texto circular girando) do brand.
 * Renderize DENTRO da primeira seção com position: relative.
 */
export function SectionBridge({
  align = "center",
  size = "md",
  variant = "dark",
}: {
  align?: "left" | "center" | "right"
  size?: "sm" | "md" | "lg"
  /** "dark" = selo escuro (fundos claros) · "light" = selo claro (fundos escuros) */
  variant?: "dark" | "light"
}) {
  const alignClass =
    align === "left"
      ? "left-6 md:left-16"
      : align === "right"
      ? "right-6 md:right-16"
      : "left-1/2 -translate-x-1/2"

  const sizePx = size === "sm" ? 100 : size === "lg" ? 180 : 140

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bottom-0 ${alignClass} translate-y-1/2 z-20`}
      style={
        variant === "light"
          ? { filter: "brightness(0) invert(1)" }
          : undefined
      }
    >
      <SpinningSeal size={sizePx} />
    </div>
  )
}

/**
 * Traço vertical com arco no topo — "fio" conectando seções.
 * Renderize DENTRO da seção inferior com position: relative.
 */
export function VerticalThread({ height = 120 }: { height?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full z-20"
      style={{ height: `${height}px` }}
    >
      <svg viewBox="0 0 40 120" className="h-full" preserveAspectRatio="xMidYMax meet">
        <path
          d="M 20 0 Q 20 40, 20 120"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        <circle cx="20" cy="0" r="3" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  )
}

export function HalfArch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      {/* Meio arco curvado */}
      <path d="M 10 300 L 10 100 Q 10 10, 100 10 Q 190 10, 190 100 L 190 300" />
      <path d="M 30 300 L 30 105 Q 30 30, 100 30 Q 170 30, 170 105 L 170 300" />
      <path d="M 50 300 L 50 110 Q 50 50, 100 50 Q 150 50, 150 110 L 150 300" />
    </svg>
  )
}
