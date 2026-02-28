"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  left: number
  delay: number
  duration: number
  symbol: string
  size: number
  opacity: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const symbols = [
      "\u2764", // heart
      "\u2665", // heart suit
      "\u2661", // white heart suit
      "\uD83E\uDEB6", // feather
      "\u2727", // sparkle
      "\u2740", // flower
    ]

    const generated: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 10 + Math.random() * 14,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      size: 16 + Math.random() * 24,
      opacity: 0.25 + Math.random() * 0.45,
    }))

    setParticles(generated)
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float-up"
          style={{
            left: `${p.left}%`,
            bottom: "-30px",
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            color: "var(--primary)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
