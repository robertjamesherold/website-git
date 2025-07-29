import styles from './_ProjectList.module.scss'
import { Link } from 'react-router-dom';
import { ViewIcon } from '@icons/ViewIcon';

const ProjectCard = ({ image, alt, title, description, link, tags }) => (
  <div className={styles.Card}>
      <div className={styles.featuredImage}>
        <img src={image} alt={title} />
        <div className={styles.featuredOverlay}>
          <Link href={link} className={styles.viewProject}>
           <span><ViewIcon /></span>&nbsp; Projekte ansehen
          </Link>
        </div>
      </div>
      <div className={styles.featuredContent}>
        <h3 className={styles.featuredTitle}>{title}</h3>
        <p className={styles.featuredDescription}>{description}</p>
   
    <div className={styles.featuredTech}>
        {tags.map(tag => (
            <span key={tag} className={styles.techTag}>{tag}</span>
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
