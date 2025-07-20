import { useState } from 'react'
import styles from './_Navigation.module.scss'
import { Link } from 'react-router-dom'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveMobileAccordion(null) // Reset accordion when menu toggles
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setActiveMobileAccordion(null)
  }

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleMobileAccordionToggle = (accordionName) => {
    setActiveMobileAccordion(activeMobileAccordion === accordionName ? null : accordionName)
  }

  // Navigation structure with dropdowns
  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      hasDropdown: false
    },
    {
      label: 'Über mich',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Meine Story', href: '/story', description: 'Wie alles begann' },
        { label: 'Skills & Technologien', href: '/skills', description: 'Meine Expertise' },
        { label: 'Lebenslauf', href: '/lebenslauf', description: 'Werdegang & Ausbildung' }
      ]
    },
    {
      label: 'Portfolio',
      
      hasDropdown: true,
      dropdownItems: [
        { label: 'Projekte', href: '/projekte' },
        { label: 'Case Studies', href: '/casestudies', description: 'Website Projekte' },
        { label: 'GitHub', href: '/github', description: 'App Interfaces' }
      ]
    },
    {
      label: 'Kontakt',
      href: '/kontakt',
      hasDropdown: false
    }
  ]

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        {/* Logo/Brand */}
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
              className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ''}`}
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
            >
              <a 
                href={item.href} 
                className={styles.navLink}
                onClick={() => !item.hasDropdown && setActiveDropdown(null)}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg 
                    className={`${styles.dropdownIcon} ${activeDropdown === item.label ? styles.open : ''}`}
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                )}
              </a>
              
              {/* Desktop Dropdown */}
              {item.hasDropdown && (
                <div className={`${styles.dropdown} ${activeDropdown === item.label ? styles.open : ''}`}>
                  <div className={styles.dropdownContent}>
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Link 
                        key={dropdownIndex}
                        to={dropdownItem.href} 
                        className={styles.dropdownItem}
                        onClick={closeMenu}
                      >
                        <span className={styles.dropdownItemTitle}>{dropdownItem.label}</span>
                      </Link>
                    ))}
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

        {/* Mobile Fullscreen Dropdown */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNavList}>
            {navigationItems.map((item, index) => (
              <div key={index} className={styles.mobileNavSection}>
                {item.hasDropdown ? (
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
                      <div className={styles.mobileAccordionItems}>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className={styles.mobileAccordionItem}
                            onClick={closeMenu}
                          >
                            <span className={styles.mobileAccordionItemTitle}>
                              {dropdownItem.label}
                            </span>
                            <span className={styles.mobileAccordionItemDescription}>
                              {dropdownItem.description}
                            </span>
                          </a>
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
        </div>
      </div>
    </nav>
  )
}