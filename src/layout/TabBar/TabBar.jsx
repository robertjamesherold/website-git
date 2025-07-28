import { Link, useLocation } from 'react-router-dom'
import { useScrollHide } from '@ho/useScrollHide'
import styles from './_TabBar.module.scss'

const tabItems = [
  { 
    label: 'Story', 
    href: '/about/story', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.85 3.5 14.7 3.5 14.55 3.5C13.45 3.5 12.55 4.4 12.55 5.5S13.45 7.5 14.55 7.5C14.7 7.5 14.85 7.45 15 7.45L19 9.5V12H21V9ZM15 12C14.45 12 14 12.45 14 13V22H16V16H18V22H20V13C20 12.45 19.55 12 19 12H15Z"/>
      </svg>
    )
  },
  { 
    label: 'Skills', 
    href: '/about/skills', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM4 14L5 17L8 18L5 19L4 22L3 19L0 18L3 17L4 14ZM19.5 2.5L20.5 5.5L23.5 6.5L20.5 7.5L19.5 10.5L18.5 7.5L15.5 6.5L18.5 5.5L19.5 2.5Z"/>
      </svg>
    )
  },
  { 
    label: 'Lebenslauf', 
    href: '/about/lebenslauf', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM9 13V19H7V13H9ZM15 15V19H11V15H15ZM17 11V19H16V11H17Z"/>
      </svg>
    )
  }
]

function TabBar() {
  const location = useLocation()
  
  // Use custom scroll hide hook with reverse behavior
  const { isVisible } = useScrollHide({
    reverse: false , // Reverse behavior: hide on scroll up, show on scroll down
    threshold: 100,
    topThreshold: 10
  })

  const isActiveTab = (href) => {
    return location.pathname === href
  }

  return (
    <nav className={`${styles.tabBar} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        {tabItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`${styles.tabItem} ${
              isActiveTab(item.href) ? styles.active : ''
            }`}
          >
            <div className={styles.tabIcon}>
              {item.icon}
            </div>
            <span className={styles.tabLabel}>
              {item.label}
            </span>
            {isActiveTab(item.href) && (
              <div className={styles.activeIndicator}></div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default TabBar