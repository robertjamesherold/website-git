import styles from './Contact.module.css'
import { ContactForm } from '@cm/form/ContactForm/ContactForm'
import { ContactInformation } from './ContactInformation'
import { Container } from '@ly/Container/Container'


export function Contact({ id }) {

  return (

      
            <Container>
              <ContactForm
                buttonText='Absenden'
                formTitle='Kontaktformular'>
              </ContactForm>
            </Container>
    
  )
}