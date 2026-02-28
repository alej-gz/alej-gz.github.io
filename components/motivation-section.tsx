import { Heart, Quote } from "lucide-react"

export function MotivationSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="h-10 w-10 text-primary/30 mx-auto mb-8 rotate-180" />

        <blockquote className="font-serif text-2xl md:text-4xl text-foreground italic leading-relaxed text-balance">
          {"Programar es lo m\u00e1s cercano que tenemos a la magia en el mundo real: escribes unas palabras y, de pronto, creas algo que antes no exist\u00eda."}
        </blockquote>

        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-12 bg-border" />
          <Heart className="h-4 w-4 text-primary fill-primary/30" />
          <div className="h-px w-12 bg-border" />
        </div>

        <p className="mt-6 text-muted-foreground font-[var(--font-body)] text-lg">
          {"Mi meta es dejar mi propia huella en el mundo digital, aportando creatividad y esfuerzo para que la tecnolog\u00eda sea m\u00e1s humana, eficiente y accesible para todos."}
        </p>
      </div>
    </section>
  )
}
