// Services.jsx
import styles from './_Services.module.scss';

const servicedata = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    text: 'Benutzerfreundliche Interfaces und durchdachte User Experience mit Figma und modernen Design-Prinzipien.'
  },
  {
    icon: '💻',
    title: 'Webentwicklung',
    text: 'Moderne Webanwendungen mit React, Node.js und MongoDB für optimale Performance.'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    text: 'Entwicklung von plattformübergreifenden Apps mit React Native für iOS und Android.'
  },
  {
    icon: '🎬',
    title: 'Video-Produktion',
    text: 'Professionelle Videoproduktion und -bearbeitung für Marketing und Social Media.'
  }
];

const Card = ({ icon, title, text }) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}>{icon}</div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{text}</p>
  </div>
);

export function Services() {
  return (
  <div className={styles.services}>
    <h2 className={styles.servicesTitle}>Was ich gestalte</h2>
        <div className={styles.servicesGrid}>
            {servicedata.map((service, index) => (
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