import { useProcessAnimation } from './useProcessAnimation.jsx';
import styles from './_ProcessGrid.module.scss';

const ProcessCard = ({ process, index, getProcessCardStyle }) => (
  <div 
    className={styles.Card}
    style={getProcessCardStyle(index)}
  >
    <div className={styles.processIcon}>{process.icon}</div>
    <h3 className={styles.processTitle}>{process.title}</h3>
    <p className={styles.processDescription}>{process.description}</p>
    <div className={styles.processSkills}>
      {process.skills.map((skill, skillIndex) => (
        <span key={skillIndex} className={styles.processSkill}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function ProcessGrid({ title, data }) {
  const { isVisible, elementRef, getProcessCardStyle } = useProcessAnimation();

  return (
    <div className={styles.section} ref={elementRef}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={`${styles.processGrid} ${isVisible ? styles.animated : ''}`}>
        {data.map((process, index) => (
          <ProcessCard 
            key={process.title} 
            process={process} 
            index={index}
            getProcessCardStyle={getProcessCardStyle}
          />
        ))}
      </div>
    </div>
  );
}