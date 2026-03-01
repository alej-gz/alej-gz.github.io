import { Mail, Github, Heart, Instagram, Phone } from "lucide-react"

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/alej-gz",
    handle: "@alej-gz",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:guzmancallepa@gmail.com",
    handle: "guzmancallepa@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/alej_gz.ip",
    handle: "@alej_gz.ip",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    href: "https://wa.me/59171889644",
    handle: "+591 71889644",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-3xl md:text-4xl italic text-primary">
            {"Contacto"}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-muted-foreground font-[var(--font-body)] mb-12 max-w-md mx-auto">
          {"Me encantaría saber de ti. Ya sea un proyecto, una oportunidad, o simplemente un hola."}
        </p>
        {/* Envelope-style card */}
        <div className="relative bg-card rounded-2xl border border-border p-10 shadow-sm">
          {/* Envelope flap decoration */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[16px] border-l-transparent border-r-transparent border-b-border" />
          <p className="font-serif text-xl italic text-foreground mb-2">
            {"Querido visitante,"}
          </p>
          <p className="text-sm text-muted-foreground font-[var(--font-body)] mb-8">
            {"Escríbeme -- prometo responder."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <social.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-[var(--font-body)] text-foreground font-medium">
                    {social.label}
                  </p>
                  <p className="text-xs text-muted-foreground font-[var(--font-body)]">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
