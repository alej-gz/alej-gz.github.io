"use client"

import { useState } from "react"
import { Heart, ArrowDown, X } from "lucide-react"

export function HeroSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blush/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

      <div className="relative text-center max-w-3xl mx-auto">
        {/* Profile photo */}
        <div className="mb-8">
          <div
            className="inline-block rounded-full p-1.5 border-2 border-primary/40 bg-card shadow-lg cursor-zoom-in hover:border-primary/70 transition-colors"
            onClick={() => setOpen(true)}
            title="Click para ampliar"
          >
            <img
              src="/yo.jpeg"
              alt="Paul Alejandro Guzmán Calle"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover sepia-[0.1] hover:sepia-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Envelope-style stamp */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-[var(--font-body)] mb-8 border border-border">
          <Heart className="h-3.5 w-3.5 text-primary fill-primary" />
          <span>{"Estudiante de Ingeniería en Sistemas"}</span>
          <Heart className="h-3.5 w-3.5 text-primary fill-primary" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
          Paul Alejandro
          <br />
          <span className="italic text-primary">{"Guzmán Calle"}</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground font-[var(--font-body)] leading-relaxed max-w-xl mx-auto text-pretty">
          {"Ingeniería en Sistemas · Ciencias Cognitivas Computacionales · Llallagua, Potosí, Bolivia"}
        </p>

        {/* Love-letter style divider */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px w-16 bg-border" />
          <Heart className="h-4 w-4 text-primary/50" />
          <div className="h-px w-16 bg-border" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-[var(--font-body)] tracking-wide hover:opacity-90 transition-opacity"
          >
            {"Ver Mis Proyectos"}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground rounded-full text-sm font-[var(--font-body)] tracking-wide hover:bg-secondary transition-colors"
          >
            {"Contáctame"}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </a>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl p-2 border-2 border-primary/40 bg-card shadow-2xl">
              <img
                src="/yo.jpeg"
                alt="Paul Alejandro Guzmán Calle"
                className="w-72 h-72 md:w-96 md:h-96 rounded-xl object-cover"
              />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
