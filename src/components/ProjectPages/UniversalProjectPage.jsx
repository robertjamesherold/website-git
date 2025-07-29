import Header from '@cm/Header/Header'
import Section from '@ly/Section/Section'
import FeaturedCard from '@cm/ProjectPages/components/FeaturedCard/FeaturedCard'
import FeaturedProjects from '@cm/ProjectPages/components/FeaturedProjects/FeaturedProjects'
import FilterNav from '@cm/ProjectPages/components/FilterNav/FilterNav'
import ProjectsGrid from '@cm/ProjectPages/components/ProjectsGrid/ProjectsGrid'
import CallToAction from '@cm/CallToAction/CallToAction'
import useProjectFilter from '@cm/ProjectPages/hooks/useProjectFilter'

export function UniversalProjectPage({

  // Page Content Props
  headerTitle,
  headerText,

  // Featured Title 
  featuredTitle, 
  
  // Filter Title
  filterTitle,
  
  // Data Props
  categories,
  projectsData,
  
  // CTA Props (optional)
  showCTA = true,
  ctaTitle = "Haben Sie ein Projekt im Kopf?",
  ctaDescription = "Lassen Sie uns zusammenarbeiten und Ihre Ideen zum Leben erwecken.",
  ctaPrimaryText = "Projekt besprechen",
  ctaPrimaryLink = "#contact",
  ctaSecondaryText = "E-Mail schreiben", 
  ctaSecondaryLink = "mailto:robertjamesherold@icloud.com",
  showPrimaryButton = true,
  showSecondaryButton = true
}) {
  
  const { activeFilter, setActiveFilter, filteredProjects, featuredProjects } = useProjectFilter(projectsData)

  return (
    <>
      <Header
        title={headerTitle}
        text={headerText}
      />
      
      {/* Featured Projects Section */}
      <Section id='featured'>
        <FeaturedProjects 
          title={featuredTitle} 
          projects={featuredProjects} 
          CardComponent={FeaturedCard} 
        />
      </Section>
      
      {/* All Projects Section */}
      <Section id='all'>
        <FilterNav
        title={filterTitle}
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProjectsGrid 
          projects={filteredProjects} 
          CardComponent={FeaturedCard} 
        />
      </Section>
      
      {/* Call to Action Section */}
      {showCTA && (
        <Section id='cta'>
          <CallToAction
            title={ctaTitle}
            description={ctaDescription}
            primaryButtonText={ctaPrimaryText}
            primaryButtonLink={ctaPrimaryLink}
            secondaryButtonText={ctaSecondaryText}
            secondaryButtonLink={ctaSecondaryLink}
            showA={true}
            showB={true}
            showPrimaryButton={showPrimaryButton}
            showSecondaryButton={showSecondaryButton}
          />
        </Section>
      )}
    </>
  )
}