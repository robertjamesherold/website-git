// useRotatingText.js
import { useEffect, useState } from 'react'

export function useRotatingText(items, delay = 3000) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, delay)
    return () => clearInterval(interval)
  }, [items, delay])
  return items[index]
}

