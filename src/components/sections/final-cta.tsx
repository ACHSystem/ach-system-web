import { ArrowRight, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, whatsappLink } from "@/config/site"

const services = [
  "Sistema de ventas",
  "Control de inventario",
  "Facturación",
  "Control por turnos",
  "Reportes y estadísticas",
  "Equipos y hardware",
  "Soporte y mantenimiento",
]

export function FinalCta() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 0%, color-mix(in srgb, var(--gold) 20%, transparent), transparent 70%)",
            }}
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
            ¿Listo para automatizarte?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Cuéntanos qué necesita tu negocio y te ayudamos a resolverlo con un
            sistema hecho a tu medida. Elige lo que te interesa y hablemos.
          </p>

          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
              >
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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
        </div>
      </div>
    </section>
  )
}
