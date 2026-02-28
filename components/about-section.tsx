import { Heart, Brain, Code2, Music } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">{"Sobre M\u00ed"}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Letter-style about text */}
          <div className="relative bg-card rounded-2xl p-8 border border-border shadow-sm">
            {/* Stamp decoration */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-secondary rounded-lg border border-border flex items-center justify-center rotate-6">
              <Heart className="h-6 w-6 text-primary fill-primary/30" />
            </div>

            <p className="text-sm text-muted-foreground font-[var(--font-body)] italic mb-4">
              {"Querido visitante,"}
            </p>

            <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed mb-4">
              {"Desde que tuve mi primer contacto con una computadora, no me conform\u00e9 con solo usar las aplicaciones; siempre tuve esa curiosidad de entender qu\u00e9 pasaba detr\u00e1s de la pantalla. Para m\u00ed, programar es lo m\u00e1s cercano que tenemos a la magia en el mundo real."}
            </p>

            <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed mb-4">
              {"Estudio Ingenier\u00eda en Sistemas porque entiendo que el mundo actual se mueve a trav\u00e9s de bits y bytes, y quiero ser quien dise\u00f1e esos sistemas. Me apasionan las Ciencias Cognitivas Computacionales y el desarrollo de Arquitecturas Cognitivas."}
            </p>

            <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed">
              {"Cuando no estoy programando, me encontrar\u00e1s tocando el bajo el\u00e9ctrico, ense\u00f1ando ingl\u00e9s, o explorando nuevas tecnolog\u00edas que conecten la creatividad con la l\u00f3gica."}
            </p>

            <p className="text-sm text-primary font-serif italic mt-6">
              {"Con cari\u00f1o & c\u00f3digo,"}
              <br />
              {"Paul Alejandro"}
            </p>
          </div>

          {/* Quick facts / traits */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: Brain,
                title: "Ciencias Cognitivas",
                description:
                  "Estudio de algoritmos basados en procesos de la mente humana: memoria, aprendizaje y atenci\u00f3n.",
              },
              {
                icon: Code2,
                title: "Ingenier\u00eda en Sistemas",
                description:
                  "Desarrollo de arquitecturas cognitivas y modelado de procesos mentales dentro de sistemas de IA.",
              },
              {
                icon: Music,
                title: "Bajo El\u00e9ctrico",
                description:
                  "La m\u00fasica es mi forma de desconectar. Toco el bajo por pasi\u00f3n y gusto propio.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-[var(--font-body)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
