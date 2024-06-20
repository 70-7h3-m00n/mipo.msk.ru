import styles from './BannerQuestionProgram.module.scss'
import ButtonLink from '@/new-components/ButtonLink'
import Image from 'next/image'
import url1 from '@/assets/image/t.png'
import url2 from '@/assets/image/dumbbellsFull.png'
import url3 from '@/assets/image/mouthpiece.png'
import React from 'react'

interface BannerQuestionProgramProps {
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

export const BannerQuestionProgram = ({ setOpenPopUp } : BannerQuestionProgramProps) => {
  return (
    <div className={styles.bannerQuestionProgram}>
      <div className={styles.grid}>
        <div className={styles.wrapperHeader}>
          <h3 className={styles.header}>ВОПРОС ПО ПРОГРАММЕ</h3>

          <h4 className={styles.subHeader}>
            Остались вопросы по программе или конкретному модулю?
            Напишите нам в форме обратной связи.
          </h4>
        </div>

        <div className={styles.wrapperBtn}>
          <ButtonLink className={styles.btn}
                      text={'вопрос по программе'}
                      onClick={() => setOpenPopUp(true)}
                      styleOption={'square'}
          />
        </div>
      </div>

      <div className={styles.wrapperImage}>
        <Image className={styles.image1} src={url1} alt={'image'} />

        <Image className={styles.image2} src={url2} alt={'image'} />

        <Image className={styles.image3} src={url3} alt={'image'} />
      </div>
    </div>
  )
}
