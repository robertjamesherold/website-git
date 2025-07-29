import styles from './_FilterNav.module.scss'

export default function FilterNav({ categories, activeFilter, onFilterChange, title }) {
  return (
    <div className={styles.filterSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
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
