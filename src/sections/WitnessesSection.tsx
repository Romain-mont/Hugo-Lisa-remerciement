import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'
import Thumbnail from '../components/Thumbnail'

// Section des témoins avec miniature vidéo
const WitnessesSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleThumbnailClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section ref={ref} className="section-viewport relative flex items-center bg-gradient-to-b from-bridal-blue/20 via-bridal-white to-bridal-violet/20">
      <div className="container-elegant">
        <div className={`mx-auto max-w-5xl text-center ${inView ? 'animate-fadeUp' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-7xl mb-8">
            Et enfin un dernier message de vos témoins...
          </h2>
          
          {/* Miniature vidéo des témoins */}
          <div className="mx-auto w-80 md:w-96">
            <Thumbnail
              title="Message des témoins"
              thumbnailUrl="https://img.youtube.com/vi/iKL6iAxXE1I/hqdefault.jpg"
              youtubeUrl="https://youtube.com/shorts/iKL6iAxXE1I"
              onClick={handleThumbnailClick}
              className="animate-tilt"
            />
          </div>
        </div>
      </div>

      {/* Modale pour afficher la vidéo */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/iKL6iAxXE1I"
              title="Message des témoins"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default WitnessesSection
