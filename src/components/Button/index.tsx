import styles from './styles.module.scss'
import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

interface MyButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  active?: boolean,
  styleOption: 'round' | 'square',
}

const Button = ({ text, active, styleOption = 'round', ...props }: MyButtonProps ) => {
  return (
    <button className={classNames(
      active ? styles.btnActive  : styles.btn,
      styles[styleOption]
    )}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
