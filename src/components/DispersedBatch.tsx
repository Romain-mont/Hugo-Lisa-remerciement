import React, { useMemo } from 'react'
import Thumbnail from './Thumbnail'
import type { VideoItem } from '../data/videos'
import { useBreakpoint } from '../hooks/useBreakpoint'

export type DispersedBatchProps = {
  items: VideoItem[]
  onSelect: (item: VideoItem) => void
}

// Positionne 10 miniatures de façon légère et éparse dans le viewport
const DispersedBatch: React.FC<DispersedBatchProps> = ({ items, onSelect }) => {
  const { isXs, isSm, isMd } = useBreakpoint()

  // Positions mobiles ajustées pour éviter les débordements
  const mobilePositions: Array<{ top: string; left: string; offset?: string }> = [
    { top: '5%', left: '10%' },
    { top: '15%', left: '50%', offset: 'translate-y-1' },
    { top: '25%', left: '12%', offset: '-translate-y-1' },
    { top: '35%', left: '48%' },
    { top: '45%', left: '14%', offset: 'translate-x-1' },
    { top: '55%', left: '52%' },
    { top: '65%', left: '18%', offset: '-translate-x-1' },
    { top: '75%', left: '50%' },
    { top: '85%', left: '10%' },
    { top: '95%', left: '54%' },
  ]

  // Positions desktop ajustées pour un meilleur équilibre
  const desktopPositions: Array<{ top: string; left: string; offset?: string }> = [
    { top: '8%', left: '6%', offset: 'translate-y-1' },
    { top: '12%', left: '28%', offset: '-translate-y-1' },
    { top: '10%', left: '56%', offset: 'translate-x-1' },
    { top: '14%', left: '80%', offset: '-translate-x-1' },
    { top: '38%', left: '12%', offset: 'translate-y-2' },
    { top: '36%', left: '42%', offset: '-translate-y-2' },
    { top: '34%', left: '72%', offset: 'translate-x-1' },
    { top: '66%', left: '18%', offset: '-translate-x-1' },
    { top: '64%', left: '48%', offset: 'translate-y-1' },
    { top: '70%', left: '78%', offset: '-translate-y-1' },
  ]

  const positions = useMemo(() => (isXs || isSm || isMd ? mobilePositions : desktopPositions), [isXs, isSm, isMd])

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
            {/* Tailles adaptées selon viewport */}
            <div className={isXs || isSm ? 'w-[44vw]' : isMd ? 'w-[32vw]' : 'w-[22vw] xl:w-[20vw]'}>
              <Thumbnail
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
                youtubeUrl={item.youtubeUrl} // Ajout de cette propriété
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


