import { ArrowUpRight, BookOpen } from "lucide-react"

const posts = [
  {
    title: "Ciencias Cognitivas Computacionales: El Futuro de la IA",
    excerpt:
      "C\u00f3mo los procesos de la mente humana inspiran el desarrollo de algoritmos m\u00e1s inteligentes y eficientes.",
    date: "Pr\u00f3ximamente",
    readTime: "Lectura",
    url: "#",
  },
  {
    title: "De Llallagua al Mundo Digital",
    excerpt:
      "Mi camino desde las olimpiadas de matem\u00e1ticas hasta la ingenier\u00eda en sistemas y la inteligencia artificial.",
    date: "Pr\u00f3ximamente",
    readTime: "Personal",
    url: "#",
  },
  {
    title: "Por Qu\u00e9 Programar es Magia",
    excerpt:
      "Reflexiones sobre la creaci\u00f3n de software y c\u00f3mo unas l\u00edneas de c\u00f3digo pueden cambiar la vida de las personas.",
    date: "Pr\u00f3ximamente",
    readTime: "Reflexi\u00f3n",
    url: "#",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">{"Escritos"}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Pensamientos, tutoriales, y cartas de amor al c\u00f3digo limpio."}
        </p>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              className="group flex flex-col sm:flex-row sm:items-center justify-between bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-all hover:shadow-sm gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-[var(--font-body)] text-muted-foreground">
                    {post.date} -- {post.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground font-[var(--font-body)] mt-1 line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
