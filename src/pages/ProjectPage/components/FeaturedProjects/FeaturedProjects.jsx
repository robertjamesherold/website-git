import { FeaturedCard } from '../FeaturedCard/FeaturedCard'
import styles from './_FeaturedProjects.module.scss'

export function FeaturedProjects({ projects }) {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.sectionTitle}>Ausgewählte Projekte</h2>
      <div className={styles.featuredGrid}>
        {projects.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

