import React from 'react'
import Thumbnail from './Thumbnail'
import type { VideoItem } from '../data/videos'

export type DispersedBatchProps = {
  items: VideoItem[]
  onSelect: (item: VideoItem) => void
}

// Positionne 10 miniatures de façon légère et éparse dans le viewport
const DispersedBatch: React.FC<DispersedBatchProps> = ({ items, onSelect }) => {
  // 10 positions en pourcentage (top/left) pour couvrir l'écran de façon équilibrée
  const positions: Array<{ top: string; left: string; offset?: string }> = [
    { top: '6%', left: '4%', offset: 'translate-y-1' },
    { top: '8%', left: '30%', offset: '-translate-y-1' },
    { top: '5%', left: '58%', offset: 'translate-x-1' },
    { top: '10%', left: '82%', offset: '-translate-x-1' },
    { top: '35%', left: '10%', offset: 'translate-y-2' },
    { top: '32%', left: '40%', offset: '-translate-y-2' },
    { top: '30%', left: '70%', offset: 'translate-x-1' },
    { top: '62%', left: '16%', offset: '-translate-x-1' },
    { top: '60%', left: '46%', offset: 'translate-y-1' },
    { top: '66%', left: '76%', offset: '-translate-y-1' },
  ]

  return (
    <div className="relative h-[100svh] w-full">
      {items.slice(0, 10).map((item, index) => {
        const pos = positions[index % positions.length]
        return (
          <div
            key={item.id}
            className={`absolute ${pos.offset ?? ''}`}
            style={{ top: pos.top, left: pos.left }}
          >
            {/* Tailles plus grandes et fluides, couvrant toute la largeur */}
            <div className="w-[44vw] sm:w-[38vw] md:w-[28vw] lg:w-[22vw] xl:w-[20vw]">
              <Thumbnail
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
                onClick={() => onSelect(item)}
                className="animate-tilt animate-fadeUp"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DispersedBatch


