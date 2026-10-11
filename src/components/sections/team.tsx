import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const team = [
  {
    initials: "AC",
    name: "Ing. Aixa Chacín",
    role: "Ingeniera de Sistemas · Estudiante de Medicina",
    description:
      "Ingeniera de Sistemas, estudiante de Medicina, Asistente de Farmacia Avanzado y Diseñadora de Marketing Médico. Es tu aliada ideal en diseños de sistemas y personalización general, especializada en la atención de requerimientos para sistemas médicos. Evalúa qué sistema necesitas y realiza modelos base para que tengas interacción total con tu proyecto.",
    skills: [
      "CCS",
      "JavaScript",
      "Python",
      "Photoshop",
      "Adobe Illustrator",
      "Canvas Pro",
    ],
  },
  {
    initials: "ER",
    name: "Ing. Eduardo Rojas",
    role: "Analista de Sistemas · Ingeniero de Sistemas",
    description:
      "Analista e Ingeniero de Sistemas, estudiante de Licenciatura en Computación y Desarrollador Web / Escritorio. Es nuestro especialista en el desarrollo e implementación de sistemas, ideal para crear soluciones eficientes y funcionales que aumenten la productividad de los usuarios. Diseñador de Back End con dominio de múltiples lenguajes y frameworks.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "VB.NET",
      "C",
      "Python",
      "Laravel",
      "React.js",
    ],
  },
]

export function Team() {
  return (
    <section id="equipo" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quiénes te atienden"
          title="Personas reales detrás de tu sistema"
          description="Trabajarás directamente con los ingenieros que analizan y construyen tu proyecto. Sin intermediarios."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {team.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.12} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {person.initials}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {person.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {person.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
