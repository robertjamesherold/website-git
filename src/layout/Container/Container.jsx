import styles from './_Container.module.scss';

export default function Container({ children }) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
}