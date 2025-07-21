import { useState, useEffect } from 'react'
import styles from './_Navigation.module.scss'
import { Link } from 'react-router-dom'
import { InContainer, Container } from '@ly/Container/Container'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null)

  // Body scroll lock effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveMobileAccordion(null)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveMegaMenu(null)
    setActiveMobileAccordion(null)
  }

  const handleMegaMenuToggle = (menuName) => {
    setActiveMegaMenu(activeMegaMenu === menuName ? null : menuName)
  }

  const handleMobileAccordionToggle = (accordionName) => {
    setActiveMobileAccordion(activeMobileAccordion === accordionName ? null : accordionName)
  }

  // Navigation structure with mega menus
  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      hasMegaMenu: false
    },
    {
      label: 'Über mich',
      hasMegaMenu: true,
      megaMenuContent: {
        sections: [
          {
      
            items: [
              { label: 'Meine Story', href: '/story', description: 'Wie alles begann und was mich antreibt' },
              { label: 'Philosophie', href: '/philosophie', description: 'Meine Arbeitsweise und Werte' },
              { label: 'Interessen', href: '/interessen', description: 'Was mich neben der Arbeit bewegt' }
            ]
          },
          {
 
            items: [
              { label: 'Frontend Development', href: '/frontend', description: 'React, Vue, Angular & mehr' },
              { label: 'Backend Development', href: '/backend', description: 'Node.js, Python, Databases' },
              { label: 'UI/UX Design', href: '/design', description: 'User Experience & Interface Design' }
            ]
          },
          {
     
            items: [
              { label: 'Lebenslauf', href: '/lebenslauf', description: 'Mein beruflicher Werdegang' },
              { label: 'Ausbildung', href: '/ausbildung', description: 'Studium und Weiterbildungen' },
              { label: 'Zertifikate', href: '/zertifikate', description: 'Offizielle Qualifikationen' }
            ]
          }
        ]
      }
    },
    {
      label: 'Portfolio',
      hasMegaMenu: true,
      megaMenuContent: {
        sections: [
          {
            title: 'Web Development',
            items: [
              { label: 'E-Commerce Projekte', href: '/ecommerce', description: 'Online-Shops und Marktplätze' },
              { label: 'Corporate Websites', href: '/corporate', description: 'Unternehmenswebsites und Portale' },
              { label: 'Web Applications', href: '/webapps', description: 'Komplexe Webanwendungen' }
            ]
          },
          {
            title: 'Mobile Development',
            items: [
              { label: 'iOS Apps', href: '/ios', description: 'Native und Cross-Platform Apps' },
              { label: 'Android Apps', href: '/android', description: 'Native Android Entwicklung' },
              { label: 'Progressive Web Apps', href: '/pwa', description: 'PWAs für alle Plattformen' }
            ]
          },
          {
            title: 'Showcases',
            items: [
              { label: 'Case Studies', href: '/casestudies', description: 'Detaillierte Projektanalysen' },
              { label: 'Live Demos', href: '/demos', description: 'Interaktive Projektvorführungen' },
              { label: 'GitHub Repository', href: '/github', description: 'Open Source Projekte' }
            ]
          }
        ]
      }
    },
   
    {
      label: 'Kontakt',
      href: '/kontakt',
      hasMegaMenu: false
    }
  ]

  return (
  <div className={styles.bar}>
      <nav className={styles.navigation}>
      <InContainer>
        <div className={styles.brand}>
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoText}>Robert James</span>
            <span className={styles.logoSubtext}>Herold</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navList}>
          {navigationItems.map((item, index) => (
            <li 
              key={index} 
              className={`${styles.navItem} ${item.hasMegaMenu ? styles.hasMegaMenu : ''}`}
              onMouseEnter={() => item.hasMegaMenu && setActiveMegaMenu(item.label)}
              onMouseLeave={() => item.hasMegaMenu && setActiveMegaMenu(null)}
            >
              <a 
                href={item.href} 
                className={styles.navLink}
                onClick={() => !item.hasMegaMenu && setActiveMegaMenu(null)}
              >
                {item.label}
                {item.hasMegaMenu && (
                  <svg 
                    className={`${styles.megaMenuIcon} ${activeMegaMenu === item.label ? styles.open : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                )}
              </a>
              
              {/* Desktop Mega Menu */}
              {item.hasMegaMenu && (
                <div className={`${styles.megaMenu} ${activeMegaMenu === item.label ? styles.open : ''}`}>
                  <div className={styles.megaMenuContent}>
                    <InContainer>
                      <div className={styles.megaMenuGrid}>
                        {item.megaMenuContent.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className={styles.megaMenuSection}>
                            <h3 className={styles.megaMenuSectionTitle}>{section.title}</h3>
                            <ul className={styles.megaMenuItems}>
                              {section.items.map((menuItem, itemIndex) => (
                                <li key={itemIndex} className={styles.megaMenuItem}>
                                  <Link 
                                    to={menuItem.href} 
                                    className={styles.megaMenuLink}
                                    onClick={closeMenu}
                                  >
                                    <span className={styles.megaMenuLinkTitle}>{menuItem.label}</span>
                                    <span className={styles.megaMenuLinkDescription}>{menuItem.description}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </InContainer>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Menu Toggle Button */}
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}></div>
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}></div>
        </button>
              </InContainer>

</nav>
        {/* Mobile Fullscreen Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <InContainer>
            <div className={styles.mobileNavList}>
              {navigationItems.map((item, index) => (
                <div key={index} className={styles.mobileNavSection}>
                  {item.hasMegaMenu ? (
                    <>
                      <button
                        className={`${styles.mobileNavLink} ${
                          activeMobileAccordion === item.label ? styles.open : ''
                        }`}
                        onClick={() => handleMobileAccordionToggle(item.label)}
                        aria-expanded={activeMobileAccordion === item.label}
                      >
                        <span>{item.label}</span>
                        <svg 
                          className={`${styles.mobileAccordionIcon} ${
                            activeMobileAccordion === item.label ? styles.open : ''
                          }`}
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M7 10l5 5 5-5z"/>
                        </svg>
                      </button>
                      <div className={`${styles.mobileAccordionContent} ${
                        activeMobileAccordion === item.label ? styles.open : ''
                      }`}>
                        <div className={styles.mobileAccordionSections}>
                          {item.megaMenuContent.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className={styles.mobileNavSection}>
                              <div className={styles.mobileAccordionItems}>
                                {section.items.map((menuItem, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    to={menuItem.href}
                                    className={styles.mobileNavLink}
                                    onClick={closeMenu}
                                  >
                                    <span className={styles.mobileAccordionItemTitle}>{menuItem.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a 
                      href={item.href} 
                      className={styles.mobileNavLink} 
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </InContainer>
        </div>
      </div>
  )
}