import styles from './_FeaturedCard.module.scss'
import { ViewIcon } from '@icons/ViewIcon';
import { Link } from 'react-router-dom';

export default function FeaturedCard({ project }) {
  return (
    <div className={styles.Card}>
      <div className={styles.featuredImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.featuredOverlay}>
          <Link to={project.link} className={styles.viewProject}>
           <span><ViewIcon /></span>&nbsp; Projekte ansehen
          </Link>
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
