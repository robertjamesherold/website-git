import styles from './_StatItem.module.scss'

export default function StatItem({ title, value }) {
  return (
    <div className={styles.statItem}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.value}>{value}</p>
    </div>
  )
}
