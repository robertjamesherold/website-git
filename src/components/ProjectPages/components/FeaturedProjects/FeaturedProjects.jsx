import FeaturedCard from '../FeaturedCard/FeaturedCard'
import styles from './_FeaturedProjects.module.scss'

export default function FeaturedProjects({ projects, title }) {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.featuredGrid}>
        {projects.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

