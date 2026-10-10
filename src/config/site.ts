export const site = {
  name: "ACH Systems",
  tagline: "Innovación para la eficiencia",
  description:
    "Desarrollo de software a medida para PYMES. Creamos sistemas que automatizan tus procesos y resuelven problemas concretos de tu negocio.",
  locations: ["San Francisco, Zulia", "Maracaibo, Zulia"],
  country: "Venezuela",

  contact: {
    whatsappNumber: "584000000000",
    whatsappMessage:
      "Hola ACH Systems, quiero información sobre un sistema a medida para mi negocio.",
    scheduleUrl: "https://calendly.com/ach-systems/reunion",
    email: "contacto@achsystems.com",
  },

  social: {
    whatsapp: "https://wa.me/584000000000",
    instagram: "https://instagram.com/ach.systems",
    telegram: "https://t.me/achsystems",
    linkedin: "https://www.linkedin.com/company/ach-systems",
  },
} as const

export function whatsappLink(message: string = site.contact.whatsappMessage) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
