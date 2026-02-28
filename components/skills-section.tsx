import { Heart, TrendingUp } from "lucide-react"

const skillCategories = [
  {
    title: "Destrezas Técnicas",
    icon: "heart",
    skills: ["Pensamiento lógico-matemático", "Análisis de sistemas", "Patrones conductuales"],
  },
  {
    title: "Tecnologías",
    icon: "heart",
    skills: ["JavaScript", "TypeScript", "Lua", "HTML", "CSS", "C++", "React (aprendiendo)", "Next.js (aprendiendo)"],
  },
  {
    title: "Idiomas",
    icon: "heart",
    skills: ["Español (Nativo)", "Inglés (Avanzado C1)"],
  },
  {
    title: "Destrezas Blandas",
    icon: "heart",
    skills: ["Pensamiento crítico", "Resolución de problemas", "Curiosidad intelectual", "Adaptabilidad", "Trabajo bajo presión", "Empatía", "Sensibilidad social"],
  },
  {
    title: "A Fortalecer",
    icon: "trending",
    skills: ["Comunicación técnica", "Gestión del tiempo", "Trabajo en equipo"],
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
              className={`bg-card rounded-2xl border p-8 hover:border-primary/30 transition-colors ${
                category.icon === "trending"
                  ? "border-dashed border-border/70"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                {category.icon === "trending" ? (
                  <TrendingUp className="h-4 w-4 text-primary" />
                ) : (
                  <Heart className="h-4 w-4 text-primary fill-primary/30" />
                )}
                <h3 className="font-serif text-xl text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 text-sm font-[var(--font-body)] rounded-full border transition-colors cursor-default ${
                      category.icon === "trending"
                        ? "bg-secondary/50 text-muted-foreground border-border/50 hover:border-primary/30"
                        : "bg-secondary text-secondary-foreground border-border hover:border-primary/40 hover:bg-muted"
                    }`}
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
