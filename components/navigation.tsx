"use client"

import { useState, useEffect } from "react"
import { Mail, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Sobre M\u00ed", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Destrezas", href: "#skills" },
  { label: "Trayectoria", href: "#experience" },
  { label: "Cursos", href: "#courses" },
  { label: "Fotos", href: "#photos" },
  { label: "Escritos", href: "#blog" },
  { label: "Contacto", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-primary font-serif text-lg tracking-wide"
        >
          <Mail className="h-5 w-5" />
          <span className="italic">P.A.G.C.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-[var(--font-body)] text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-[var(--font-body)] text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
