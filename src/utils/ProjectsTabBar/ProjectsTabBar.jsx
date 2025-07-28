import { Link, useLocation } from 'react-router-dom'
import styles from './_ProjectsTabBar.module.scss'

const projectTabItems = [
  { 
    label: 'Projekte', 
    href: '/projekte', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18ZM4 6V6.01L4.01 6H4ZM15 9V12H18V14H15V17H13V14H10V12H13V9H15Z"/>
      </svg>
    )
  },
  { 
    label: 'Fallstudien', 
    href: '/fallstudien', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V10H17V12ZM15 16H7V14H15V16ZM17 8H7V6H17V8Z"/>
      </svg>
    )
  }
]

function ProjectsTabBar() {
  const location = useLocation()

  const isActiveTab = (href) => {
    // Prüfe auf exakte Übereinstimmung oder Subpfade
    if (href === '/projekte') {
      return location.pathname === '/projekte'
    }
    if (href === '/fallstudien') {
      return location.pathname.startsWith('/fallstudien')
    }
    return location.pathname === href
  }

  return (
    <nav className={styles.projectsTabBar}>
      <div className={styles.container}>
        {projectTabItems.map((item, index) => (
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

export default ProjectsTabBar