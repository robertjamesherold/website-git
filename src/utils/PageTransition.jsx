import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import { usePageTransition } from '@ho/usePageTransition'

export default function PageTransition({ children }) {
  const location = useLocation()
  const { variants, transitionDuration } = usePageTransition()

  useEffect(() => {
    const scrollResetDelay = (transitionDuration / 3) * 1000 // Umrechnung in Millisekunden

    const timeout = setTimeout(() => {
      window.scrollTo({ top: '-5rem', left: 0, behavior: 'instant' }) // Sofort & unsichtbar
    }, scrollResetDelay)

    return () => clearTimeout(timeout)
  }, [location, transitionDuration])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}