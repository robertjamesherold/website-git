import { Header } from '@cm/Header/Header'
import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import { FilterNav } from './components/FilterNav/FilterNav'
import { ProjectsGrid } from './components/ProjectsGrid/ProjectsGrid'
import { CallToAction } from '@cm/CallToAction/CallToAction'
import { useProjectFilter } from './hooks/useProjectFilter'
import { projectCategories, projectsData } from './data/projectsData'
import styles from './_Projekte.module.scss'

export function ProjectPage() {
  const { 
    activeFilter, 
    setActiveFilter, 
    filteredProjects, 
    featuredProjects 
  } = useProjectFilter(projectsData)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <Header 
          title="Meine Projekte"
          text="Eine Auswahl meiner Design-Projekte, die Kreativität, Funktionalität und Benutzererfahrung miteinander verbinden."
        ></Header>

        <FeaturedProjects projects={featuredProjects} />

        <FilterNav 
          categories={projectCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProjectsGrid projects={filteredProjects} />

        <CallToAction 
          title = "Haben Sie ein Projekt im Kopf?"
          description = "Lassen Sie uns zusammenarbeiten und Ihre Ideen zum Leben erwecken. Ich freue mich darauf, von Ihrem Projekt zu hören!"
          primaryButtonText = "Projekt besprechen"
          primaryButtonLink = "#contact"
          secondaryButtonText = "E-Mail schreiben"
          secondaryButtonLink = "mailto:robertjamesherold@icloud.com"
          showA={true}
          />
      </div>
    </section>
  )
}

