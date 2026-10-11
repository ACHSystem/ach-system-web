import { Link } from "react-router-dom"
import { TbArrowRight, TbMapPin } from "react-icons/tb"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"

export function Portfolio() {
  return (
    <section
      id="casos"
      className="border-b border-border bg-muted/40 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portafolio 2026"
          title="Sistemas que ya están trabajando"
          description="Nuestro sistema de ventas está instalado y operando en negocios reales de San Francisco, Zulia, con resultados según los requerimientos de cada cliente."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.12} className="h-full">
              <Link
                to={`/portafolio/${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/60"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-gold-strong">
                    <project.icon className="size-6" />
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
                    {project.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">{project.client}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <TbMapPin className="size-3.5" />
                  {project.location}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-strong">
                  Ver caso completo
                  <TbArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
            <Link to="/portafolio">
              Ver todo el portafolio
              <TbArrowRight className="size-5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
