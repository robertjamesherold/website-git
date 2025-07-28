import styles from './_CaseStudySidebar.module.scss'

export function CaseStudySidebar({ children }) {
  return (
    <aside className={styles.sidebar}>
      {children}
    </aside>
  )
}
