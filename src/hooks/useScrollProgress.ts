import { useEffect, useRef, useState } from 'react'

// Retourne un progrès de scroll 0->1 à l'intérieur d'un conteneur observé
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const start = viewportHeight
      const end = -rect.height
      const p = (rect.top - start) / (end - start)
      const clamped = Math.min(1, Math.max(0, p))
      setProgress(clamped)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { ref, progress }
}


