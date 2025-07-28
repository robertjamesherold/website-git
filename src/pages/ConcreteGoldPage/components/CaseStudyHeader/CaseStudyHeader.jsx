import styles from './_CaseStudyHeader.module.scss'

export function CaseStudyHeader({ title, subtitle, coverImage }) {
  return (
    <header className={styles.header}>
      <div className={styles.overlay} />
      {coverImage && (
        <img 
          src={coverImage} 
          alt={title}
          className={styles.coverImage}
        />
      )}
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </header>
  )
}
