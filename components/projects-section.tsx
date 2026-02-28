import { ExternalLink, Github, Heart } from "lucide-react"

const projects = [
  {
    title: "Portfolio Personal",
    description:
      "Página personal de referencias y perfil profesional. Diseñada para presentar formación académica, logros y áreas de especialización.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://alej-gz.vercel.app",
    githubUrl: "https://github.com/alej-gz/alej-gz.github.io",
  },
  {
    title: "Bots de Discord",
    description:
      "Desarrollo de bots para servidores de Discord con comandos personalizados. Primeros proyectos de programación en JavaScript, explorando automatización e interacción con APIs externas.",
    tags: ["JavaScript", "Discord API", "Automatización", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">{"Proyectos"}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Una colección de cosas que he construido con cuidado y atención al detalle."}
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all hover:shadow-md"
            >
              {/* Envelope number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-serif font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-[var(--font-body)] bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 md:flex-shrink-0">
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={`Ver ${project.title} en GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={`Ver ${project.title} en vivo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/alej-gz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-[var(--font-body)] text-primary hover:underline"
          >
            <Heart className="h-3.5 w-3.5" />
            <span>{"Ver todos los proyectos en GitHub"}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
