import styles from './CardModuleCourse.module.scss'
import { useState } from 'react'

interface CardModuleCourseProps {
  lessons: string
  title: string
  list: {
    item: string
  }[]
}

export const CardModuleCourse = ({ lessons, title, list }:CardModuleCourseProps) => {


  return (
    <div className={styles.cardModuleCourse}>
      <div className={styles.wrapperHeader}>
        <h3 className={styles.headerModule}>{lessons}</h3>

        <h4 className={styles.subHeaderModule}>{title}</h4>
      </div>

      <div className={styles.wrapperInfo}>
        <div className={styles.titleInfo}>ТЕМЫ МОДУЛЯ</div>

        <ul className={styles.listLessons}>
          {
            list.map((item, i) => (
              <li className={styles.itemLessons} key={i}>{item.item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
