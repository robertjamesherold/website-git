import styles from './_Timeline.module.scss'

const TimelineItem = ({ icon, title, date, text }) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineMarker}>
      <div className={styles.timelineIcon}>{icon}</div>
    </div>
    <div className={styles.timelineContent}>
      <h3 className={styles.timelineItemTitle}>{title}</h3>
      <span className={styles.timelineDate}>{date}</span>
      <p className={styles.timelineText}>{text}</p>
    </div>
  </div>
);

export default function Timeline({ title, data }) {
  return (
    <div className={styles.timeline}>
      <h2 className={styles.timelineTitle}>{title}</h2>
      {data.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
}