import styles from './SelectOption.module.scss'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface SelectOptionProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string
  href: string
}

export const SelectOption = ({title, href, ...props}: SelectOptionProps) => {
  return (
    <Link className={styles.option} href={href} {...props}>
      {title}
    </Link>
  )
}
