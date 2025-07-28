import { projectCategories } from '../../data/projectsData'
import { ViewIcon } from '../Icons/ViewIcon'
import { InfoIcon } from '../Icons/InfoIcon'
import styles from './_ProjectCard.module.scss'

export function ProjectCard({ project }) {
  return (
    <div 
      className={styles.projectCard}
      data-category={project.category}
    >
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.projectOverlay}>
          <div className={styles.projectActions}>
            <a href={project.link} className={styles.viewButton}>
              <ViewIcon />
              Ansehen
            </a>
            <a href="#details" className={styles.detailsButton}>
              <InfoIcon />
              Details
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.projectContent}>
        <div className={styles.projectMeta}>
          <span className={styles.projectCategory}>
            {projectCategories.find(cat => cat.id === project.category)?.label}
          </span>
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
