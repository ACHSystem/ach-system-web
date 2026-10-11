import {
  TbTarget,
  TbEye,
  TbAlertTriangle,
  TbFileX,
  TbDeviceMobile,
  TbReportMedical,
} from "react-icons/tb"
import { Reveal, RevealItem, RevealList } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const values = [
  {
    icon: TbAlertTriangle,
    title: "¿Miedo al cambio? ¿O miedo a mejorar?",
    description:
      "Una empresa productiva no puede detenerse. Tenemos especialistas en diseños simples, únicos y adaptados a tu medida, sin manuales de cientos de páginas, con soporte personalizado y sistemas intuitivos pensados para manejarse con la mínima experiencia tecnológica.",
  },
  {
    icon: TbFileX,
    title: "Evita el desastre en papel",
    description:
      "¿Tienes un comercio y deseas un sistema sólo de recibos e inventarios? Nuestros ingenieros adaptan módulos ideales para tu nivel de manejabilidad, eliminando las fórmulas de Excel propensas a errores humanos.",
  },
  {
    icon: TbDeviceMobile,
    title: "Tan fácil como usar tu celular",
    description:
      "Si manejas las funciones básicas de tu teléfono, puedes manejar tu sistema. No necesitas conocimientos avanzados: nuestros sistemas son cómodos, intuitivos y diseñados para que nunca detengas tu operación.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nosotros"
          title="Diseño de sistemas a la medida y al mejor precio"
          description="Somos la primera empresa en San Francisco encargada del diseño de sistemas para gestionar tus servicios, hechos a la medida y al mejor precio."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-gold-strong">
                <TbTarget className="size-6" />
              </span>
              <h3 className="text-lg font-semibold">Misión</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Asesorar, diseñar, desarrollar e implementar soluciones de software
              innovadoras, totalmente personalizadas a cualquier usuario, que
              permiten automatizar y optimizar procesos que tradicionalmente se
              realizan de forma manual. Con herramientas de gestión precisas a
              las necesidades operativas y estratégicas de cada organización,
              nuestro compromiso está orientado a la satisfacción de nuestros
              usuarios, entregando sistemas robustos, intuitivos, seguros y de
              fácil manejo, garantizando funcionalidad y escalabilidad, siempre
              enfocándonos en dos ámbitos principales: primero en las
              necesidades y luego en los conocimientos del cliente.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Utilizamos sistemas de información que liberan a nuestros clientes
              de tareas repetitivas y propensas a errores, permitiéndoles
              enfocarse en la productividad, la creatividad y la toma de
              decisiones con el respaldo de datos precisos. Buscamos ser un
              factor clave en la mejora continua de la eficiencia y la
              competitividad en el mercado a través de la tecnología y un
              servicio al cliente excepcional.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-gold-strong">
                <TbEye className="size-6" />
              </span>
              <h3 className="text-lg font-semibold">Visión</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ser la referencia líder en soluciones de software, actuando como
              catalizador de la transformación digital para organizaciones del
              sector salud y administrativo, al ser reconocidos como el socio
              tecnológico número uno en la creación de sistemas informáticos
              para la gestión de distintos servicios que eliminen eficientemente
              el trabajo manual.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Aspiramos a empoderar organizaciones de diversos sectores —salud,
              administrativo, pequeños y grandes emprendedores, entre otros—
              para que optimicen sus operaciones mediante la automatización
              total de sus procesos, permitiendo la toma de decisiones
              informadas y alcanzando una mayor eficiencia sin precedentes,
              minimizando errores y liberando el talento humano para tareas de
              mayor valor estratégico.
            </p>
          </Reveal>
        </div>

        <RevealList className="mx-auto mt-6 grid max-w-5xl gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <RevealItem
              key={value.title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-gold-strong">
                <value.icon className="size-6" />
              </span>
              <h3 className="text-base font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </RevealItem>
          ))}
        </RevealList>

        <Reveal className="mx-auto mt-6 flex max-w-5xl items-start gap-4 rounded-2xl border border-primary/40 bg-card p-8">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-gold-strong">
            <TbReportMedical className="size-6" />
          </span>
          <div>
            <h3 className="text-base font-semibold">
              Evita perder el orden de las historias de tus pacientes
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Contamos con un equipo especializado en el diseño de sistemas
              totalmente accesibles para el personal de salud, especialmente en
              formatos para historias médicas según la especialidad. Nos
              sustentamos en trabajos presentados en el Congreso de Ingenieros
              Zulia 2024 “Ing. Emilio López” y próximamente en el Congreso
              Científico Internacional de la facultad de medicina “Dr. Eduardo
              Mora La Cruz”.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
