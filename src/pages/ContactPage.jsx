import Header from '@cm/Header/Header'
import Section from '@ly/Section/Section'
import ServiceList from '@cm/ContactPage/Services/ServiceList'
import { ContactForm } from '@cm/ContactPage/FormCard/form/ContactForm/ContactForm'
import { FormCard } from '@cm/ContactPage/FormCard/FormCard'
import { serviceData } from '@data/contactData'

export function ContactPage() {
  return (
    <>
      <Header
        title="Kontakt"
        text="Haben Sie ein spannendes Projekt im Kopf? 
        
        Lassen Sie uns darüber sprechen! 
        
        Ich freue mich auf Ihre Nachricht."
      />
      
      <Section id='contact'>
          
          {/* Kontaktformular */}
          <FormCard layout="block" className="spanTwo"
           title="Kontaktformular">
            <ContactForm />
        </FormCard>

        {/* Values Section */}
        <ServiceList
          data={serviceData}
        />
            </Section>
      

   
    </>
  )
}