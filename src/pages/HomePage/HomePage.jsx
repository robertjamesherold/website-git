import { useState, useEffect } from 'react'
import { statsData, serviceData, projectData } from '@data/homepageData'
import Section from '@ly/Section/Section'
import Hero from '@cm/HomePage/Hero/Hero' 
import StatsCards from '@cm/HomePage/StatsCards/StatsCards'
import ServiceList from '@cm/HomePage/Services/ServiceList'
import ProjectList from '@cm/HomePage/ProjectList/ProjectList'
import CallToAction from '@cm/CallToAction/CallToAction'




export function HomePage() {
  const [currentTech, setCurrentTech] = useState(0)

  const technologies = [
    'UI/UX Design',
    'Webdesign',
    'Figma',
    'HTML & CSS',
    'WordPress',
    'Photoshop'
  ]

  // Auto-rotate technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [technologies.length])

  return (
  <>
    <Section id="home">
        <Hero />
        <StatsCards data={statsData} />
    </Section>
    <Section id="services">
        <ServiceList 
          title="Meine Dienstleistungen"
          data={serviceData}
          />
    </Section>
    <Section id="projects">
        <ProjectList
                title="Meine Projekte"
                data={projectData}
                showCta={true}
                link="/projekte"
                cta="Alle Projekte ansehen"
            />
    </Section>
    <Section id="cta">
        <CallToAction 
          title='Bereit für Ihr nächstes Design-Projekt?'
          text='Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. Ich freue mich auf Ihre Nachricht!'
          primaryButtonText='Kontaktiere mich'
          primaryButtonLink='/kontakt'
          showPrimaryButton={true}
          showSecondaryButton={false}
        />
    </Section>
  </>
  )
}