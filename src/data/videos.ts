// Données pour 53 vidéos (miniatures) – vous pouvez remplacer les URLs et IDs ensuite
// Chaque item contient un id (remplacez par l'id YouTube), un titre, une miniature et l'URL YouTube
export type VideoItem = {
  id: string
  title: string
  thumbnailUrl: string
  youtubeUrl: string
}

// Deux vidéos réelles fournies (remplacez les titres si besoin)
const provided: VideoItem[] = [
  {
    id: 'kMRnV2RdPCU',
    title: 'Courte vidéo 1',
    thumbnailUrl: 'https://img.youtube.com/vi/kMRnV2RdPCU/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/kMRnV2RdPCU?feature=share',
  },
  {
    id: 'VcRRghUA13E',
    title: 'Vidéo 2',
    thumbnailUrl: 'https://img.youtube.com/vi/VcRRghUA13E/hqdefault.jpg',
    youtubeUrl: 'https://youtu.be/VcRRghUA13E',
  },

  {
    id: 'QXjBwdiICyA',
    title: 'Vidéo 3',
    thumbnailUrl: 'https://img.youtube.com/vi/QXjBwdiICyA/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/QXjBwdiICyA?feature=share',
  },
  {
    id: 'FHBLXasyblc',
    title: 'Vidéo 4',
    thumbnailUrl: 'https://img.youtube.com/vi/FHBLXasyblc/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/FHBLXasyblc?feature=share',
  },
  {
    id: '0qekOARpqdo',
    title: 'Vidéo 5',
    thumbnailUrl: 'https://img.youtube.com/vi/0qekOARpqdo/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/0qekOARpqdo?feature=share',
  },
  {
    id: 'A8DqFiRc6ko',
    title: 'Vidéo 5',
    thumbnailUrl: 'https://img.youtube.com/vi/A8DqFiRc6ko/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/A8DqFiRc6ko?feature=share',
  },
  {
    id: '7sL4cnje1DA',
    title: 'Vidéo 6',
    thumbnailUrl: 'https://img.youtube.com/vi/7sL4cnje1DA/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/7sL4cnje1DA?feature=share',
  },
    {
      id: 'ZQXl0l6Wa_s',
      title: 'Vidéo 7',
      thumbnailUrl: 'https://img.youtube.com/vi/ZQXl0l6Wa_s/hqdefault.jpg',
      youtubeUrl: 'https://youtu.be/ZQXl0l6Wa_s',
    },

]

// Complète jusqu'à 53 éléments avec des placeholders (remplacez ensuite par vos liens)
const placeholders: VideoItem[] = Array.from({ length: 53 - provided.length }, (_, i) => {
  const index = i + 1
  const label = `Video ${index + provided.length}`
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'>
      <defs>
        <linearGradient id='g' x1='0' x2='1'>
          <stop offset='0' stop-color='#C9B3E6'/>
          <stop offset='1' stop-color='#DCEAF5'/>
        </linearGradient>
      </defs>
      <rect width='640' height='360' fill='url(#g)'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#111827' font-family='Inter, Arial' font-size='28'>${label}</text>
    </svg>`
  )
  return {
    id: `placeholder-${index}`,
    title: `Vidéo ${index + provided.length}`,
    thumbnailUrl: `data:image/svg+xml;charset=utf-8,${svg}`,
    youtubeUrl: '',
  }
})

export const videos: VideoItem[] = [...provided, ...placeholders]

