import { Brain, Cpu, Target, Lightbulb } from "lucide-react"

const specializations = [
  {
    icon: Brain,
    title: "Ciencias Cognitivas Computacionales",
    description:
      "Estudio y desarrollo de algoritmos basados en los procesos de la mente humana, como la memoria, el aprendizaje y la atenci\u00f3n.",
  },
  {
    icon: Cpu,
    title: "Arquitecturas Cognitivas",
    description:
      "Modelado de procesos mentales dentro de sistemas de Inteligencia Artificial para mejorar la toma de decisiones.",
  },
  {
    icon: Target,
    title: "Objetivo Laboral",
    description:
      "Trabajar en centros de investigaci\u00f3n o desarrollo tecnol\u00f3gico, dise\u00f1ando sistemas que repliquen o asistan las capacidades cognitivas humanas.",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento Computacional",
    description:
      "Pensamiento l\u00f3gico-matem\u00e1tico, an\u00e1lisis de sistemas complejos, modelado de procesos, abstracci\u00f3n de datos y comprensi\u00f3n de patrones conductuales.",
  },
]

export function SpecializationSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">
            {"Especializaci\u00f3n"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Mi \u00e1rea de enfoque -- donde la mente humana se encuentra con la inteligencia artificial."}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {specializations.map((item) => (
            <div
              key={item.title}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-[var(--font-body)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
