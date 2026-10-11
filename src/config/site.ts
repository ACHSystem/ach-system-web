export const site = {
  name: "ACH Systems",
  tagline: "Innovación para la eficiencia",
  description:
    "Diseñamos y desarrollamos sistemas de gestión a la medida para automatizar y optimizar los procesos de tu negocio. Software intuitivo, seguro y adaptado a tus necesidades.",
  locations: ["San Francisco, Zulia"],
  country: "Venezuela",
  address:
    "San Francisco, Estado Zulia, Sector El Silencio, Av 49B Calle 152, Zona Postal 4004",

  contact: {
    whatsappNumber: "584146700191",
    whatsappMessage:
      "Hola ACH Systems, quiero información sobre un sistema a medida para mi negocio.",
    phone: "+58 414-670-0191",
    email: "achsystems2025@gmail.com",
    hours: "Abiertos desde las 10 A.M. a 11:30 P.M.",
    scheduleUrl:
      "https://wa.me/584146700191?text=Hola%20ACH%20Systems%2C%20quiero%20agendar%20una%20visita%20t%C3%A9cnica%20gratuita.",
  },

  social: {
    whatsapp: "https://wa.me/584146700191",
    instagram: "https://www.instagram.com/achsystems2025",
    facebook: "https://www.facebook.com/achsystems2025",
    telegram: "https://www.telegram.com",
    linkedin: "https://www.linkedin.com",
  },
} as const

export function whatsappLink(message: string = site.contact.whatsappMessage) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
