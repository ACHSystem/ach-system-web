import { ArrowRight, Check, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { whatsappLink } from "@/config/site"

const includes = [
  "Análisis de requerimientos y levantamiento de procesos.",
  "Diseño y desarrollo del sistema a tu medida.",
  "Instalación y configuración en tu negocio.",
  "Capacitación para ti y tu equipo.",
  "Manual de usuario y documentación.",
  "Soporte inicial incluido tras la entrega.",
]

const priceFactors = [
  {
    title: "Cantidad de módulos",
    description:
      "Un sistema de ventas sencillo no cuesta lo mismo que uno con inventario, turnos y reportes avanzados.",
  },
  {
    title: "Usuarios y turnos",
    description:
      "Más usuarios, roles o control por turnos requieren mayor desarrollo y pruebas.",
  },
  {
    title: "Integraciones",
    description:
      "Conexión con impresoras, lectores, balanzas u otros equipos suma al alcance del proyecto.",
  },
  {
    title: "Nivel de personalización",
    description:
      "Mientras más se adapte a la forma exacta de trabajar de tu negocio, mayor es el detalle del trabajo.",
  },
]

export function Pricing() {
  return (
    <section id="precios" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Precios"
          title="Inversión clara, sin sorpresas"
          description="El costo de tu sistema depende del alcance del proyecto. Trabajamos con rangos para que sepas desde el inicio qué esperar."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-primary/40 bg-card p-8 lg:col-span-2">
            <p className="text-sm font-medium text-muted-foreground">
              Rango general de desarrollo
            </p>
            <p className="mt-3 text-5xl font-bold text-gold-strong">
              $100 – $800
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Pago único por el desarrollo. El monto final se define en la
              propuesta según las funciones y el nivel de personalización que
              necesites.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8 w-full">
              <a
                href={whatsappLink(
                  "Hola ACH Systems, quiero una cotización para un sistema a medida."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar cotización
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 lg:col-span-3">
            <div className="flex items-center gap-2 text-gold-strong">
              <TrendingUp className="size-5" />
              <h3 className="text-lg font-semibold">
                ¿Qué hace variar el precio?
              </h3>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {priceFactors.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-xl border border-border bg-background p-4"
                >
                  <h4 className="text-sm font-semibold">{factor.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Si tu negocio necesita algo más grande, también podemos escalar el
              proyecto por fases para ajustarnos a tu presupuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
