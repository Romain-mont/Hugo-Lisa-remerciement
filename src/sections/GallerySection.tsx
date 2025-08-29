import React from 'react'
import { videos } from '../data/videos'
import { useInView } from '../hooks/useInView'
import DispersedBatch from '../components/DispersedBatch'

// Section 3: galerie élégante de miniatures
const GallerySection: React.FC<{ onSelectItem: (item: any) => void }>
  = ({ onSelectItem }) => {
  const { ref } = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className="bg-gradient-to-b from-white/60 via-bridal-blush/40 to-bridal-blue/20">
      {/* Pleine largeur, empilement de vues plein écran avec snap pour une navigation fluide */}
      <div className="w-full">
        <div className="snap-y snap-mandatory h-auto">
          {Array.from({ length: Math.ceil(videos.length / 10) }, (_, i) => {
            const start = i * 10
            const end = Math.min(videos.length, start + 10)
            const slice = videos.slice(start, end)
            return (
              <div key={i} className="snap-start">
                <DispersedBatch items={slice} onSelect={onSelectItem} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GallerySection


