import styles from './_GridItem.module.scss'

export function GridItem(props) {
  const {
    children,
    gridColumn,
    gridRow,
     backgroundColor,
  } = props

  return (
    <div
      className={styles.griditem}
      style={{
        gridColumn: gridColumn || 'auto',
        gridRow: gridRow || 'auto',
        backgroundColor,
      }}
    >
      {children}
    </div>
  )
}