import { useState } from "react"
import { ArrowRight, Menu } from "lucide-react"
import logo from "@/assets/logo.png"
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
  { label: "Para quién", href: "#para-ti" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Casos", href: "#casos" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
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
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
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
                    <a
                      href={item.href}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </a>
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
