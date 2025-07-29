import { useAchievementsAnimation } from './useAchievementsAnimation.jsx';
import styles from './_AchievementsGrid.module.scss';

const AchievementCard = ({ achievement, index, getAchievementCardStyle }) => (
  <div 
    className={styles.Card}
    style={getAchievementCardStyle(index)}
  >
    <div className={styles.achievementIcon}>{achievement.icon}</div>
    <div className={styles.achievementContent}>
      <h3 className={styles.achievementTitle}>{achievement.title}</h3>
      <p className={styles.achievementDescription}>{achievement.description}</p>
      <span className={styles.achievementTags}>
      <span className={styles.achievementMetric}>{achievement.metric}</span></span>
    </div>
  </div>
);

export default function AchievementsGrid({ title, data }) {
  const { isVisible, elementRef, getAchievementCardStyle } = useAchievementsAnimation();

  return (
    <div className={styles.section} ref={elementRef}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={`${styles.achievementsGrid} ${isVisible ? styles.animated : ''}`}>
        {data.map((achievement, index) => (
          <AchievementCard 
            key={achievement.title} 
            achievement={achievement} 
            index={index}
            getAchievementCardStyle={getAchievementCardStyle}
          />
        ))}
      </div>
    </div>
  );
}