import type { IconType } from "react-icons"
import {
  TbDeviceLaptop,
  TbBuildingStore,
  TbStethoscope,
  TbRobot,
  TbHeartHandshake,
  TbChartHistogram,
} from "react-icons/tb"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

type Project = {
  title: string
  description: string
  icon: IconType
}

const projects: Project[] = [
  {
    icon: TbDeviceLaptop,
    title: "Proyecto 1",
    description:
      "Portafolio detallado de este proyecto, con galerías, descripciones y resultados clave obtenidos durante su implementación.",
  },
  {
    icon: TbBuildingStore,
    title: "Proyecto 2",
    description:
      "Una colección completa de trabajos relacionados, incluyendo el proceso de desarrollo y los entregables finales.",
  },
  {
    icon: TbStethoscope,
    title: "Proyecto 3",
    description:
      "Portafolio visual donde podrás revisar ejemplos, casos de éxito y el enfoque creativo aplicado en el sector salud.",
  },
  {
    icon: TbChartHistogram,
    title: "Proyecto 4",
    description:
      "Una sección dedicada con más información, imágenes y detalles técnicos de cada sistema desarrollado.",
  },
  {
    icon: TbRobot,
    title: "Proyecto 5",
    description:
      "Portafolio de este servicio con una vista organizada de trabajos anteriores y resultados medibles.",
  },
  {
    icon: TbHeartHandshake,
    title: "Proyecto 6",
    description:
      "Un portafolio independiente, ideal para presentar este tipo de trabajo y el alcance de nuestras soluciones.",
  },
]

export function Portfolio() {
  return (
    <section
      id="casos"
      className="border-b border-border bg-muted/40 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portafolio 2026"
          title="Explora nuestro portafolio interactivo"
          description="Una muestra del trabajo que realizamos para negocios y organizaciones de distintos sectores."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-gold-strong">
                <project.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
