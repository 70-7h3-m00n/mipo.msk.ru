import React, { ButtonHTMLAttributes, CSSProperties } from 'react'
import styles from '@/styles/components/btns/BtnNewCourse.module.sass'
import classNames from 'classnames'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  className?: CSSProperties
  idElement?: string
}

const BtnNewCourse = ({text, className, idElement = 'formCourse' , ...otherProps}: Props) => {
  const scrollToBlock = () => {
    const $elem = window.document.querySelector(`#${idElement}`)!
    $elem.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <button onClick={scrollToBlock} className={classNames(styles.btn, className)} {...otherProps}>{text}</button>
  )
}

export default BtnNewCourse
