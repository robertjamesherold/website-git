import { UniversalProjectPage } from '@cm/ProjectPages/UniversalProjectPage'
import { projectCategories, projectsData } from '@data/projectsData'

export function ProjectPage() {
  return (
    <UniversalProjectPage
      // Header Content
      headerTitle="Meine Projekte"
      headerText="Eine Auswahl meiner besten Arbeiten aus verschiedenen Bereichen des Designs und der Entwicklung."
      
      // Featured Projects
      featuredTitle="Ausgewählte Projekte"

      // Filter
      filterTitle="Alle Projekte"

      // Data
      categories={projectCategories}
      projectsData={projectsData}
      
      // CTA (optional - verwendet defaults)
      showCTA={true}
      ctaTitle="Interesse an einer Zusammenarbeit?"
      ctaDescription="Schauen Sie sich meine Arbeitsweise in den Fallstudien an und lassen Sie uns über Ihr Projekt sprechen."
      ctaPrimaryText="Kontaktiere mich"
      ctaPrimaryLink="/kontakt"
      showSecondaryButton={false}
    />
  )
}