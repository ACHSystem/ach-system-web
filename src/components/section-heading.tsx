import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold tracking-[0.2em] text-gold-strong uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
