import { useEffect, useState } from 'react'

type Viewport = 'desktop' | 'mobile'

export const useViewport = (): Viewport => {
  const [viewport, setViewport] = useState<Viewport>('desktop')

  useEffect(() => {
    const handleResize = () => {
      const width = window?.innerWidth
      const isMobile = width <= 756

      setViewport(isMobile ? 'mobile' : 'desktop')
    }

    // Initial check
    handleResize()

    // Event listener for window resize
    window?.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window?.removeEventListener('resize', handleResize)
    }
  }, [])

  return viewport
}
