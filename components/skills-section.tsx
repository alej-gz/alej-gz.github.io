import { Heart } from "lucide-react"

const skillCategories = [
  {
    title: "Destrezas T\u00e9cnicas",
    skills: ["Pensamiento l\u00f3gico-matem\u00e1tico", "An\u00e1lisis de sistemas", "Modelado de procesos", "Abstracci\u00f3n de datos", "Patrones conductuales"],
  },
  {
    title: "Tecnolog\u00edas",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Idiomas",
    skills: ["Espa\u00f1ol (Nativo)", "Ingl\u00e9s (Avanzado C1)"],
  },
  {
    title: "Destrezas Blandas",
    skills: ["Pensamiento cr\u00edtico", "Resoluci\u00f3n de problemas", "Curiosidad intelectual", "Adaptabilidad", "Trabajo bajo presi\u00f3n"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">
            {"Destrezas & Habilidades"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Las herramientas y capacidades que aplico para dar vida a las ideas."}
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-6">
                <Heart className="h-4 w-4 text-primary fill-primary/30" />
                <h3 className="font-serif text-xl text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-[var(--font-body)] bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/40 hover:bg-muted transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
