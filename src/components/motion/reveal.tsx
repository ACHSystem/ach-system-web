import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

type RevealListProps = {
  children: ReactNode
  className?: string
  stagger?: number
  ordered?: boolean
}

export function RevealList({
  children,
  className,
  stagger = 0.08,
  ordered = false,
}: RevealListProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    const Tag = ordered ? "ol" : "ul"
    return <Tag className={className}>{children}</Tag>
  }

  const Comp = ordered ? motion.ol : motion.ul

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </Comp>
  )
}

type RevealItemProps = {
  children: ReactNode
  className?: string
  y?: number
}

export function RevealItem({ children, className, y = 20 }: RevealItemProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <li className={className}>{children}</li>
  }

  return (
    <motion.li
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: EASE },
        },
      }}
    >
      {children}
    </motion.li>
  )
}
