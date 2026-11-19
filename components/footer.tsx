"use client"

import { Heart, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Firma */}
        <div
          className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-default"
          onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 15px var(--primary)) drop-shadow(0 0 35px var(--primary)) drop-shadow(0 0 60px var(--primary))')}
          onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
        >
          <Image
            src="/firma.png"
            alt="Firma de Paul Alejandro Guzmán Calle"
            width={300}
            height={120}
            className="object-contain firma [mix-blend-mode:multiply]"
          />
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-[var(--font-body)]">
            {"© 2026 Paul Alejandro Guzmán Calle"}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-[var(--font-body)]">
            <span>{"Hecho con"}</span>
            <Heart className="h-3.5 w-3.5 text-primary fill-primary" />
            <span>{"y Next.js"}</span>
          </div>
        </div>

        <a
          href="https://instagram.com/alej_gzm.c"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-[var(--font-body)]"
          aria-label="Instagram de Paul Alejandro Guzmán Calle: @alej_gzm.c"
        >
          <Instagram className="h-4 w-4" />
          <span>{"@alej_gzm.c"}</span>
        </a>
      </div>
    </footer>
  )
}
