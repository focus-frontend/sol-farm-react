import { useEffect, useRef, useState } from 'react'

const useOnScreen = () => {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = useRef<any>()
  const ref = useRef<any>()

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) observer.current.disconnect()

      setIntersecting(entry.isIntersecting)
    })
  }, [])
 
  useEffect(() => {
    if (!ref.current) return

    observer.current.observe(ref.current)

    return () => observer.current.disconnect()
  }, [observer, ref])

  return { inView: isIntersecting, ref }
}

export default useOnScreen
