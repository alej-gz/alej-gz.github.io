import { Heart, Quote } from "lucide-react"

const references = [
  {
    quote:
      "Referencia personal y tutora acad\u00e9mica de Paul Alejandro. Contacto disponible para verificaci\u00f3n de referencias.",
    name: "Ang\u00e9lica Calle Limachi",
    role: "Tutora",
    company: "Tel: 73880366",
  },
  {
  quote: "Referencia académica y profesional. Docente de inglés que respaldó la participación de Paul Alejandro como instructor en el instituto.",
  name: "Alain Signori",
  role: "Docente de Inglés",
  company: "Tel: 73947669",
},
]

export function ReferencesSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">
            {"Referencias Personales"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-center text-muted-foreground font-[var(--font-body)] mb-16 max-w-lg mx-auto">
          {"Personas que respaldan mi trayectoria y formaci\u00f3n."}
        </p>

        <div className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="bg-card rounded-2xl border border-border p-6 flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary/30 mb-4 rotate-180" />
              <p className="text-sm text-muted-foreground font-[var(--font-body)] leading-relaxed flex-1 italic">
                {`"${ref.quote}"`}
              </p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary fill-primary/30" />
                </div>
                <div>
                  <p className="text-sm font-[var(--font-body)] text-foreground font-medium">
                    {ref.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-[var(--font-body)]">
                    {ref.role}, {ref.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
