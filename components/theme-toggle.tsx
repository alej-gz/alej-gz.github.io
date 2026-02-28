"use client"

import { useState, useEffect } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"default" | "dog">("default")

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "default" | "dog" | null
    if (saved) apply(saved)
  }, [])

  const apply = (t: "default" | "dog") => {
    const root = document.documentElement
    root.classList.remove("dog")
    if (t === "dog") root.classList.add("dog")
    localStorage.setItem("theme", t)
    setTheme(t)
  }

  const toggle = () => apply(theme === "default" ? "dog" : "default")

  return (
    <button
      onClick={toggle}
      title={theme === "default" ? "Cambiar a Man's Best Friend 🐾" : "Cambiar a Emails I Can't Send"}
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:border-primary/40 hover:bg-secondary transition-colors text-lg"
      aria-label="Cambiar tema"
    >
      {theme === "default" ? "🐾" : "✉️"}
    </button>
  )
}
