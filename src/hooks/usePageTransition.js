// src/hooks/usePageTransition.js
import { useReducedMotion } from 'framer-motion'

export function usePageTransition() {
  const shouldReduceMotion = useReducedMotion()
  const transitionDuration = shouldReduceMotion ? 0 : 1

  const variants = {
    initial: {
      opacity: 0,

     
    },
    exit: {
      opacity: 0,

      transition: { duration: transitionDuration / 3 },
    },
    enter: {
      opacity: 1,

     
      transition: {
        duration: transitionDuration / 3,
        delay: transitionDuration / 3,
      },
    },
  }

  return { variants, transitionDuration }
}