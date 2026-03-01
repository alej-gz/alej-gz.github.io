"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    src: "/familia-sucre.jpeg",
    caption: "Con mi familia en Sucre, de pequeño",
    orientation: "landscape",
  },
  {
    src: "/certificado.jpeg",
    caption: "Certificado de Bachiller de Excelencia — 2025",
    orientation: "landscape",
  },
  {
    src: "/certificado-canguro.jpeg",
    caption: "Certificado Medalla Olimpiadas Canguro - 2021",
    orientation: "portrait",
  },
  {
    src: "/umsa.jpeg",
    caption: 'Certificado Medalla Olimpiadas UMSA - 2020",
  }
]

export function PhotosSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? photos.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === photos.length - 1 ? 0 : i + 1))

  const photo = photos[current]
  const isPortrait = photo.orientation === "portrait"

  return (
    <section id="photos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">
            {"Logros & Evidencias"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Certificados, evidencias y logros a lo largo del camino."}
        </p>

        <div className="relative mx-auto transition-all duration-300" style={{ maxWidth: isPortrait ? "400px" : "672px" }}>
          <div
            className="bg-card border border-border rounded-2xl overflow-hidden relative transition-all duration-300"
            style={{ aspectRatio: isPortrait ? "3/4" : "4/3" }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-contain transition-opacity duration-300"
            />
          </div>

          <p className="text-center text-sm font-[var(--font-body)] text-muted-foreground mt-4 italic">
            {photo.caption}
          </p>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-muted transition-colors flex items-center justify-center" aria-label="Foto anterior">
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>
            <div className="flex gap-2">
              {photos.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} aria-label={`Ir a foto ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-muted transition-colors flex items-center justify-center" aria-label="Foto siguiente">
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


