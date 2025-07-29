import { timelineData, serviceData, personalData } from '@data/storyData'
import Section from '@ly/Section/Section'
import Header from '@cm/Header/Header'
import Timeline from '@cm/StoryPage/components/Timeline/Timeline'
import ServiceList from '@cm/StoryPage/components/Services/ServiceList'
import Personal from '@cm/StoryPage/components/Personal/Personal'
import CallToAction from '@cm/CallToAction/CallToAction'

export function StoryPage() {
  return (
  <>
      <Header 
          id='story'
          title="Meine Story"
          text="Wie aus Neugier Leidenschaft wurde und aus Code echte Lösungen entstehen."
        />
 
        {/* Story Timeline */}
    <Section id="timeline">
        <Timeline 
          title="Mein Weg zur Entwicklung"
          data={timelineData}
        />
    </Section>
        {/* Values Section */}
    <Section id="values">
        <ServiceList
          title="Was mich antreibt?"
          data={serviceData}
        />
     </Section>


        {/* Personal Section */}
      <Section id="personal">
          <Personal 
          title={personalData.title}
          text={personalData.text}
          stats={personalData.stats}
        />
        </Section>

{/* Call to Action Section */}
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