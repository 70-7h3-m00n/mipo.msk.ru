import styles from './CardCounter.module.scss'
import classNames from 'classnames'

interface CardCounterProps {
  active: boolean
  count: number
  title: string
}

export const CardCounter = ({ active, count, title }:CardCounterProps) => {
  return (
    <div className={classNames(styles.cardItem, active && styles.active)}>
      <div className={styles.counter}>{count}</div>
      <div className={styles.text}>{title}</div>
    </div>
  )
}
