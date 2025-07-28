import styles from './_ProjectList.module.scss'
import { Link } from 'react-router-dom';

const projectData = [
{
    image: 'https://example.com/image1.jpg',
    alt: 'Project 1',
    title: 'Project One',
    description: 'This is a brief description of Project One. It showcases the main features and technologies used.',
    link: 'https://example.com/project1',
    tags: ['JavaScript', 'React', 'CSS'],
},
{
    image: 'https://example.com/image2.jpg',
    alt: 'Project 2',
    title: 'Project Two',
    description: 'Project Two is an innovative solution that addresses specific challenges in the industry. It utilizes modern frameworks and tools.',
    link: 'https://example.com/project2',
    tags: ['Python', 'Django', 'PostgreSQL'],
},
];

const ProjectCard = ({ image, alt, title, description, link, tags }) => (
  <div className={styles.projectCard}>
    <div className={styles.projectImage}>
        <img src={image} alt={alt} />
    </div>
    <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <a href={link} className={styles.viewAllButton}>View Project</a>
   
    <div className={styles.projectTags}>
        {tags.map(tag => (
            <span key={tag} className={styles.projectTag}>{tag}</span>
        ))}
    </div>
     </div>
  </div>
);

export function ProjectList({ title, data = '', showCta = true}) {
  return (
   <div className={ styles.projects }>
          <h2 className={ styles.projectsTitle }>{title}</h2>
          <div className={ styles.projectsGrid }>
            {data.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          {showCta && <div className={ styles.projectsCta }>
            <Link to="/projekte" className={ styles.viewAllButton }>
              Alle Projekte ansehen
            </Link>
          </div>}
        </div>
  );
}
