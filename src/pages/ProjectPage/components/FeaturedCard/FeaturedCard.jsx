import styles from './_FeaturedCard.module.scss'

export function FeaturedCard({ project }) {
  return (
    <div className={styles.featuredCard}>
      <div className={styles.featuredImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.featuredOverlay}>
          <a href={project.link} className={styles.viewProject}>
            Projekt ansehen
          </a>
        </div>
      </div>
      <div className={styles.featuredContent}>
        <h3 className={styles.featuredTitle}>{project.title}</h3>
        <p className={styles.featuredDescription}>{project.description}</p>
        <div className={styles.featuredTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
