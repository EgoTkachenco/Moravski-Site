import { useEffect, useState } from 'react'

export const useIsTop = (allow) => {
  const [isTop, setIsTop] = useState(!!allow)

  useEffect(() => {
    if (!allow || typeof window === 'undefined') {
      setIsTop(false)
      return
    }

    const onscroll = () => setIsTop(window.scrollY === 0)
    document.addEventListener('scroll', onscroll)
    onscroll()
    return () => {
      document.removeEventListener('scroll', onscroll)
    }
  }, [allow])

  return isTop
}
