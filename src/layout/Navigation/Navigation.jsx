import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useScrollHide } from '@ho/useScrollHide'
import styles from './_Navigation.module.scss'

function Navigation(showToggle = true) {
  const { isVisible } = useScrollHide({ reverse: false, threshold: 100, topThreshold: 10 })
  const [openToggle, setOpenToggle] = useState(false)

  const handleToggleClick = () => {
    setOpenToggle(prev => !prev)
  }

  const closeOverlay = () => {
    setOpenToggle(false)
  }

  // Body scroll lock when overlay is open
  useEffect(() => {
    if (openToggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [openToggle])

  // Close overlay on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && openToggle) {
        closeOverlay()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [openToggle])

  // Desktop Navigation (ab $lg) - zeigt Unterlinks direkt
  const desktopNavigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Story', href: '/story' },
    { label: 'Skills', href: '/skills' },
    { label: 'Lebenslauf', href: '/lebenslauf' },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Fallstudien', href: '/fallstudien' },
    { label: 'Kontakt', href: '/kontakt' }
  ]

  // Mobile Navigation - mit Gruppierungen
  const mobileNavigationItems = [
    { label: 'Home', href: '/' },
  
        { label: 'Meine Story', href: '/story' },
        { label: 'Skills', href: '/skills' },
        { label: 'Lebenslauf', href: '/lebenslauf' },
 
        { label: 'Alle Projekte', href: '/projekte' },
        { label: 'Fallstudien', href: '/fallstudien' },
        { label: 'Kontakt', href: '/kontakt' }
  ]

  return (
    <>
      <nav className={`${styles.navigation} ${isVisible ? styles.visible : styles.hidden}`}>
        {/* Hauptnavigation */}
        <div className={styles.mainNav}>
          <ul className={styles.navList}>
            {desktopNavigationItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <Link to={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle Button */}
        {showToggle && (
          <button 
            onClick={handleToggleClick} 
            className={styles.menuToggle}
            aria-label="Menu öffnen"
            aria-expanded={openToggle}
          >
            <div className={`${styles.toggleIcon} ${openToggle ? styles.open : ''}`}></div>
            <div className={`${styles.toggleIcon} ${openToggle ? styles.open : ''}`}></div>
          </button>
        )}
      </nav>

      {/* Fullscreen Overlay */}
      <div 
        className={`${styles.fullscreenOverlay} ${openToggle ? styles.open : ''}`}
        onClick={closeOverlay}
      >
        <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button 
            className={styles.closeButton} 
            onClick={closeOverlay}
            aria-label="Menu schließen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
            </svg>
          </button>

          {/* Overlay Navigation */}
          <nav className={styles.overlayNav}>
            <ul className={styles.overlayNavList}>
              {mobileNavigationItems.map((item, index) => (
                <li key={index} className={styles.overlayNavItem}>
                  <Link 
                    to={item.href} 
                    className={styles.overlayNavLink}
                    onClick={closeOverlay}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Sub Items */}
                  {item.subItems && (
                    <ul className={styles.overlaySubNav}>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className={styles.overlaySubNavItem}>
                          <Link 
                            to={subItem.href} 
                            className={styles.overlaySubNavLink}
                            onClick={closeOverlay}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Additional Content */}
            <div className={styles.overlayFooter}>
              <div className={styles.overlayContact}>
                <h3 className={styles.overlayContactTitle}>Kontakt</h3>
                <p className={styles.overlayContactInfo}>
                  <a href="mailto:robertjamesherold@icloud.com">robertjamesherold@icloud.com</a>
                </p>
                <p className={styles.overlayContactInfo}>
                  <a href="tel:+4915161660444">+49 151 616 60444</a>
                </p>
              </div>

              <div className={styles.overlaySocial}>
                <a href="www.linkedin.com/in/robert-james-herold-b274a1205" className={styles.socialLink} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                  </svg>
                </a>
                <a href="https://github.com/robertjamesherold" className={styles.socialLink} aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navigation