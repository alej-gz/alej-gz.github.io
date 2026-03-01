"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    src: "/familia-sucre.jpeg",
    caption: "Con mi familia en Sucre, de pequeño",
  },
  {
    src: "/certificado.jpeg",
    caption: "Certificado de Bachiller de Excelencia — 2025",
  },
]

export function PhotosSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? photos.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === photos.length - 1 ? 0 : i + 1))

  return (
    <section id="photos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">
            {"Momentos"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Algunos instantes que vale la pena guardar."}
        </p>

        <div className="relative max-w-2xl mx-auto">
          {/* Photo */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-[4/3] relative">
            <Image
              src={photos[current].src}
              alt={photos[current].caption}
              fill
              className="object-cover transition-opacity duration-300"
            />
            {/* Fallback icon if image missing */}
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 opacity-0 hover:opacity-0">
              <ImageIcon className="h-10 w-10 text-muted-foreground" />
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-sm font-[var(--font-body)] text-muted-foreground mt-4 italic">
            {photos[current].caption}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Ir a foto ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )

}
