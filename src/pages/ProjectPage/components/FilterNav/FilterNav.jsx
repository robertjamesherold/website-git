import styles from './_FilterNav.module.scss'

export function FilterNav({ categories, activeFilter, onFilterChange }) {
  return (
    <div className={styles.filterSection}>
      <h2 className={styles.sectionTitle}>Alle Projekte</h2>
      <div className={styles.filterNav}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${
              activeFilter === category.id ? styles.active : ''
            }`}
            onClick={() => onFilterChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}
