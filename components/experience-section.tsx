import { Heart } from "lucide-react"

const experiences = [
  {
    period: "Actualidad",
    title: "Estudiante de Ingenier\u00eda en Sistemas",
    company: "Universidad",
    description:
      "Cursando la carrera de Ingenier\u00eda en Sistemas con enfoque en Ciencias Cognitivas Computacionales y desarrollo de arquitecturas de IA.",
    tags: ["Ingenier\u00eda en Sistemas", "IA", "Ciencias Cognitivas"],
  },
  {
    period: "Experiencia",
    title: "Instructor de Ingl\u00e9s",
    company: "Instituto CESICOM",
    description:
      "Ense\u00f1anza de ingl\u00e9s a nivel avanzado, desarrollando habilidades de comunicaci\u00f3n y metodolog\u00eda educativa.",
    tags: ["Ingl\u00e9s C1", "Ense\u00f1anza", "Comunicaci\u00f3n"],
  },
  {
    period: "2021",
    title: "Medalla de Oro -- Canguro Matem\u00e1tico",
    company: "Competencia Nacional",
    description:
      "Primer lugar en la competencia Canguro Matem\u00e1tico. Tambi\u00e9n Medalla de Plata en la Olimpiada de Matem\u00e1ticas del mismo a\u00f1o.",
    tags: ["Matem\u00e1ticas", "Oro", "Plata"],
  },
  {
    period: "2020",
    title: "Medalla de Bronce -- Olimpiadas UMSA",
    company: "Universidad Mayor de San Andr\u00e9s",
    description:
      "Reconocimiento en las Olimpiadas acad\u00e9micas organizadas por la UMSA.",
    tags: ["Olimpiadas", "UMSA", "Bronce"],
  },
  {
    period: "2018 -- 2019",
    title: "Finalista -- Olimpiadas de Inform\u00e1tica",
    company: "Competencia Nacional",
    description:
      "Participaci\u00f3n destacada como finalista en las Olimpiadas Nacionales de Inform\u00e1tica.",
    tags: ["Inform\u00e1tica", "Programaci\u00f3n", "L\u00f3gica"],
  },
  {
    period: "Formaci\u00f3n",
    title: "Unidad Educativa \"Siglo XX -- Am\u00e9rica\"",
    company: "Llallagua, Potos\u00ed",
    description:
      "Formaci\u00f3n acad\u00e9mica inicial donde se desarroll\u00f3 la pasi\u00f3n por las matem\u00e1ticas, la l\u00f3gica y la tecnolog\u00eda.",
    tags: ["Educaci\u00f3n", "Matem\u00e1ticas", "Inform\u00e1tica"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">{"Trayectoria"}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Mi camino hasta ahora -- cada cap\u00edtulo cuenta una historia."}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-8 ring-4 ring-background z-10" />

                {/* Content card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-0" : "md:pl-0"}`}>
                  <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors">
                    <span className="text-xs font-[var(--font-body)] text-primary tracking-widest uppercase">
                      {exp.period}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mt-2">{exp.title}</h3>
                    <p className="text-sm text-primary/70 font-[var(--font-body)] italic mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground font-[var(--font-body)] leading-relaxed mt-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-[var(--font-body)] bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>

          {/* Timeline end heart */}
          <div className="absolute left-6 md:left-1/2 -bottom-3 -translate-x-1/2">
            <Heart className="h-5 w-5 text-primary fill-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
