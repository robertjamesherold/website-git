import styles from './_ContactForm.module.scss'
import { TextInput } from '@cm/form/TextInput/TextInput'
import { TextArea } from '@cm/form/TextArea/TextArea'

export function ContactForm({
  formTitle = '',
 }) {
  
  return (
    <form className={styles.contactForm} name="contact" method="POST" data-netlify="true">
      <div className={styles.formHeader}>
        <div className={styles.formHeadlines}>
      <h2 className={styles.formTitle}>{formTitle}</h2>
          <div className={styles.formDivider}> </div></div>
      </div>
      <input type="hidden" name="form-name" value="contact" />
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

      />
      <TextArea
        inputName='Nachricht'
        label="Nachricht"
        className={styles.colFull}
      />
      <button type='submit' className={`${styles.submitButton} ${styles.colFull}`}>
Senden      </button>
    </form>
  )
}
