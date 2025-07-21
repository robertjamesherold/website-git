import styles from './_Header.module.scss';

function Header ({ title, description }){

  return (
      <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{description}</p>
      </div>
  )};

export default Header;