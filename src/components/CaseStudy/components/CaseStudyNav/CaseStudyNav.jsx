import styles from './_CaseStudyNav.module.scss'

export function CaseStudyNav({ sections, activeSection, onSectionClick }) {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      onSectionClick(sectionId)
    }
  }

  return (
    <nav className={styles.nav}>
      <h3 className={styles.navTitle}>Inhaltsverzeichnis</h3>
      <ul className={styles.navList}>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`${styles.navItem} ${
                activeSection === section.id ? styles.active : ''
              }`}
              onClick={() => handleClick(section.id)}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
