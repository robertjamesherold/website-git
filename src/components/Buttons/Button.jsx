import styles from './_Button.module.scss'
import { Link } from 'react-router-dom'


export function Button({
  className = 'primary',
  text = '',
  variant = 'filled',
  linkTo = '/',
}) {
  const styleVariant = styles[variant] || ''

  return (
    <Link to={linkTo} className={`${styles.button} ${styles[className] || ''} ${styleVariant}`}>
      {text}
    </Link>
  )
}