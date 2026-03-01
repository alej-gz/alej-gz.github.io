import { Heart, Brain, Code2, Music, Layout } from "lucide-react"

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

            <p className="text-sm text-muted-foreground font-[var(--font-body)] italic mb-4">
  {"Querido visitante,"}
</p>

            <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed mb-4">
              {"Desde que tuve mi primer contacto con una computadora, algo en mí cambió. No me conformé con ser un simple espectador o un usuario más de las aplicaciones; siempre sentí esa curiosidad electrizante por entender qué ocurría realmente detrás de la pantalla, en ese mundo de lógica invisible. Para mí, programar es lo más cercano que tenemos a la magia en el mundo real: es la capacidad de escribir palabras que se transforman en realidades, creando algo de la nada que puede facilitar la vida de miles de personas. Esa chispa de asombro es la que me guía cada día en este camino de aprendizaje constante."}
            </p>

            <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed mb-4">
              {"Estudio Ingeniería en Sistemas porque tengo la convicción de que el mundo actual se mueve a través de bits y bytes, y no quiero solo habitarlos, quiero ser quien diseñe los sistemas que sostienen nuestro futuro. Mi fascinación va más allá del código tradicional; me apasionan profundamente las Ciencias Cognitivas Computacionales y el desarrollo de Arquitecturas Cognitivas. Me interesa explorar cómo los procesos mentales —como la memoria y el aprendizaje— pueden modelarse en sistemas digitales para crear una tecnología más inteligente, pero sobre todo, más humana y comprensiva con nuestras propias capacidades."}
            </p>

            <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed mb-4">
              {"Sin embargo, creo que un ingeniero no es solo alguien que resuelve problemas técnicos, sino alguien que sabe conectar mundos. Por eso, cuando no estoy sumergido en líneas de código, me encontrarás tocando el bajo eléctrico, donde busco la misma armonía y estructura que en un buen software. También dedico tiempo a la enseñanza del inglés, una labor que me ha enseñado que la comunicación es la base de todo progreso, ya sea entre humanos o entre máquinas. Estas pasiones son mi cable a tierra y mi fuente de inspiración para seguir explorando nuevas tecnologías."}
            </p>

            <p className="text-muted-foreground font-[var(--font-body)] leading-relaxed">
              {"Mi meta final es fusionar la creatividad con la lógica más pura. Entiendo que esta carrera exige noches de desvelo y una resiliencia inquebrantable ante los errores, pero estoy listo para el reto. Quiero aportar mi grano de arena al desarrollo tecnológico, diseñando herramientas que no solo sean eficientes, sino que tengan un propósito claro y ético. Al final del día, se trata de utilizar el pensamiento computacional como un puente para construir una realidad más conectada, innovadora y, por encima de todo, accesible para cada miembro de nuestra sociedad."}
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
              {
              icon: Layout,
              title: "Desarrollo Frontend",
              description:
                "Me apasiona crear interfaces que combinen estética y funcionalidad. Disfruto mucho el proceso de diseñar experiencias visuales con código.",
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
