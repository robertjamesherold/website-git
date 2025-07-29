import styles from './_Personal.module.scss'

const Stat = ({ number, label }) => (
  <div className={styles.stat}>
    <span className={styles.statNumber}>{number}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

export default function Personal({ title, text, stats }) {
  return (
    <div className={styles.personal}>
      <div className={styles.personalContent}>
        <h2 className={styles.personalTitle}>{title}</h2>
        <div className={styles.personalGrid}>
          <div className={styles.personalText}>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className={styles.personalStats}>
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}