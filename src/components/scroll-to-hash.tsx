import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const HEADER_OFFSET = 96

export function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        requestAnimationFrame(() => {
          const top =
            element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
          window.scrollTo({ top, behavior: "smooth" })
        })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.key, location.hash])

  return null
}
