import React, { useEffect } from 'react'

export type ModalPlayerProps = {
  videoId: string
  title: string
  onClose: () => void
}

// Modal pleine page affichant un lecteur YouTube intégré
const ModalPlayer: React.FC<ModalPlayerProps> = ({ videoId, title, onClose }) => {
  // Empêche le scroll de la page quand le modal est ouvert
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fond sombre */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Contenu */}
      <div className="relative z-10 mx-4 w-full max-w-5xl">
        {/* Bouton fermer */}
        <div className="mb-2 flex justify-end">
          <button
            onClick={onClose}
            aria-label="Fermer la vidéo"
            className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-neutral-900 shadow hover:bg-white"
          >
            Fermer
          </button>
        </div>

        {/* Wrapper responsive 16/9 */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default ModalPlayer


