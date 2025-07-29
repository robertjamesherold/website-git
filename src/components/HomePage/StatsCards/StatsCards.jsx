import styles from './_StatsCards.module.scss'



const StatItem = ({ title, text, textTwo }) => (
    <div className={styles.statItem}>
      <div className={styles.statLabel}>{title}</div>
      <p className={styles.statNumber}>{text}<br/>{textTwo}</p>
    </div>
);

export default function StatsCards({data}) {
  return (
    <div className={ styles.stats }>
      <div className={ styles.statsGrid }>
        {data.map((stat, index) => (
          <StatItem 
            key={index} 
            title={stat.title} 
            text={stat.text} 
            textTwo={stat.textTwo} 
            />
        ))}
      </div>
    </div>
  );
}