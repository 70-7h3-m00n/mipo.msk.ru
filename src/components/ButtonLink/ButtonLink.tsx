import styles from './ButtonLink.module.scss'
import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

interface MyButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  active?: boolean,
  hrefLink?: string
  styleOption: 'round' | 'square',
  className?: string
}

export const ButtonLink = ({ text, active, hrefLink, styleOption = 'round', className, ...props }: MyButtonProps ) => {
  const router = useRouter()

  return (
    <button className={classNames(
        active ? styles.btnActive : styles.btn,
              styles[styleOption], className
            )}
            onClick={() => hrefLink && router.push(hrefLink, '', {scroll: false})}
            {...props}
    >
      {text}
    </button>
  )
}
