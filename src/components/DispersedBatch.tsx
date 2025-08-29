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

  // Positions mobiles plus grandes et espacées verticalement
  const mobilePositions: Array<{ top: string; left: string; offset?: string }> = [
    { top: '4%', left: '8%' },
    { top: '16%', left: '52%', offset: 'translate-y-1' },
    { top: '28%', left: '6%', offset: '-translate-y-1' },
    { top: '40%', left: '54%' },
    { top: '52%', left: '10%', offset: 'translate-x-1' },
    { top: '64%', left: '60%' },
    { top: '74%', left: '14%', offset: '-translate-x-1' },
    { top: '84%', left: '58%' },
    { top: '92%', left: '8%' },
    { top: '96%', left: '64%' },
  ]

  // Positions desktop
  const desktopPositions: Array<{ top: string; left: string; offset?: string }> = [
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


