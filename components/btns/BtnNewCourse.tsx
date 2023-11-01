import React from 'react'
import styles from '@/styles/components/btns/BtnNewCourse.module.sass'

type Props = {
  text: string
}

const BtnNewCourse = ({text}: Props) => {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  )
}

export default BtnNewCourse
