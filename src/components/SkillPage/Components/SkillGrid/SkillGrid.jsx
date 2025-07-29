import styles from './_SkillsGrid.module.scss';
import { useSkillsAnimation } from './useSkillsAnimation.jsx';

const SkillCard = ({ skill, index, getAnimationDelay, getSkillProgressStyle }) => (
  <div 
    className={styles.Card}
    style={getAnimationDelay(index)}
  >
    <div className={styles.skillHeader}>
      <div className={styles.skillIcon}>{skill.icon}</div>
      <div className={styles.skillInfo}>
        <h3 className={styles.skillName}>{skill.name}</h3>
        <p className={styles.skillDescription}>{skill.description}</p>
      </div>
    </div>
    <div className={styles.skillLevel}>
      <div className={styles.skillBar}>
        <div 
          className={styles.skillProgress}
          style={getSkillProgressStyle(skill.level, index)}
        ></div>
      </div>
      <span className={styles.skillPercent}>{skill.level}%</span>
    </div>
  </div>
);

export default function SkillGrid({ title, data }) {
  const { isVisible, elementRef, getSkillProgressStyle, getAnimationDelay } = useSkillsAnimation();

  return (
    <div className={styles.section} ref={elementRef}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={`${styles.skillsGrid} ${isVisible ? styles.animated : ''}`}>
        {data.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index} 
            getAnimationDelay={getAnimationDelay}
            getSkillProgressStyle={getSkillProgressStyle}
          />
        ))}
      </div>
    </div>
  );
}
