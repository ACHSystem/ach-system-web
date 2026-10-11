import type { IconType } from "react-icons"
import {
  TbLayoutDashboard,
  TbAdjustments,
  TbPalette,
  TbHeadset,
  TbFileDescription,
  TbStethoscope,
  TbCalculator,
  TbRocket,
  TbRobot,
  TbHeartHandshake,
} from "react-icons/tb"
import { RevealItem, RevealList } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

type Service = {
  icon: IconType
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: TbLayoutDashboard,
    title: "Sistemas de Gestión",
    description:
      "Una solución ideal para iniciar tu recorrido en la nueva era digital, con sistemas únicos para la gestión de tu comercio que brindan confort y aumentan la productividad.",
  },
  {
    icon: TbAdjustments,
    title: "Sistemas Personalizados",
    description:
      "Diseñamos sistemas a la medida, totalmente exclusivos y adaptados a los conocimientos de tus empleados, otorgándote manejabilidad y adaptabilidad.",
  },
  {
    icon: TbPalette,
    title: "Diseño de Sistemas",
    description:
      "Especialistas en diseño y análisis de sistemas para que tengas un proyecto único, con funcionalidad y apariencia acordes a tu labor y a tu identidad organizativa.",
  },
  {
    icon: TbHeadset,
    title: "Asesorías Gratuitas",
    description:
      "Si no posees conocimientos sobre los requerimientos para automatizar tu organización, solicita una visita totalmente gratuita. Nuestros asesores aclaran todas tus dudas.",
  },
  {
    icon: TbFileDescription,
    title: "Sistemas para Historias Médicas",
    description:
      "Contamos con personal capacitado en el área de la salud, capaz de brindarte soluciones ideales y sistemas dedicados exclusivamente a la elaboración de historias médicas.",
  },
  {
    icon: TbStethoscope,
    title: "Sistemas para Consultorios Médicos",
    description:
      "Conocemos la importancia de un correcto registro para atender a tus pacientes. Diseñamos sistemas según tu especialidad, con registro automatizado de tus servicios.",
  },
  {
    icon: TbCalculator,
    title: "Sistemas Administrativos",
    description:
      "¿Tu empresa pertenece al comercio informal y deseas llevar el registro de tus ventas? Nos adaptamos al tamaño de tu comercio con sistemas administrativos simples y manejables.",
  },
  {
    icon: TbRocket,
    title: "Sistemas para Emprendedores",
    description:
      "Si estás iniciando en el mundo digital, tenemos sistemas ideales para ti: tu negocio online basado en plantillas prediseñadas, adaptándonos a tu presupuesto.",
  },
  {
    icon: TbRobot,
    title: "Integración con Inteligencia Artificial",
    description:
      "Cualquiera de nuestros sistemas puede integrarse con inteligencia artificial, dándole un toque actualizado y predictivo. Solicítala por costo adicional.",
  },
  {
    icon: TbHeartHandshake,
    title: "Sistemas de Control para Donativos",
    description:
      "Facilita el control de entradas y salidas de cualquier fundación. Simple, cómoda e intuitiva, integra herramientas de control profesional con rastreo de cada movimiento.",
  },
]

export function Services() {
  return (
    <section
      id="servicios"
      className="border-b border-border bg-muted/40 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Descubre nuestros servicios"
          description="Soluciones de software pensadas para cada tipo de negocio, desde emprendimientos hasta organizaciones del sector salud y administrativo."
        />

        <RevealList className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem
              key={service.title}
              className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-accent text-gold-strong">
                <service.icon className="size-6" />
              </span>
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  )
}
