import { ArrowRight, CalendarCheck, Check, MapPin } from "lucide-react"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { site, whatsappLink } from "@/config/site"

const outcomes = [
  "Un diagnóstico gratuito de cómo trabajas hoy.",
  "Una propuesta clara: alcance, tiempo y precio.",
  "Un sistema hecho a la medida de tu negocio.",
  "Capacitación y soporte para ti y tu equipo.",
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 0%, color-mix(in srgb, var(--gold) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-gold-strong" />
            {site.locations.join(" · ")} · {site.country}
          </span>

          <h1 className="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
            <span className="text-gold-strong">{site.name}</span> — software a
            medida para tu PYME
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Desarrollamos sistemas personalizados que resuelven problemas
            concretos de tu negocio: ventas, inventario, facturación, turnos y
            reportes. Sin plantillas genéricas, sin complicaciones.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
                <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
            >
              <a
                href={site.contact.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck className="size-5" />
                Agendar una cita
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Atención directa con los ingenieros que construyen tu sistema.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt={`Logotipo de ${site.name}`}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm font-semibold">
                  Al contactarnos, esto es lo que obtienes
                </p>
                <p className="text-xs text-muted-foreground">
                  Resultados reales, desde el primer día
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-col gap-4">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
