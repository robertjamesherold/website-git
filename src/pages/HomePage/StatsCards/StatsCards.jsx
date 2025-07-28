import styles from './_StatsCards.module.scss'

const statData = [
{  
title: '3+',
text: 'Jahre',
textTwo: 'Studium'
},
{
title: '140',
text: 'ECTS',
textTwo: 'Credits'
},
{
title: '1,7',
text: 'Noten-',
textTwo: 'durchschnitt'
},
{
title: '2024',
text: 'Freelancer',
textTwo: 'seit'
}
];

const StatItem = ({ title, text, textTwo }) => (
    <div className={styles.statItem}>
      <div className={styles.statLabel}>{title}</div>
      <p className={styles.statNumber}>{text}<br/>{textTwo}</p>
    </div>
);

export function StatsCards() {
  return (
    <div className={ styles.stats }>
      <div className={ styles.statsGrid }>
        {statData.map((stat, index) => (
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