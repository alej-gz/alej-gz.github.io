"use client"

import { useState, useEffect } from "react"

type Theme = "default" | "dog" | "cmih"

const themes: { id: Theme; emoji: string; title: string }[] = [
  { id: "default", emoji: "✉️", title: "Emails I Can't Send" },
  { id: "dog", emoji: "🐾", title: "Man's Best Friend" },
  { id: "cmih", emoji: "☕", title: "Shor't and Sweet" },
]

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("default")

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null
    if (saved) apply(saved)
  }, [])

  const apply = (t: Theme) => {
    const root = document.documentElement
    if (t === "default") {
      root.removeAttribute("data-theme")
    } else {
      root.setAttribute("data-theme", t)
    }
    localStorage.setItem("theme", t)
    setTheme(t)
  }

  const toggle = () => {
    const idx = themes.findIndex((t) => t.id === theme)
    const next = themes[(idx + 1) % themes.length]
    apply(next.id)
  }

  const current = themes.find((t) => t.id === theme)!
  const next = themes[(themes.findIndex((t) => t.id === theme) + 1) % themes.length]

  return (
    <button
      onClick={toggle}
      title={`Cambiar a ${next.title} ${next.emoji}`}
      className="fixed bottom-24 right-4 md:top-6 md:bottom-auto md:right-6 z-50 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:border-primary/40 hover:bg-secondary transition-colors text-lg"
      aria-label="Cambiar tema"
    >
      {current.emoji}
    </button>
  )
}
