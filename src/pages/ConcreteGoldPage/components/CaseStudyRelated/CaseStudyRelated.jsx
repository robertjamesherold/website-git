import styles from './_CaseStudyRelated.module.scss'

export function CaseStudyRelated({ studies }) {
  return (
    <section className={styles.related}>
      <div className={styles.container}>
        <h2 className={styles.title}>Weitere Fallstudien</h2>
        <div className={styles.grid}>
          {studies.map((study) => (
            <a 
              key={study.id} 
              href={`#case-study-${study.id}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={study.image} alt={study.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.studyTitle}>{study.title}</h3>
                <p className={styles.studyClient}>{study.client}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
