import { useState, useEffect } from 'react'

/**
 * Custom Hook for scroll hide/show functionality
 * @param {Object} options - Configuration options
 * @param {boolean} options.reverse - Reverse the hide/show behavior (default: false)
 * @param {number} options.threshold - Scroll threshold before hiding (default: 100)
 * @param {number} options.topThreshold - Threshold for "at top" detection (default: 10)
 * @returns {Object} - { isVisible, scrollY, scrollDirection }
 */
export function useScrollHide(options = {}) {
  const {
    reverse = false,
    threshold = 100,
    topThreshold = 10
  } = options

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    const controlVisibility = () => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      setScrollDirection(direction)
      
      // Always show when at top
      if (currentScrollY < topThreshold) {
        setIsVisible(true)
      }
      // Normal behavior: hide on scroll down, show on scroll up
      else if (!reverse) {
        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
          setIsVisible(false) // Hide when scrolling down
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)  // Show when scrolling up
        }
      }
      // Reverse behavior: hide on scroll up, show on scroll down
      else {
        if (currentScrollY < lastScrollY && currentScrollY > threshold) {
          setIsVisible(false) // Hide when scrolling up
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(true)  // Show when scrolling down
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, reverse, threshold, topThreshold])

  return {
    isVisible,
    scrollY: lastScrollY,
    scrollDirection
  }
}
