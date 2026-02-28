import { BookOpen } from "lucide-react"

const courses = [
  {
    name: "Guitarra",
    platform: "Rimay",
    completedAt: "2022-2025",
  },
  {
    name: "Volleyball",
    platform: "Club Revenge",
    completedAt: "2024-2025",
  },
  {
    name: "Curso C++",
    platform: "YouTube",
    completedAt: "Julio 2024",
  },
  {
    name: "Programación en Lua",
    platform: "Mentor-Lab (Virtual)",
    completedAt: "2023",
  },
  {
    name: "Ofimática (Programación en Visual Studio",
    platform: "Instituto Khana Marka (Oruro)",
    completedAt: "2022",
  }
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">
            {"Cursos & Aprendizaje"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Aprendizaje continuo más allá del aula."}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors flex items-start gap-4"
            >
              <div className="mt-1 flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center border border-border">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground leading-snug">
                  {course.name}
                </h3>
                <p className="text-xs font-[var(--font-body)] text-muted-foreground mt-1">
                  {course.platform} · {course.completedAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}
