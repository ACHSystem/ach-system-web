import { Link, Navigate, useParams } from "react-router-dom"
import type { IconType } from "react-icons"
import {
  TbArrowLeft,
  TbArrowRight,
  TbMapPin,
  TbBriefcase,
  TbAlertTriangle,
  TbBulb,
  TbSettings,
  TbChecklist,
  TbChartHistogram,
  TbCpu,
  TbCircleCheck,
} from "react-icons/tb"
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/data/projects"
import { whatsappLink } from "@/config/site"

type BlockProps = {
  icon: IconType
  title: string
  children: React.ReactNode
}

function Block({ icon: Icon, title, children }: BlockProps) {
  return (
    <Reveal className="rounded-2xl border border-border bg-card p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-gold-strong">
          <Icon className="size-6" />
        </span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </Reveal>
  )
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/portafolio" replace />
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            to="/portafolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <TbArrowLeft className="size-4" />
            Volver al portafolio
          </Link>
        </Reveal>

        <Reveal className="mt-8 flex flex-col gap-6 rounded-3xl border border-primary/40 bg-card p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex size-14 items-center justify-center rounded-xl bg-accent text-gold-strong">
              <project.icon className="size-7" />
            </span>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
              {project.tag}
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-balance sm:text-4xl">
              {project.client}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <TbMapPin className="size-4 text-gold-strong" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <TbBriefcase className="size-4 text-gold-strong" />
                {project.sector}
              </span>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground text-pretty">
            {project.summary}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Block icon={TbAlertTriangle} title="El reto">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </Block>

            <Block icon={TbBulb} title="La solución">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </Block>

            <Block icon={TbSettings} title="Cómo funciona">
              <RevealList ordered className="flex flex-col gap-3">
                {project.howItWorks.map((step) => (
                  <RevealItem key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <TbCircleCheck className="size-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {step}
                    </span>
                  </RevealItem>
                ))}
              </RevealList>
            </Block>

            <Block icon={TbChecklist} title="Funciones incluidas">
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                  >
                    <TbCircleCheck className="mt-0.5 size-4 shrink-0 text-gold-strong" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-gold-strong">
                  <TbChartHistogram className="size-6" />
                </span>
                <h2 className="text-lg font-semibold">Resultados</h2>
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <TbCircleCheck className="mt-0.5 size-4 shrink-0 text-gold-strong" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-gold-strong">
                  <TbCpu className="size-6" />
                </span>
                <h2 className="text-lg font-semibold">Tecnologías</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-2xl border border-primary/40 bg-card p-8">
              <h2 className="text-lg font-semibold">
                ¿Necesitas algo parecido?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Diseñamos un sistema a la medida para tu negocio con las mismas
                bases que usamos en este proyecto.
              </p>
              <Button asChild className="mt-6 w-full">
                <a
                  href={whatsappLink(
                    `Hola ACH Systems, quiero un sistema similar al caso de ${project.client}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar información
                  <TbArrowRight className="size-4" />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
