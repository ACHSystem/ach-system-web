import {
  ClipboardList,
  LifeBuoy,
  MessageCircle,
  Rocket,
  Store,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    icon: MessageCircle,
    title: "Contacto",
    description:
      "Nos escribes por WhatsApp o agendas una cita. Nos cuentas qué necesitas y resolvemos tus dudas iniciales sin compromiso.",
  },
  {
    icon: Store,
    title: "Visita a tu negocio",
    description:
      "Vamos a tu local en San Francisco o Maracaibo para conocer de cerca cómo trabajas, tu equipo y tus procesos actuales.",
  },
  {
    icon: ClipboardList,
    title: "Análisis y propuesta",
    description:
      "Levantamos los requerimientos y te entregamos una propuesta clara: alcance, tiempo de desarrollo y precio.",
  },
  {
    icon: Rocket,
    title: "Entrega",
    description:
      "Desarrollamos, instalamos y configuramos el sistema en tu negocio. Capacitamos a tu equipo con manuales de usuario incluidos.",
  },
  {
    icon: LifeBuoy,
    title: "Seguimiento y soporte",
    description:
      "Te acompañamos después de la entrega: ajustes, mejoras y soporte continuo para que el sistema crezca contigo.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-b border-border bg-muted/40 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Un proceso simple, de principio a fin"
          description="Cinco pasos claros para llevar tu negocio del desorden a la automatización."
        />

        <ol className="relative mx-auto mt-14 max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-6 w-px bg-border sm:left-7"
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-10 last:pb-0">
              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-gold-strong sm:size-14">
                <step.icon className="size-5 sm:size-6" />
              </span>
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gold-strong">
                    Paso {index + 1}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
