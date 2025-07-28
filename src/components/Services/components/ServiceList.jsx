import styles from '../style/_ServiceList.module.scss';

const Card = ({ icon, title, text }) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}>{icon}</div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{text}</p>
  </div>
);

export function ServiceList({ data, title }) {
  return (
    <div className={styles.services}>
      <h2 className={styles.servicesTitle}>{title}</h2>
      <div className={styles.servicesGrid}>
        {data.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </div>
  );
}