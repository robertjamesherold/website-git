import styles from './_ContactCards.module.scss'
import { FormWrapper } from '@cm/ContactCards/ContactCard'

// Komponente für Kontaktinformationen mit Icon und Link
export const ContactInfo = ({ title, text, icon, href, className = '' }) => (
  <FormWrapper layout="flex" className={className}>
    {icon && <div className={styles.icon}>{icon}</div>}
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.textWrapper}>
        <a href={href} className={styles.text}>{text}</a>
      </div>
    </div>
  </FormWrapper>
);

// Komponente für Adresse (mit zwei Zeilen Text)
export const AddressInfo = ({ title, addressLine1, addressLine2, icon }) => (
  <FormWrapper layout="flex">
    <div className={styles.icon}>{icon}</div>
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>{addressLine1}</div>
        <div className={styles.text}>{addressLine2}</div>
      </div>
    </div>
  </FormWrapper>
);

// Komponente für Social Media Links
export const SocialSection = ({ title, children }) => (
  <FormWrapper layout="flex">
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.flexRow}>{children}</div>
    </div>
  </FormWrapper>
);

// Komponente für Text mit Status
export const AvailabilitySection = ({ title, text, children }) => (
  <FormWrapper layout="flex">
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.flexRow}>{children}</div>
    </div>
  </FormWrapper>
);

// Komponente für Info mit Icon (vertikal)
export const InfoCard = ({ title, text, icon }) => (
  <FormWrapper layout="flex">
    <div className={styles.icon}>{icon}</div>
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  </FormWrapper>
);

// Komponente für FAQ Sektion
export const FAQSection = ({ title, children, className = '' }) => (
  <FormWrapper layout="flex" className={className}>
    <div className={styles.content}>
      <div className={styles.title}>{title}</div>
      <div className={styles.flexRow}>{children}</div>
    </div>
  </FormWrapper>
);