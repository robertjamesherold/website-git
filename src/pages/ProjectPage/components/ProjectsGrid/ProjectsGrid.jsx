import { ProjectCard } from '../ProjectCard/ProjectCard'
import styles from './_ProjectsGrid.module.scss'

export function ProjectsGrid({ projects }) {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

