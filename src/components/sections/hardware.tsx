import {
  BatteryCharging,
  Cpu,
  HardDrive,
  Keyboard,
  Monitor,
  Mouse,
  Printer,
  ShieldCheck,
} from "lucide-react"
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { whatsappLink } from "@/config/site"

const equipment = [
  { icon: Cpu, label: "Computadoras (CPU)" },
  { icon: Monitor, label: "Pantallas y monitores" },
  { icon: Keyboard, label: "Teclados" },
  { icon: Mouse, label: "Mouse" },
  { icon: Printer, label: "Impresoras" },
  { icon: HardDrive, label: "Almacenamiento y discos" },
  { icon: BatteryCharging, label: "Reguladores y UPS" },
  { icon: ShieldCheck, label: "Accesorios y periféricos" },
]

export function Hardware() {
  return (
    <section
      id="equipos"
      className="border-b border-border bg-muted/40 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Equipos y hardware"
              title="También te equipamos, con garantía"
              description="Además del software, somos distribuidores de los equipos físicos que tu negocio necesita. Te asesoramos, instalamos y respaldamos cada producto con garantía."
            />

            <Button asChild className="mt-8">
              <a
                href={whatsappLink(
                  "Hola ACH Systems, quiero información sobre equipos y hardware."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar equipos disponibles
              </a>
            </Button>
          </Reveal>

          <RevealList
            stagger={0.06}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2"
          >
            {equipment.map((item) => (
              <RevealItem
                key={item.label}
                className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-gold-strong">
                  <item.icon className="size-5" />
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </RevealItem>
            ))}
          </RevealList>
        </div>

        <Reveal className="mt-10 flex items-start gap-3 rounded-xl border border-primary/40 bg-card p-5">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold-strong" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Todos los equipos incluyen asesoría de compra, configuración con tu
            sistema y garantía. Si algo falla, nos encargamos.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
