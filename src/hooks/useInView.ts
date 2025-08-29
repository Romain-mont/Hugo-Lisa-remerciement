import { useEffect, useRef, useState } from 'react'

// Hook: observe si un élément est visible, avec une marge pour déclencher en avance
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2, ...options }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}


