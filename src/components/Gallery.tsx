import React, { useEffect, useMemo, useRef, useState } from 'react'
import Thumbnail from './Thumbnail'
import type { VideoItem } from '../data/videos'

export type GalleryProps = {
  items: VideoItem[]
  onSelect: (item: VideoItem) => void
}

// Grille responsive de miniatures adaptatives
const Gallery: React.FC<GalleryProps> = ({ items, onSelect }) => {
  // Infinite scroll: charge par lots de 10
  const BATCH = 10
  const [visibleCount, setVisibleCount] = useState(BATCH)
  const current = useMemo(() => items.slice(0, visibleCount), [items, visibleCount])
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  // Observe la sentinelle pour charger le lot suivant
  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(items.length, prev + BATCH))
        }
      },
      { root: null, rootMargin: '200px 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [items.length])

  // Offsets doux pour effet "masonry"/éparpillé
  const offsets = ['translate-y-0', 'translate-y-1', '-translate-y-1', 'translate-y-2', '-translate-y-2', 'translate-x-1', '-translate-x-1']

  return (
    <div className="p-2 md:p-4 lg:p-5">
      {/* Grille en colonnes variables, espacée et aérée */}
      <div className="columns-1 gap-4 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
        {current.map((item, idx) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <Thumbnail
              title={item.title}
              thumbnailUrl={item.thumbnailUrl}
              youtubeUrl={item.youtubeUrl} // Ajout de cette propriété
              onClick={() => onSelect(item)}
              className={`animate-tilt ${offsets[idx % offsets.length]} animate-fadeUp`}
            />
            <p className="mt-2 line-clamp-2 text-sm text-neutral-700" title={item.title}>{item.title}</p>
          </div>
        ))}
        {/* Sentinelle pour charger la suite */}
        {visibleCount < items.length && (
          <div ref={sentinelRef} className="h-6 w-full" />
        )}
      </div>
    </div>
  )
}

export default Gallery


