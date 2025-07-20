import { useState } from 'react'
import styles from './_Projects.module.scss'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projectCategories = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'webdesign', label: 'Webdesign' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'mobile', label: 'Mobile Design' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website Redesign',
      category: 'webdesign',
      description: 'Komplettes Redesign einer E-Commerce-Plattform mit Fokus auf User Experience und Conversion-Optimierung.',
      image: 'https://picsum.photos/600/400?random=1',
      technologies: ['Figma', 'HTML', 'CSS', 'WordPress'],
      link: '#project-1',
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App Interface',
      category: 'ui-ux',
      description: 'Intuitive Benutzeroberfläche für eine Banking-App mit Schwerpunkt auf Sicherheit und Benutzerfreundlichkeit.',
      image: 'https://picsum.photos/600/400?random=2',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      link: '#project-2',
      featured: true
    },
    {
      id: 3,
      title: 'Startup Brand Identity',
      category: 'branding',
      description: 'Entwicklung einer kompletten Markenidentität für ein Tech-Startup inklusive Logo, Farbschema und Typografie.',
      image: 'https://picsum.photos/600/400?random=3',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      link: '#project-3',
      featured: false
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'webdesign',
      description: 'Responsive Website für ein gehobenes Restaurant mit Online-Reservierungssystem und interaktiver Speisekarte.',
      image: 'https://picsum.photos/600/400?random=4',
      technologies: ['WordPress', 'CSS', 'JavaScript'],
      link: '#project-4',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness App Prototype',
      category: 'mobile',
      description: 'Interaktiver Prototyp für eine Fitness-App mit Workout-Tracking und sozialen Features.',
      image: 'https://picsum.photos/600/400?random=5',
      technologies: ['Figma', 'Prototyping', 'After Effects'],
      link: '#project-5',
      featured: true
    },
    {
      id: 6,
      title: 'Corporate Dashboard Design',
      category: 'ui-ux',
      description: 'Dashboard-Interface für ein Unternehmens-CRM mit komplexer Datenvisualisierung und Reporting-Features.',
      image: 'https://picsum.photos/600/400?random=6',
      technologies: ['Figma', 'Data Visualization', 'Prototyping'],
      link: '#project-6',
      featured: false
    },
    {
      id: 7,
      title: 'Non-Profit Organization Rebrand',
      category: 'branding',
      description: 'Rebranding einer gemeinnützigen Organisation mit emotionalem Storytelling und modernem Erscheinungsbild.',
      image: 'https://picsum.photos/600/400?random=7',
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      link: '#project-7',
      featured: false
    },
    {
      id: 8,
      title: 'Travel App Interface',
      category: 'mobile',
      description: 'Benutzerfreundliche Reise-App mit Buchungsfunktion, Kartendarstellung und personalisierten Empfehlungen.',
      image: 'https://picsum.photos/600/400?random=8',
      technologies: ['Figma', 'User Journey Mapping', 'Prototyping'],
      link: '#project-8',
      featured: false
    },
    {
      id: 9,
      title: 'Portfolio Website für Künstler',
      category: 'webdesign',
      description: 'Minimalistische Portfolio-Website für einen Künstler mit Galerie-Funktion und Online-Shop.',
      image: 'https://picsum.photos/600/400?random=9',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      link: '#project-9',
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Meine Projekte</h1>
          <p className={styles.subtitle}>
            Eine Auswahl meiner Design-Projekte, die Kreativität, Funktionalität und 
            Benutzererfahrung miteinander verbinden.
          </p>
        </div>

        {/* Featured Projects */}
        <div className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Ausgewählte Projekte</h2>
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.featuredCard}>
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
            ))}
          </div>
        </div>

        {/* Filter Navigation */}
        <div className={styles.filterSection}>
          <h2 className={styles.sectionTitle}>Alle Projekte</h2>
          <div className={styles.filterNav}>
            {projectCategories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${
                  activeFilter === category.id ? styles.active : ''
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              data-category={project.category}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectActions}>
                    <a href={project.link} className={styles.viewButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      Ansehen
                    </a>
                    <a href="#details" className={styles.detailsButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
                      </svg>
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
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Haben Sie ein Projekt im Kopf?</h2>
          <p className={styles.ctaDescription}>
            Lassen Sie uns zusammenarbeiten und Ihre Ideen zum Leben erwecken. 
            Ich freue mich darauf, von Ihrem Projekt zu hören!
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaButton}>
              Projekt besprechen
            </a>
            <a href="mailto:robertjamesherold@icloud.com" className={styles.ctaButtonSecondary}>
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}