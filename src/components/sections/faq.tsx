import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const faqGroups = [
  {
    category: "Visitas técnicas y equipos",
    items: [
      {
        question: "¿Qué sistema necesito?",
        answer:
          "No existe una única respuesta: cada emprendedor o microempresa tiene un sistema adaptable a su presupuesto. Nuestros ingenieros analizan tu rubro y tus funciones para recomendarte la solución ideal, sin sobredimensionar.",
      },
      {
        question: "¿Puedo personalizar el sistema?",
        answer:
          "Sí. Todos nuestros sistemas son totalmente adaptables según el tamaño de tu negocio, la disponibilidad presupuestaria o condiciones especiales.",
      },
      {
        question:
          "Nunca he trabajado con sistemas de gestión, ¿cómo puedo comprar los equipos por primera vez?",
        answer:
          "Te acompañamos gratis en la adquisición de tus primeros equipos. Puedes seleccionar el equipo al alcance de tu economía, sin intervención de terceros ni comisiones durante la compra.",
      },
      {
        question:
          "¿Cómo puedo saber las especificaciones de los equipos que debo adquirir para el sistema?",
        answer:
          "Las especificaciones requeridas se detallan en la parte inferior de la hoja de solicitud de costos que te entrega el asesor que realizó la visita técnica.",
      },
      {
        question:
          "Visita técnica gratis y acompañamiento para la adquisición de equipos: ¿en qué consiste?",
        answer:
          "Es una asesoría presencial u online completamente gratuita. Te orientamos durante la adquisición del nuevo sistema, definiendo funciones específicas según tu rubro, y también durante la compra de tus primeros equipos.",
      },
      {
        question:
          "Hoja Excel para ventas con margen de ganancia y punto de equilibrio: ¿en qué consiste?",
        answer:
          "Es una herramienta de apoyo en Excel que calcula el porcentaje de ganancia por producto y el punto de equilibrio, para evaluar pérdidas o ganancias según el precio de compra. Su costo es de 50$ a tasa B.C.V.",
      },
    ],
  },
  {
    category: "Visita secundaria, reestructuraciones y capacitación",
    items: [
      {
        question:
          "Necesito otra visita, conversé con mi personal y debo reestructurar funciones.",
        answer:
          "Los cambios de apariencia (colores, menú, tipografía de recibos) no requieren visita. Si el cambio es funcional, se necesita una visita secundaria para reestructuraciones del sistema, con un costo promedio entre 10$ y 80$ según la envergadura.",
      },
      {
        question: "Quiero otro sistema, ¿necesito otra visita?",
        answer:
          "Sí. La visita secundaria también permite cambiar el sistema previamente acordado por otro totalmente distinto, en caso de que lo necesites.",
      },
      {
        question: "¿Incluye la capacitación a mí y a todo mi personal?",
        answer:
          "Sí. La capacitación total se realiza el mismo día de la instalación y cubre a cada miembro del personal según su rango (administradores, cajeros, supervisores), sin límite de tiempo. Además incluye 19 días de acompañamiento con visitas cortas o soporte telefónico.",
      },
      {
        question: "¿Qué diferencia tiene este sistema con un sistema homologado?",
        answer:
          "Un sistema homologado está certificado por el SENIAT: genera documentos con validez fiscal, tiene una licencia anual de 500$ a 700$ por equipo y suma el costo de la máquina fiscal (740$ a 1.300$ + IVA). Nuestros sistemas de recibos son de uso interno: no tienen validez tributaria ni generan crédito fiscal, y por eso su costo es mucho menor.",
      },
      {
        question:
          "Visita secundaria para reestructuraciones, rediseño y capacitaciones adicionales: ¿en qué consiste?",
        answer:
          "La visita secundaria cubre la modificación solicitada por el cliente. El soporte técnico posterior a los 20 días de garantía tiene un costo de 10$ de forma online, y una capacitación adicional, posterior al plazo, cuesta 15$ e incluye a un miembro del sistema. Todos los sistemas incluyen 20 días de garantía por soporte online total.",
      },
      {
        question:
          "Reestructurar o modificar una función del sistema que actualmente funciona: ¿cuánto cuesta?",
        answer:
          "Sus costos oscilan desde 20$ hasta 400$ según la envergadura del cambio, ya que el sistema está trabajando en tiempo real y el equipo debe garantizar que no se detenga la actividad. Solo se toman proyectos viables: no integramos varios rubros en un mismo sistema.",
      },
    ],
  },
  {
    category: "Elaboración de inventario",
    items: [
      {
        question:
          "Para la elaboración de inventario, ¿cómo pueden hacerlo mientras yo tengo ventas?",
        answer:
          "Se realiza con un equipo de 2 a 10 personas según el tamaño, y a partir de las 12 AM en comercios de horario corrido (abastos o ventas minoristas), para no afectar tu horario de mayor auge.",
      },
      {
        question:
          "¿Cuáles son los criterios para la elaboración de inventarios y qué incluye?",
        answer:
          "Incluye la carga total de productos a sistemas de ACH Systems y la entrega física y digital de una hoja Excel ordenada. Los criterios son: menor personal posible en el local, cámaras activas y grabando, orden y transparencia de los productos, y aclarar presentaciones especiales o nombres esenciales. No incluye productos por peso ni balanzas.",
      },
      {
        question:
          "Si contrato la realización de inventario antes de abrir el negocio, ¿necesitan aval de compra?",
        answer:
          "Sí. En el inventario pre venta se verifica el aval de compra (recibo, factura o nota) y el documento debe coincidir con la carga física. Si no existe aval previo, ACH Systems informa oportunamente cualquier incidencia. Lo realiza un equipo de 2 a 4 personas en horario acordado.",
      },
      {
        question: "¿Por qué la diferencia de precios de la pre venta y la in venta?",
        answer:
          "La diferencia radica en el aval, el tiempo y horario de trabajo y la cantidad de personal. El inventario in venta va desde 180$ (micro) hasta 750$ (grandes comercios), mientras que el pre venta va desde 80$ (micro) hasta 250$ (grandes comercios). Los precios son referenciales y varían según cada caso.",
      },
    ],
  },
  {
    category: "Mantenimiento del sistema",
    items: [
      {
        question:
          "¿Es obligatorio el mantenimiento cuatrimestral que menciona el asesor?",
        answer:
          "No es indispensable al límite, pero sí necesario para evitar errores de saturación del sistema. Se recomienda después del sexto mes de uso y tiene un costo de 30$ hasta el momento de la emisión de este documento.",
      },
      {
        question:
          "¿Puede hacerlo alguien más que no sea del equipo ACH Systems?",
        answer:
          "No. El mantenimiento no puede realizarlo nadie externo al equipo de ACH Systems; si sucede, no nos hacemos responsables por daños al sistema o pérdida de datos, lo que puede incurrir en costos elevados de reparación.",
      },
      {
        question:
          "¿Qué sucede si no puedo realizar el mantenimiento a tiempo? ¿Qué incluye?",
        answer:
          "Se pueden perder datos recientes o el sistema se ejecuta más lento por falta de optimización. Incluye respaldo de información actualizada, eliminación de productos duplicados, correcciones de velocidad y actualización de datos o logos.",
      },
      {
        question:
          "¿Puedo realizar algún cambio de función durante el mantenimiento del sistema ya instalado?",
        answer:
          "El mantenimiento no cubre cambios de funciones, solo algunos ajustes de apariencia. Para cambios funcionales es necesario solicitar una visita secundaria para analizar la posibilidad del requerimiento.",
      },
    ],
  },
  {
    category: "Balanzas, diseño y logo",
    items: [
      {
        question:
          "Trabajo con productos que se pesan y quiero una balanza con etiquetas, ¿se puede integrar con el sistema?",
        answer:
          "Sí. Se programa la balanza, se diseña la etiqueta y se establecen los códigos. Al ser un dispositivo externo, lo realiza una empresa aliada y tiene costo adicional: 150$ para las RONGTA y 170$ para las ROCCIA. ACH Systems brinda garantía únicamente de instalación.",
      },
      {
        question: "¿Cómo puedo cargar los datos a la balanza?",
        answer:
          "La alimentación de datos se realiza mediante el inventario convencional y una aplicación externa; la capacitación para usar dicha aplicación es gratuita. Si requiere que ACH Systems cargue los productos directamente al inventario, el monto adicional es de 20$ a 50$ según la cantidad de productos.",
      },
      {
        question:
          "No tengo logos ni diseño empresarial, ¿tiene algún paquete que lo incluya?",
        answer:
          "Sí. Ofrecemos diseño de logos, entregados en formato PNG y JPGE, además de dar identidad y personalización a tu sistema. El costo depende del tamaño de tu comercio y va desde 10$ hasta 30$.",
      },
    ],
  },
  {
    category: "Red y cableado",
    items: [
      {
        question:
          "¿Se va a caer el sistema si se va el internet? ¿Funciona con WI-FI?",
        answer:
          "No. La mayoría de nuestros sistemas de gestión son bimodales y funcionan con conexiones locales además de la WIFI. Ninguno se cae ni sufre pérdidas al irse el internet, siempre que se les dé el mantenimiento cuatrimestral requerido.",
      },
      {
        question:
          "Mi router no tiene espacio, tengo cámaras y otras cosas conectadas y solo tiene un puerto, ¿cómo harán la conexión con las computadoras?",
        answer:
          "Si piensas instalar un sistema de 2 o más equipos, se solicita como requerimiento un switch automático, que funciona como puerto principal para la ruta de información y la interconexión entre equipos. Contamos con una amplia variedad de switches con garantía; consulta el costo con un asesor.",
      },
      {
        question:
          "Compré cable de red, ¿todos son iguales?, ¿cómo sé cuántos metros se requieren y cómo lo instalo?",
        answer:
          "Usualmente se solicita cable CAT 5E para interiores 70% cobre (y para exteriores en tramos largos), ya que el cobre da mayor estabilidad y durabilidad que el aluminio. Podemos trabajar con el cable que proporciones: realizamos ponchado, soportes de seguridad, cortado e instalación desde 10$ a 80$ según la cantidad de equipos; para administrador y caja el mínimo es de 10$.",
      },
    ],
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Lo que más nos preguntan antes de empezar un proyecto."
        />

        <Reveal className="mt-12 w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqGroups.map((group, groupIndex) => (
              <div key={group.category} className="mt-10 first:mt-0">
                <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold-strong uppercase">
                  {group.category}
                </h3>
                {group.items.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${groupIndex}-${index}`}
                  >
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
