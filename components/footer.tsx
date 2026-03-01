"use client"

import { Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Firma */}
        <div
          className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-default"
          onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 20px var(--primary)) drop-shadow(0 0 40px var(--primary))')}
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
      </div>
    </footer>
  )
}
