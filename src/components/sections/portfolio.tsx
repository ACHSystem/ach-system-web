import { Clock, MapPin, Store, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"

const cases = [
  {
    client: "Inversiones Gustavo",
    location: "San Francisco, Zulia",
    tag: "Sistema base",
    icon: Store,
    description:
      "Implementación del sistema de ventas base, adaptado a los requerimientos operativos del negocio. Hoy opera a diario dando los resultados esperados.",
    highlights: [
      "Registro de ventas y control de caja",
      "Adaptado a su forma de trabajar",
      "Operación diaria estable",
    ],
  },
  {
    client: "Abastos Kairos",
    location: "San Francisco, Zulia",
    tag: "Versión 24h por turnos",
    icon: Clock,
    description:
      "Versión ampliada del sistema de ventas, diseñada para operar 24 horas con separación por turnos y control de cierre independiente para cada uno.",
    highlights: [
      "Operación continua 24 horas",
      "Control y cierre por turnos",
      "Trazabilidad por usuario",
    ],
  },
]

export function Portfolio() {
  return (
    <section
      id="casos"
      className="border-b border-border bg-muted/40 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Casos y experiencia"
          title="Sistemas que ya están trabajando"
          description="Nuestro sistema de ventas está instalado y operando en negocios reales de San Francisco, Zulia, con resultados según los requerimientos de cada cliente."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.client}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-gold-strong">
                  <item.icon className="size-6" />
                </span>
                <Badge className="font-normal">{item.tag}</Badge>
              </div>

              <h3 className="mt-5 text-lg font-semibold">{item.client}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" />
                {item.location}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-sm"
                  >
                    <TrendingUp className="size-4 shrink-0 text-gold-strong" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
