import { useState } from "react"
import { Link } from "react-router-dom"
import { TbArrowRight as ArrowRight, TbMenu2 as Menu, TbClock, TbMail, TbPhone } from "react-icons/tb"
import logo from "@/assets/logo.png"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/brand-icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { site, whatsappLink } from "@/config/site"

const navItems = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Precios", href: "/#precios" },
  { label: "Documentos", href: "/#documentos" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "FAQ", href: "/#faq" },
]

const topSocial = [
  { label: "WhatsApp", href: whatsappLink(), icon: WhatsAppIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedInIcon },
  { label: "Telegram", href: site.social.telegram, icon: TelegramIcon },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="hidden border-b border-border/70 md:block">
        <div className="mx-auto flex h-9 w-full max-w-[1440px] items-center justify-between gap-4 px-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5">
            <TbClock className="size-4 text-gold-strong" />
            {site.contact.hours}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <TbMail className="size-4 text-gold-strong" />
              {site.contact.email}
            </a>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <TbPhone className="size-4 text-gold-strong" />
              {site.contact.phone}
            </a>
            <span className="flex items-center gap-1">
              {topSocial.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex size-6 items-center justify-center rounded-full transition-colors hover:text-gold-strong"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md"
          aria-label={`${site.name} - inicio`}
        >
          <img
            src={logo}
            alt={`Logotipo de ${site.name}`}
            className="h-9 w-9 rounded-md object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight">
              {site.name}
            </span>
            <span className="text-[10px] tracking-wide text-muted-foreground">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar
              <ArrowRight className="size-4" />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Navegación móvil"
                className="flex flex-col gap-1 px-4"
              >
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-2">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactar por WhatsApp
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
