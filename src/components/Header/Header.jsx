import styles from './_Header.module.scss';
import Section from '@ly/Section/Section';

export default function Header ({ title, text , id}){

  return (
    <Section id={id}>
      <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{text}</p>
      </div>
    </Section>
  )};

