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
    title: 'Vidéo 6',
    thumbnailUrl: 'https://img.youtube.com/vi/A8DqFiRc6ko/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/A8DqFiRc6ko?feature=share',
  },
  {
    id: '7sL4cnje1DA',
    title: 'Vidéo 7',
    thumbnailUrl: 'https://img.youtube.com/vi/7sL4cnje1DA/hqdefault.jpg',
    youtubeUrl: 'https://youtube.com/shorts/7sL4cnje1DA?feature=share',
  },
    {
      id: 'ZQXl0l6Wa_s',
      title: 'Vidéo 8',
      thumbnailUrl: 'https://img.youtube.com/vi/ZQXl0l6Wa_s/hqdefault.jpg',
      youtubeUrl: 'https://youtu.be/ZQXl0l6Wa_s',
    },
    {
      id: 'S8UsXuToxoQ',
      title: 'Vidéo 9',
      thumbnailUrl: 'https://img.youtube.com/vi/S8UsXuToxoQ/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/S8UsXuToxoQ',
    },
    {
      id: '5SSIMktxHR0',
      title: 'Vidéo 10',
      thumbnailUrl: 'https://img.youtube.com/vi/5SSIMktxHR0/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/5SSIMktxHR0',
    },
    {
      id: 'hJ0rK367Crg',
      title: 'Vidéo 11',
      thumbnailUrl: 'https://img.youtube.com/vi/hJ0rK367Crg/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/hJ0rK367Crg',
    },
    {
      id: 'XjrXk9Ek5TY',
      title: 'Vidéo 12',
      thumbnailUrl: 'https://img.youtube.com/vi/XjrXk9Ek5TY/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/XjrXk9Ek5TY',
    },
    {
      id: '9e1ArIo725Y',
      title: 'Vidéo 13',
      thumbnailUrl: 'https://img.youtube.com/vi/9e1ArIo725Y/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/9e1ArIo725Y',
    },
    {
      id: 'OFt3k3V3gBE',
      title: 'Vidéo 14',
      thumbnailUrl: 'https://img.youtube.com/vi/OFt3k3V3gBE/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/OFt3k3V3gBE?feature=share',
    },
    {
      id: 'OFt3k3V3gBE',
      title: 'Vidéo 15',
      thumbnailUrl: 'https://img.youtube.com/vi/EDQlTko5XG8/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/EDQlTko5XG8',
    },
    {
      id: '3JKFrXwjPGU',
      title: 'Vidéo 16',
      thumbnailUrl: 'https://img.youtube.com/vi/3JKFrXwjPGU/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/3JKFrXwjPGU',
    },
    {
      id: 'UOWQJSf6WYo',
      title: 'Vidéo 17',
      thumbnailUrl: 'https://img.youtube.com/vi/UOWQJSf6WYo/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/UOWQJSf6WYo',
    },
    {
      id: 'ImYuEOJknzE',
      title: 'Vidéo 18',
      thumbnailUrl: 'https://img.youtube.com/vi/ImYuEOJknzE/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/ImYuEOJknzE',
    },
    {
      id: 'mYKhZcfMooA',
      title: 'Vidéo 19',
      thumbnailUrl: 'https://img.youtube.com/vi/mYKhZcfMooA/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/mYKhZcfMooA',
    },
    {
      id: 'KT8GWkPn4UQ',
      title: 'Vidéo 20',
      thumbnailUrl: 'https://img.youtube.com/vi/KT8GWkPn4UQ/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/KT8GWkPn4UQ?feature=share',
    },
    {
      id: '7G0yddkbNHc',
      title: 'Vidéo 21',
      thumbnailUrl: 'https://img.youtube.com/vi/7G0yddkbNHc/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/7G0yddkbNHc',
    },
    {
      id: 'trIhRU-Kl5A',
      title: 'Vidéo 22',
      thumbnailUrl: 'https://img.youtube.com/vi/trIhRU-Kl5A/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/trIhRU-Kl5A',
    },
    {
      id: '05GWnsqZvXY',
      title: 'Vidéo 23',
      thumbnailUrl: 'https://img.youtube.com/vi/05GWnsqZvXY/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/05GWnsqZvXY?feature=share',
    },
    {
      id: 'wGAlbT32jL0',
      title: 'Vidéo 24',
      thumbnailUrl: 'https://img.youtube.com/vi/wGAlbT32jL0/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/wGAlbT32jL0',
    },
    {
      id: 'cW4dksrcXzw',
      title: 'Vidéo 25',
      thumbnailUrl: 'https://img.youtube.com/vi/cW4dksrcXzw/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/cW4dksrcXzw?feature=share',
    },
    {
      id: 'mU1xv1yEbYg',
      title: 'Vidéo 26',
      thumbnailUrl: 'https://img.youtube.com/vi/mU1xv1yEbYg/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/mU1xv1yEbYg',
    },
    {
      id: 'KjI6NDugauU',
      title: 'Vidéo 27',
      thumbnailUrl: 'https://img.youtube.com/vi/KjI6NDugauU/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/KjI6NDugauU',
    },
    {
      id: 'bdkEiLbvENA',
      title: 'Vidéo 28',
      thumbnailUrl: 'https://img.youtube.com/vi/bdkEiLbvENA/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/bdkEiLbvENA',
    },
    {
      id: 'gvGW9EmXclQ',
      title: 'Vidéo 29',
      thumbnailUrl: 'https://img.youtube.com/vi/gvGW9EmXclQ/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/gvGW9EmXclQ',
    },
    {
      id: '93t3W2SR8Bo',
      title: 'Vidéo 30',
      thumbnailUrl: 'https://img.youtube.com/vi/93t3W2SR8Bo/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/93t3W2SR8Bo',
    },
    {
      id: 'QjRomjouiRQ',
      title: 'Vidéo 31',
      thumbnailUrl: 'https://img.youtube.com/vi/QjRomjouiRQ/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/QjRomjouiRQ',
    },
    {
      id: 'lKbkQ0AVizU',
      title: 'Vidéo 32',
      thumbnailUrl: 'https://img.youtube.com/vi/lKbkQ0AVizU/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/lKbkQ0AVizU?feature=share',
    },
    {
      id: 'dJMxDgnGXCw',
      title: 'Vidéo 33',
      thumbnailUrl: 'https://img.youtube.com/vi/dJMxDgnGXCw/hqdefault.jpg',
      youtubeUrl: 'https://youtu.be/dJMxDgnGXCw',
    },
    {
      id: '8SUp9TD6F8k',
      title: 'Vidéo 34',
      thumbnailUrl: 'https://img.youtube.com/vi/8SUp9TD6F8k/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/8SUp9TD6F8k?feature=share',
    },
    {
      id: '9eLP2axohgY',
      title: 'Vidéo 35',
      thumbnailUrl: 'https://img.youtube.com/vi/9eLP2axohgY/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/9eLP2axohgY',
    },
    {
      id: 'lkAeK1t3_FA',
      title: 'Vidéo 36',
      thumbnailUrl: 'https://img.youtube.com/vi/lkAeK1t3_FA/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/lkAeK1t3_FA',
    },
    {
      id: 'YoCkOEAcphI',
      title: 'Vidéo 37',
      thumbnailUrl: 'https://img.youtube.com/vi/YoCkOEAcphI/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/YoCkOEAcphI',
    },
    {
      id: 'jXThQixW5zg',
      title: 'Vidéo 38',
      thumbnailUrl: 'https://img.youtube.com/vi/jXThQixW5zg/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/jXThQixW5zg',
    },
    {
      id: 'TcZHyBrNsc4',
      title: 'Vidéo 39',
      thumbnailUrl: 'https://img.youtube.com/vi/TcZHyBrNsc4/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/TcZHyBrNsc4?feature=share',
    },
    {
      id: 'EiPoG9R3w4A',
      title: 'Vidéo 40',
      thumbnailUrl: 'https://img.youtube.com/vi/EiPoG9R3w4A/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/EiPoG9R3w4A?feature=share',
    },
    {
      id: '9m9c_vO_LFs',
      title: 'Vidéo 41',
      thumbnailUrl: 'https://img.youtube.com/vi/9m9c_vO_LFs/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/9m9c_vO_LFs',
    },
    {
      id: 'KCTCaPlY9vM',
      title: 'Vidéo 42',
      thumbnailUrl: 'https://img.youtube.com/vi/KCTCaPlY9vM/hqdefault.jpg',
      youtubeUrl: 'https://youtube.com/shorts/KCTCaPlY9vM',
    },

]

// Complète jusqu'à 42 éléments avec des placeholders (remplacez ensuite par vos liens)
const placeholders: VideoItem[] = Array.from({ length: 42 - provided.length }, (_, i) => {
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

