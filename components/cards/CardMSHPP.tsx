import React from 'react'
import styles from '@/styles/components/cards/CardMshpp.module.sass'
import MshppSvg from '@/components/svg/MshppSvg'

const CardMshpp = () => {
  return (
    <section className={styles.mshppWrapper}>
      <div className={'container'}>
        <div className={styles.mshppCard}>
          <div className={styles.contentText}>
            <div className={styles.header}>Программа от партнера «МШПП»</div>
            <div className={styles.subHeader}>– Московской школы практической психологии</div>
          </div>

          <MshppSvg />
        </div>
      </div>
    </section>
  )
}

export default CardMshpp