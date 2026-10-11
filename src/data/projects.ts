import type { IconType } from "react-icons"
import { TbBuildingStore, TbClock } from "react-icons/tb"

export type Project = {
  slug: string
  client: string
  location: string
  tag: string
  sector: string
  icon: IconType
  summary: string
  problem: string
  solution: string
  howItWorks: string[]
  features: string[]
  results: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: "inversiones-gustavo",
    client: "Inversiones Gustavo",
    location: "San Francisco, Zulia",
    tag: "Sistema base",
    sector: "Comercio y ventas",
    icon: TbBuildingStore,
    summary:
      "Implementación del sistema de ventas base, adaptado a los requerimientos operativos del negocio. Hoy opera a diario dando los resultados esperados.",
    problem:
      "El negocio llevaba el control de sus ventas y su caja de forma manual, lo que generaba errores de cuadre, pérdida de información y nula visibilidad de los movimientos diarios. No existía un registro ordenado que permitiera saber cuánto se vendió, qué productos salieron ni cómo cerró la caja cada jornada.",
    solution:
      "Desarrollamos e instalamos un sistema de ventas base hecho a la medida, con registro de cada operación y control de caja. Se configuró según la forma de trabajar del negocio y se capacitó al personal para que la operación diaria continuara sin fricciones.",
    howItWorks: [
      "El cajero registra cada venta desde el sistema, que calcula el total y actualiza el inventario en tiempo real.",
      "Al final de la jornada se realiza el cierre de caja, que compara lo vendido con el efectivo reportado.",
      "El sistema genera un resumen de las operaciones del día para revisión del propietario.",
    ],
    features: [
      "Registro de ventas y control de caja",
      "Actualización de inventario por venta",
      "Cierre de caja por jornada",
      "Reporte diario de operaciones",
      "Adaptado a su forma de trabajar",
    ],
    results: [
      "Operación diaria estable y sin interrupciones",
      "Reducción de errores de cuadre de caja",
      "Información de ventas centralizada y disponible",
    ],
    stack: [
      "Sistema de gestión a medida",
      "Base de datos local",
      "Operación bimodal (local + WiFi)",
    ],
  },
  {
    slug: "abastos-kairos",
    client: "Abastos Kairos",
    location: "San Francisco, Zulia",
    tag: "Versión 24h por turnos",
    sector: "Abasto / retail 24 horas",
    icon: TbClock,
    summary:
      "Versión ampliada del sistema de ventas, diseñada para operar 24 horas con separación por turnos y control de cierre independiente para cada uno.",
    problem:
      "El abasto opera de forma continua, las 24 horas, con varios turnos de personal. El control manual no permitía separar lo vendido por cada turno, saber quién registró cada operación ni cerrar caja de forma independiente, lo que dificultaba detectar diferencias y responsabilidades.",
    solution:
      "Ampliamos el sistema de ventas a una versión preparada para operar 24 horas, con separación por turnos y control de cierre independiente para cada uno. Cada usuario queda identificado en sus operaciones, garantizando trazabilidad en todo momento.",
    howItWorks: [
      "Al iniciar su turno, cada operador abre sesión y el sistema asocia sus ventas a ese turno.",
      "Cada venta queda registrada con el usuario responsable y se refleja en el inventario al instante.",
      "Al finalizar el turno se realiza un cierre independiente, que resume las operaciones de ese período.",
      "El propietario puede comparar el desempeño y los cierres de cada turno del día.",
    ],
    features: [
      "Operación continua 24 horas",
      "Control y cierre por turnos",
      "Trazabilidad por usuario",
      "Registro de ventas e inventario en tiempo real",
      "Reportes comparativos por turno",
    ],
    results: [
      "Control claro de cada turno y su cierre",
      "Trazabilidad de las operaciones por usuario",
      "Mayor transparencia y menos diferencias de caja",
    ],
    stack: [
      "Sistema de gestión a medida",
      "Control por turnos y usuarios",
      "Operación bimodal (local + WiFi)",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
