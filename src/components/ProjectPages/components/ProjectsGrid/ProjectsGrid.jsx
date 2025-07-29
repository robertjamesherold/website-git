import FeaturedCard from '../FeaturedCard/FeaturedCard' 
import styles from './_ProjectsGrid.module.scss'

export default function ProjectsGrid({ projects }) {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <FeaturedCard key={project.id} project={project} />
      ))}
    </div>
  )
}