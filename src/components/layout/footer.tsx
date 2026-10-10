import {
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/brand-icons"
import logo from "@/assets/logo.png"
import { site, whatsappLink } from "@/config/site"

const socialLinks = [
  {
    label: "WhatsApp",
    href: whatsappLink(),
    icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    icon: InstagramIcon,
  },
  {
    label: "Telegram",
    href: site.social.telegram,
    icon: TelegramIcon,
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    icon: LinkedInIcon,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt={`Logotipo de ${site.name}`}
              className="h-10 w-10 rounded-md object-cover"
            />
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold">{site.name}</span>
              <span className="text-xs text-muted-foreground">
                {site.tagline}
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              {site.locations.join(" · ")}
            </li>
            <li>{site.country}</li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-foreground"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Síguenos</h3>
          <div className="mt-4 flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
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
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
