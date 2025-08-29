import React from 'react'
import { useInView } from '../hooks/useInView'

// Section 2: message de remerciement plein écran avec apparition subtile
const SurpriseMessageSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className="section-viewport relative flex items-center bg-gradient-to-b from-bridal-blush/40 via-bridal-white to-bridal-violet/30">
      <div className="container-elegant">
        <div className={`mx-auto max-w-4xl text-center ${inView ? 'animate-fadeUp' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl font-semibold tracking-tight text-bridal-ink md:text-7xl">
            Merci pour tout…
          </h2>
        </div>
      </div>
    </section>
  )
}

export default SurpriseMessageSection


