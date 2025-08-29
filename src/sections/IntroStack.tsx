import React, { useMemo } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

// Superpose deux messages et croise leur opacité/translation selon le scroll, effet Apple-like
const IntroStack: React.FC = () => {
  const { ref, progress } = useScrollProgress<HTMLDivElement>()

  const firstStyle = useMemo(() => {
    const opacity = 1 - Math.min(1, progress * 2)
    const translate = Math.min(1, progress * 2) * 24
    return { opacity, transform: `translateY(${translate}px)` }
  }, [progress])

  const secondStyle = useMemo(() => {
    const start = 0.35
    const p = Math.max(0, Math.min(1, (progress - start) / (1 - start)))
    const opacity = p
    const translate = (1 - p) * 24
    return { opacity, transform: `translateY(${translate}px)` }
  }, [progress])

  return (
    <section ref={ref} className="section-viewport relative flex items-center">
      <div className="container-elegant">
        <div className="relative mx-auto grid max-w-5xl place-items-center">
          {/* Message 1 */}
          <h1
            style={firstStyle as React.CSSProperties}
            className="pointer-events-none col-start-1 row-start-1 text-center text-4xl font-semibold tracking-tight text-bridal-ink md:text-7xl"
          >
            Petite surprise pour nos mariés préférés !
          </h1>

          {/* Message 2 */}
          <h2
            style={secondStyle as React.CSSProperties}
            className="pointer-events-none col-start-1 row-start-1 text-center text-3xl font-semibold tracking-tight text-bridal-ink md:text-6xl"
          >
            Voici un petit remerciement de la part de vos invités.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default IntroStack


