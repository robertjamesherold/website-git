import styles from './_CardItem.module.scss'

export function CardItem({title, text}) {
	return (
		   <div className={styles.cardItem}>
              <h3 className={styles.cardTitle}>{ title }</h3>
              <p className={styles.cardText}>{ text }</p>
            </div>
	)
};
