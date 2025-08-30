import React from 'react'

export type ThumbnailProps = {
  title: string
  thumbnailUrl: string
  youtubeUrl: string
  onClick: () => void
  className?: string
  style?: React.CSSProperties
}

// Affiche une miniature cliquable pour ouvrir la vidéo
const Thumbnail: React.FC<ThumbnailProps> = ({ title, thumbnailUrl, onClick, className = '', style }) => {
  return (
    <button
      type="button"
      aria-label={`Lire la vidéo ${title}`}
      onClick={onClick}
      className={`group relative z-20 aspect-video w-full overflow-hidden rounded-lg bg-transparent shadow-none transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      style={style}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="z-10 block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onLoad={() => {
          console.log('[Thumbnail] image loaded', { title, thumbnailUrl })
        }}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement
          // Fallback discret si l'image ne charge pas
          target.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#f6e7eb"/><stop offset="1" stop-color="#dceaf5"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/></svg>`
          )
          console.warn('[Thumbnail] image error, fallback used', { title, thumbnailUrl })
        }}
      />
      {/* Icône play en surimpression */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-black/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12 animate-pulse text-white drop-shadow"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  )
}

export default Thumbnail


