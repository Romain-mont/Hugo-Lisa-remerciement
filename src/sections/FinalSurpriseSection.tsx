import React from 'react'
import { useInView } from '../hooks/useInView'

// Section finale: grand message en noir
const FinalSurpriseSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className="section-viewport relative flex items-center bg-gradient-to-b from-bridal-violet/20 via-bridal-white to-bridal-blue/20">
      <div className="container-elegant">
        <div className={`mx-auto max-w-5xl text-center ${inView ? 'animate-fadeUp' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-7xl">
            Vos invités ont voulu vous laisser un petit mot...
          </h2>
        </div>
      </div>
    </section>
  )
}

export default FinalSurpriseSection


