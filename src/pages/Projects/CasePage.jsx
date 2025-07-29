import { UniversalProjectPage } from '@cm/ProjectPages/UniversalProjectPage'
import { caseCategories, caseData } from '@data/caseData'

export function CasePage() {
  return ( 
    <UniversalProjectPage
      // Header Content
      headerTitle="Meine Fallstudien"
      headerText="Eine Auswahl meiner schriftlichen Arbeiten aus meinem Studium mit detaillierten Einblicken in den Design-Prozess."
      

      // Featured Projects
      featuredTitle="Ausgewählte Fallstudien"

      // Filter
      filterTitle="Alle Fallstudien"

      // Data
      categories={caseCategories}
      projectsData={caseData}
      
      // CTA
      showCTA={false}
      ctaTitle="Interesse an einer Zusammenarbeit?"
      ctaDescription="Schauen Sie sich meine Arbeitsweise in den Fallstudien an und lassen Sie uns über Ihr Projekt sprechen."
      ctaPrimaryText="Kontaktiere mich"
      ctaPrimaryLink="/kontakt"
      showSecondaryButton={false}
    />
  )
}