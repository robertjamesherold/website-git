import styles from './_ContactForm.module.scss'
import { TextInput } from '../TextInput/TextInput'
import { TextArea } from '../TextArea/TextArea'

export function ContactForm(){

  
  return (
  <>
    <form className={styles.contactForm} name="contact" method="POST" data-netlify="true">
      <TextInput 
        label="Vorname"
        inputName="Vorname"
        className={styles.colSix}
        required={true}
      />
     <TextInput
        label="Nachname"
        inputName="Nachname"
        className={styles.colSix}
        required={true}
      />
   <TextInput
        inputName="E-Mail"
        label="E-Mail"
        className={styles.colFull}
        required={true}
      />
      <TextInput
        inputName="Betreff"
        label="Betreff"
        className={styles.colFull}
        isRequired={true}

      /> 
      <TextArea
        inputName='Nachricht'
        label="Nachricht"
        className={styles.colFull}
                required={true}
      />
      <button type='submit' className={`${styles.submitButton} ${styles.colFull}`}>
Senden      </button>
    </form>
  </>
  )
}
