import styles from './_Header.module.scss';

export function Header ({ title, text }){

  return (
      <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{text}</p>
      </div>
  )};

