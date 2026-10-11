import { TbCircleCheck as CheckCircle2 } from "react-icons/tb"
import { RevealItem, RevealList } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const profiles = [
  "Llevas el control de tu negocio en cuadernos, Excel o de memoria.",
  "Cometes errores al facturar o al cuadrar la caja del día.",
  "Tienes inventario y no sabes con exactitud qué te queda ni qué se vence.",
  "Trabajas por turnos y necesitas controlar el cierre de cada uno.",
  "Necesitas reportes claros de ventas, gastos y ganancias.",
  "Quieres crecer sin contratar más personal administrativo.",
  "Tu negocio es único y los sistemas genéricos no se adaptan a ti.",
  "Quieres dar el salto digital con alguien que te acompañe de cerca.",
]

export function ForWho() {
  return (
    <section id="para-ti" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Para quién"
          title="Este servicio es para ti si…"
          description="Si te reconoces en alguna de estas situaciones, un sistema a medida puede transformar la manera en que opera tu negocio."
        />

        <RevealList className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles.map((item) => (
            <RevealItem
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-strong" />
              <span className="text-sm leading-relaxed text-foreground">
                {item}
              </span>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  )
}
