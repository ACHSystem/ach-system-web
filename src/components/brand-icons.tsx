import {
  TbBrandWhatsapp,
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandLinkedin,
  TbBrandFacebook,
} from "react-icons/tb"

type IconProps = {
  className?: string
}

export function WhatsAppIcon({ className }: IconProps) {
  return <TbBrandWhatsapp className={className} aria-hidden="true" />
}

export function InstagramIcon({ className }: IconProps) {
  return <TbBrandInstagram className={className} aria-hidden="true" />
}

export function TelegramIcon({ className }: IconProps) {
  return <TbBrandTelegram className={className} aria-hidden="true" />
}

export function LinkedInIcon({ className }: IconProps) {
  return <TbBrandLinkedin className={className} aria-hidden="true" />
}

export function FacebookIcon({ className }: IconProps) {
  return <TbBrandFacebook className={className} aria-hidden="true" />
}
