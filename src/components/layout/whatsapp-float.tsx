import { WhatsAppIcon } from "@/components/brand-icons"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { whatsappLink } from "@/config/site"

export function WhatsAppFloat() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escríbenos por WhatsApp"
          className="fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:right-6 sm:bottom-6"
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">Escríbenos por WhatsApp</TooltipContent>
    </Tooltip>
  )
}
