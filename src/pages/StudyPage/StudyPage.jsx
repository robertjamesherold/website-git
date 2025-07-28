import { Header }from '@cm/Header/Header'
import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import { FilterNav } from './components/FilterNav/FilterNav'
import { ProjectsGrid } from './components/ProjectsGrid/ProjectsGrid'
import { CallToAction } from '@cm/CallToAction/CallToAction'
import { useProjectFilter } from './hooks/useProjectFilter'
import { caseCategories, caseData } from './data/caseData'
import styles from './_Projekte.module.scss'


export function StudyPage() {
  const { 
    activeFilter, 
    setActiveFilter, 
    filteredProjects, 
    featuredProjects 
  } = useProjectFilter(caseData)

  return (
    <section id="casestudies" className={styles.projects}>
      <div className={styles.container}>
        <Header 
          title="Meine Fallstudien"
          text="Eine Auswahl meiner schriftlichen Arbeiten aus meinem Studium."
        ></Header>

        <FeaturedProjects projects={featuredProjects} />

        <FilterNav 
          categories={caseCategories}
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
