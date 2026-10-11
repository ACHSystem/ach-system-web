import { useState } from "react"
import {
  TbMail,
  TbPhone,
  TbClock,
  TbMapPin,
  TbSend,
  TbCircleCheck,
} from "react-icons/tb"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/brand-icons"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { site, whatsappLink } from "@/config/site"

const reasons = [
  "Sistema para Empresa Personal",
  "Sistema de Gestión",
  "Sistema Médico / Consultorio / Historias Médicas",
  "Necesito Asesoría",
  "Sistema Administrativo",
  "Sistema para Control de Donativos",
  "Otro sistema",
]

const directLinks = [
  { label: "WhatsApp", href: whatsappLink(), icon: WhatsAppIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedInIcon },
  { label: "Telegram", href: site.social.telegram, icon: TelegramIcon },
]

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [reason, setReason] = useState(reasons[1])
  const [comments, setComments] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = [
      "Hola ACH Systems, quiero información.",
      `Nombre / Empresa: ${name}`,
      `Correo: ${email}`,
      `Teléfono: ${phone}`,
      `Motivo de solicitud: ${reason}`,
      comments ? `Comentarios: ${comments}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <section id="contacto" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Cuéntanos qué necesitas"
          description="Completa el formulario y te atenderemos por WhatsApp, o escríbenos directamente por cualquiera de nuestros canales."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-5">
          <Reveal className="rounded-2xl border border-border bg-card p-8 lg:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium">
                  Nombre completo o de la empresa
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={inputClass}
                    placeholder="Ej: Abastos Kairos"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium">
                  Correo electrónico
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClass}
                    placeholder="tucorreo@ejemplo.com"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium">
                  Número de teléfono
                  <input
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className={inputClass}
                    placeholder="+58 000-000-0000"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium">
                  Motivo de solicitud
                  <select
                    value={reason}
                    onChange={(event) => setReason(event.target.value)}
                    className={inputClass}
                  >
                    {reasons.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm font-medium">
                Coméntenos un poco más
                <textarea
                  value={comments}
                  onChange={(event) => setComments(event.target.value)}
                  rows={4}
                  className={inputClass}
                  placeholder="Cuéntanos sobre tu negocio y lo que necesitas automatizar."
                />
              </label>

              <Button type="submit" size="lg" className="h-12 w-full text-base">
                <TbSend className="size-5" />
                Enviar por WhatsApp
              </Button>

              {sent ? (
                <p className="flex items-center gap-2 text-sm text-gold-strong">
                  <TbCircleCheck className="size-4" />
                  Abrimos WhatsApp con tus datos. Si no se abrió, revisa tu
                  bloqueador de ventanas emergentes.
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal
            delay={0.12}
            className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold">Contacto directo</h3>

            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <TbMail className="mt-0.5 size-5 shrink-0 text-gold-strong" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <TbPhone className="mt-0.5 size-5 shrink-0 text-gold-strong" />
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <TbClock className="mt-0.5 size-5 shrink-0 text-gold-strong" />
                <span className="text-muted-foreground">
                  {site.contact.hours}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TbMapPin className="mt-0.5 size-5 shrink-0 text-gold-strong" />
                <span className="text-muted-foreground">{site.address}</span>
              </li>
            </ul>

            <div className="mt-auto">
              <h3 className="text-sm font-semibold">Encuéntranos en</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {directLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-gold-strong"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
