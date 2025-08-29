import { useEffect, useState } from 'react'

export function useBreakpoint() {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isXs = width < 480
  const isSm = width >= 480 && width < 640
  const isMd = width >= 640 && width < 1024
  const isLg = width >= 1024 && width < 1280
  const isXl = width >= 1280

  return { width, isXs, isSm, isMd, isLg, isXl }
}


