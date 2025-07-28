import styles from '../style/_ProjectList.module.scss'
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, alt, title, description, link, tags }) => (
  <div className={styles.projectCard}>
    <div className={styles.projectImage}>
        <img src={image} alt={alt} />
    </div>
    <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <a href={link} className={styles.viewAllButton}>Hier ansehen</a>
   
    <div className={styles.projectTags}>
        {tags.map(tag => (
            <span key={tag} className={styles.projectTag}>{tag}</span>
        ))}
    </div>
     </div>
  </div>
);

export default function ProjectList({ title, data, showCta = true, link = '', cta = ''}) {
  return (
   <div className={ styles.projects }>
          <h2 className={ styles.projectsTitle }>{title}</h2>
          <div className={ styles.projectsGrid }>
            {data.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {showCta && <div className={ styles.projectsCta }>
            <Link to={link} className={ styles.viewAllButton }>
              {cta}
            </Link>
          </div>}
        </div>
  );
}
