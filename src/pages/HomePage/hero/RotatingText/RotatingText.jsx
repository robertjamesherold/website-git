import { useRotatingText } from './useRotatingText'
import styles from './_RotatingText.module.scss'


export function RotatingText({ items, delay }) {
  const current = useRotatingText(items, delay)
  return <span className={styles[current]}  ><br/>{current}</span>
}
