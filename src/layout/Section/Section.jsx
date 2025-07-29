import styles from './_Section.module.scss';
import Container from '@ly/Container/Container';

export default function Section({ id, children }) {
  return (
    <section id={id} href='/#{id}' className={styles.section}>
        <Container>
            {children}
        </Container>
    </section>
  );
}

