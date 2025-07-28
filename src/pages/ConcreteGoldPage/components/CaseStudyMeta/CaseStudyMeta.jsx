import styles from './_CaseStudyMeta.module.scss'

export function CaseStudyMeta({ client, date, duration, category, tags }) {
  return (
    <div className={styles.meta}>
      <h3 className={styles.metaTitle}>Projektdetails</h3>
      
      <div className={styles.metaItem}>
        <span className={styles.metaLabel}>Kunde</span>
        <span className={styles.metaValue}>{client}</span>
      </div>
      
      <div className={styles.metaItem}>
        <span className={styles.metaLabel}>Datum</span>
        <span className={styles.metaValue}>{date}</span>
      </div>
      
      <div className={styles.metaItem}>
        <span className={styles.metaLabel}>Dauer</span>
        <span className={styles.metaValue}>{duration}</span>
      </div>
      
      <div className={styles.metaItem}>
        <span className={styles.metaLabel}>Kategorie</span>
        <span className={styles.metaValue}>{category}</span>
      </div>
      
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          <span className={styles.metaLabel}>Tags</span>
          <div className={styles.tagList}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
