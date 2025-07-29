import { useState, useEffect } from 'react'
import Section from '@ly/Section/Section'
import Header from '@cm/Header/Header'
import { CaseStudyContent } from './components/CaseStudyContent/CaseStudyContent'
import { CaseStudyMeta } from './components/CaseStudyMeta/CaseStudyMeta'
import { CaseStudySidebar } from './components/CaseStudySidebar/CaseStudySidebar'
import { CaseStudyGallery } from './components/CaseStudyGallery/CaseStudyGallery'

export function UniversalProjectStudy({ projectStudyData }) {
  const [activeSection, setActiveSection] = useState('')

  // Erste Section als Standard setzen
  useEffect(() => {
    if (projectStudyData?.sections?.length > 0 && !activeSection) {
      setActiveSection(projectStudyData.sections[0].id)
    }
  }, [projectStudyData, activeSection])


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
  } = projectStudyData;

  return (
<>
<Header 
        title={title}
         />

        {/* Main Content */}
 
      <Section id='header'>
        {/* Sidebar mit Meta-Infos und Navigation */}
          <CaseStudyMeta 
            client={client}
            date={date}
            duration={duration}
            category={category}
            tags={tags}
          />
          
        
         </Section>
       <Section id='main'>
       
             {gallery && gallery.length > 0 && (
            <CaseStudyGallery images={gallery} />
          )}
          </Section>
    </>
  )
}