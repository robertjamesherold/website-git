import styles from './_Contact.module.scss'
import Header from '@cm/Header/Header'
import Section from '@ly/Section/Section'
import { ContactForm } from './components/form/ContactForm/ContactForm'
import { FormWrapper } from '@cm/ContactCards/ContactCard'
import { CardItem } from './components/Cards/CardItem'
import { Git, Linked } from '@cm/Social/Social'
import { 
  ContactInfo, 
  AddressInfo, 
  SocialSection, 
  AvailabilitySection, 
  InfoCard, 
  FAQSection 
} from '@cm/ContactCards/ContactComponents'

export function ContactPage() {
  return (
    <>
      <Header
        title="Kontakt"
        text="Haben Sie ein spannendes Projekt im Kopf? Lassen Sie uns darüber sprechen! Ich freue mich auf Ihre Nachricht."
      />
      
      <Section id='contact'>
        <div className={styles.mainGrid}>
          
          {/* Kontaktformular */}
          <FormWrapper layout="flex" className="spanTwo">
            <ContactForm />
          </FormWrapper>

          {/* Kontaktinformationen */}
          <ContactInfo
            title="Telefon"
            text="+49 151 616 60 444"
            icon="📞"
            href="tel:+4915161660444"
          />

          <ContactInfo
            title="E-Mail"
            text="robertjamesherold@icloud.com"
            icon="📬"
            href="mailto:robertjamesherold@icloud.com"
          />

          <AddressInfo
            title="Adresse"
            addressLine1="Im Kammerfest 23"
            addressLine2="63628 Bad Soden-Salmünster"
            icon="🏡"
          />

          {/* Social Media */}
          <SocialSection title="Folgen Sie mir">
            <Git />
            <Linked />
          </SocialSection>

          {/* Verfügbarkeit */}
          <AvailabilitySection
            title="Verfügbarkeit"
            text="Ich bin offen für Freelance-Projekte, Zusammenarbeit und neue Herausforderungen. Remote-Arbeit ist kein Problem – ich arbeite gerne mit Kunden aus ganz Deutschland und darüber hinaus."
          >
            <span className={styles.availableStatus}>
              <span className={styles.statusDot}></span>
              Verfügbar für neue Projekte
            </span>
          </AvailabilitySection>

          {/* Schnelle Antwort */}
          <InfoCard
            title="Schnelle Antwort"
            text="Ich antworte normalerweise innerhalb von 24 Stunden auf alle Anfragen."
            icon="⏱️"
          />

          {/* FAQ */}
          <FAQSection title="Häufige Fragen" className="spanTwo">
            <div className={styles.faqGrid}>
              <CardItem
                title="Wie läuft ein Projekt ab?"
                text="Nach Ihrer Anfrage besprechen wir Ihre Anforderungen, ich erstelle ein Angebot und nach Freigabe starten wir mit dem Design-Prozess."
              />
              <CardItem
                title="Welche Projekte nehmen Sie an?"
                text="Ich arbeite an Webdesign, UI/UX Design, Branding und digitalen Medienformaten – von kleinen bis zu großen Projekten."
              />
              <CardItem
                title="Wie lange dauert ein Projekt?"
                text="Die Dauer hängt vom Umfang ab. Ein einfaches Design dauert etwa 1-2 Wochen, komplexere Projekte entsprechend länger."
              />
              <CardItem
                title="Bieten Sie auch Wartung an?"
                text="Ja, ich biete auch langfristige Betreuung und Wartung für bestehende Projekte an."
              />
            </div>
          </FAQSection>

        </div>
      </Section>
    </>
  )
}