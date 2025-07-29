import { useState, useEffect } from 'react'
import Header from '@cm/Header/Header'
import Section from '@ly/Section/Section'
import { CaseStudyNav } from './components/CaseStudyNav/CaseStudyNav'
import { CaseStudyContent } from './components/CaseStudyContent/CaseStudyContent'
import { CaseStudyMeta } from './components/CaseStudyMeta/CaseStudyMeta'
import { CaseStudySidebar } from './components/CaseStudySidebar/CaseStudySidebar'

export function UniversalCaseStudy({ caseStudyData }) {
 const [activeSection, setActiveSection] = useState('')

  // Erste Section als Standard setzen
  useEffect(() => {
    if (caseStudyData?.sections?.length > 0 && !activeSection) {
      setActiveSection(caseStudyData.sections[0].id)
    }
  }, [caseStudyData, activeSection])

 


 const {
    title,
    subtitle,
    client,
    date,
    duration,
    category,
    tags,
    coverImage,
    sections,
    gallery,
    relatedStudies,
    imageMap = {}
  } = caseStudyData;

  return (
   <>
      {/* Header mit Cover Image */}
      <Header 
        title={title}
         />

    <Section id='sidebar'>
        {/* Sidebar mit Meta-Infos und Navigation */}
        <CaseStudySidebar>
          <CaseStudyMeta 
            client={client}
            date={date}
            duration={duration}
            category={category}
            tags={tags}
          />
          
          <CaseStudyNav 
            sections={sections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />
        </CaseStudySidebar>
</Section>
     <Section id='main'>
        {/* Main Content */}
          <CaseStudyContent 
            sections={sections}
            activeSection={activeSection}
            onSectionVisible={setActiveSection}
            imageMap={imageMap}
          />
           
    </Section>
 </>
  )
}