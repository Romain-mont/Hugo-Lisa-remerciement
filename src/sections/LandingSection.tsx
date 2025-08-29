import React from 'react'
import { useInView } from '../hooks/useInView'

// Section 1: message d'accueil
const LandingSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className="section-viewport relative flex items-center bg-gradient-to-b from-bridal-violet/30 via-bridal-blush/40 to-bridal-blue/30">
      <div className="container-elegant">
        <div className={`mx-auto max-w-4xl text-center ${inView ? 'animate-fadeUp' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl font-semibold tracking-tight text-bridal-ink md:text-8xl">
            Hugo&Lisa
          </h1>
        </div>
      </div>
    </section>
  )
}

export default LandingSection


