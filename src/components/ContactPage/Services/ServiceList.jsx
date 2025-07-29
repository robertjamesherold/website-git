import styles from './_ServiceList.module.scss';

const Card = ({ icon, title, lineone, linetwo }) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}>{icon}</div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{lineone}<br/>{linetwo}</p>
  </div>
);

export default function ServiceList({ data, title }) {
  return (
    <div className={styles.services}>
      <div className={styles.servicesGrid}>
        {data.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            lineone={service.lineone}
            linetwo={service.linetwo}
          />
        ))}
      </div>
    </div>
  );
}