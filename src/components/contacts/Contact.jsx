import styles from './_Contact.module.scss'
import Header from '@ly/Header/Header'
import Container from '@ly/Container/Container'
import { ContactForm } from './components/form/ContactForm/ContactForm'
import { FormWrapper } from './components/FormWrapper/FormWrapper'
import { CardItem } from './components/Cards/CardItem'
import { Git, Linked } from '@cm/Social/Social'

export function Contact() {


  return (
    <Container>
      <Header
        title="Kontakt"
        text="Haben Sie ein spannendes Projekt im Kopf? Lassen Sie uns darüber sprechen! Ich freue mich auf Ihre Nachricht."></Header>
      <div className={ styles.mainGrid }>
        <FormWrapper
          showIcon={ false }
          showTitle={ true }
          showText={ true }
          showRow={ true }
          showFlex={ false }
          icon=''
          title='Kontaktformular'
          className='spanTwo'><ContactForm /></FormWrapper>
        <FormWrapper
          title='Telefon'
          text='+49 151 616 60 444'
          icon='📞'
          showIcon={ true }
          showTitle={ true }
          showText={ true }
          showRow={ true }
          href='tel:+4915161660444'
          showA={ true }></FormWrapper>
        <FormWrapper
          title='E-Mail'
          text='robertjamesherold@icloud.com'
          icon='📬'
          showIcon={ true }
          showTitle={ true }
          showA={ true }
          href='mailto:robertjamesherold@icloud.com'
          showText={ true }
          showRow={ true }></FormWrapper>
        <FormWrapper
          title='Adresse'
          text='Im Kammerfest 23'
          textTwo='63628 Bad Soden-Salmünster'
          icon='🏡'
          showIcon={ true }
          showTitle={ true }
          showText={ true }
          showTextTwo={ true }
          showRow={ true }
          ></FormWrapper>


        <FormWrapper
          title='Folgen Sie mir'
          text=''
          icon=''
          showIcon={ false }
          showTitle={ true }
          showText={ false }
          showRow={ true }> <Git /><Linked />
          </FormWrapper>

        <FormWrapper
          title='Verfügbarkeit'
          text='Ich bin offen für Freelance-Projekte, Zusammenarbeit und neue Herausforderungen. Remote-Arbeit ist kein Problem – ich arbeite gerne mit Kunden aus ganz Deutschland und darüber hinaus.'
          icon=''
          showIcon={ false }
          showTitle={ true }
          showText={ true }
          showRow={ true }><span className={ styles.availableStatus }><span className={ styles.statusDot }></span>Verfügbar für neue Projekte</span></FormWrapper>


        <FormWrapper
          title='Schnelle Antwort'
          icon='⏱️'
          text='Ich antworte normalerweise innerhalb von 24 Stunden auf alle Anfragen.'
          showIcon={ true }
          showTitle={ true }
          showText={ true }
          showRow={ false }/>
        <FormWrapper
          title='Häufige Fragen'
          text=''
          icon=''
          showIcon={ false }
          showTitle={ true }
          showText={ false }
          showRow={ true }
          className='spanTwo'>
          <div className={ styles.faqGrid }>

            <CardItem
              title='Wie läuft ein Projekt ab?'
              text='Nach Ihrer Anfrage besprechen wir Ihre Anforderungen, ich erstelle 
                ein Angebot und nach Freigabe starten wir mit dem Design-Prozess.'>
            </CardItem>

            <CardItem
              title='Welche Projekte nehmen Sie an?'
              text='Ich arbeite an Webdesign, UI/UX Design, Branding und digitalen 
                Medienformaten – von kleinen bis zu großen Projekten.'>
            </CardItem>

            <CardItem
              title='Wie lange dauert ein Projekt?'
              text='Die Dauer hängt vom Umfang ab. Ein einfaches Design dauert etwa 
                1-2 Wochen, komplexere Projekte entsprechend länger.'>
            </CardItem>

            <CardItem
              title='Bieten Sie auch Wartung an?'
              text='Ja, ich biete auch langfristige Betreuung und Wartung für 
                bestehende Projekte an.'>
            </CardItem>

          </div></FormWrapper>
      </div>
    </Container>
  )
}