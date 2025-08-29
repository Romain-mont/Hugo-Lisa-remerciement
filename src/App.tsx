import { useState } from 'react'
import ModalPlayer from './components/ModalPlayer'
import type { VideoItem } from './data/videos'
import LandingSection from './sections/LandingSection'
import SurpriseMessageSection from './sections/SurpriseMessageSection'
import GallerySection from './sections/GallerySection'
import IntroStack from './sections/IntroStack'
import FinalSurpriseSection from './sections/FinalSurpriseSection'

// Page principale : galerie + modal lecteur YouTube
function App() {
  // État pour la vidéo sélectionnée
  const [selected, setSelected] = useState<VideoItem | null>(null)

  return (
    <div className="min-h-screen">
      <main>
        {/* 1. Hugo&Lisa */}
        <LandingSection />
        {/* 2. Merci pour tout… */}
        <SurpriseMessageSection />
        {/* 3. Voici une petite surprise... (noir) */}
        <FinalSurpriseSection />
        {/* Galerie */}
        <GallerySection onSelect={() => {}} onSelectItem={(item) => setSelected(item)} />
      </main>

      {selected && (
        <ModalPlayer
          videoId={selected.id}
          title={selected.title}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

export default App
