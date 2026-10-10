import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"

const faqs = [
  {
    question: "¿Cuánto tiempo tardan en desarrollar mi sistema?",
    answer:
      "Depende del alcance. Un sistema base puede estar listo en 2 a 4 semanas, y uno más completo con turnos, inventario y reportes entre 4 y 8 semanas. En la propuesta te damos un tiempo estimado concreto.",
  },
  {
    question: "¿Qué necesito tener o comprar para empezar?",
    answer:
      "Con un equipo (computadora) y una conexión básica es suficiente. Si no cuentas con él, te asesoramos y te vendemos el hardware con garantía. Nosotros nos encargamos de la instalación y la configuración completa.",
  },
  {
    question: "¿Cuánto tiempo pasa hasta ver resultados?",
    answer:
      "Desde la instalación. La mayoría de nuestros clientes nota mejoras en el control, la organización y la reducción de errores en las primeras semanas de uso del sistema.",
  },
  {
    question: "¿El precio de $100 a $800 es fijo?",
    answer:
      "Es un rango de referencia. El monto final depende de las funciones, la cantidad de usuarios y el nivel de personalización. Antes de comenzar siempre recibes una propuesta con precio cerrado.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer:
      "Sí. Incluimos soporte inicial tras la entrega y contamos con planes de seguimiento para ajustes, mejoras y mantenimiento continuo de tu sistema.",
  },
  {
    question: "¿Trabajan fuera de San Francisco y Maracaibo?",
    answer:
      "Nuestra base está en San Francisco y Maracaibo, estado Zulia. Para otras zonas podemos coordinar visitas puntuales y gran parte del trabajo de forma remota.",
  },
  {
    question: "¿Qué pasa si mi negocio tiene necesidades muy específicas?",
    answer:
      "Ese es justamente nuestro enfoque: software a medida. Analizamos tu caso particular y construimos una solución que se adapte a tu forma de trabajar, no al revés.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer:
      "Trabajamos por fases: un adelanto para iniciar el proyecto y el resto al momento de la entrega. El esquema exacto lo acordamos contigo en la propuesta.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Lo que más nos preguntan antes de empezar un proyecto."
        />

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
