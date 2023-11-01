import React from 'react'
import styles from '@/styles/components/sections/new-course/HeroNewProgram.module.sass'
import data from '@/data/mock/new-course/data.json'
import Image from 'next/image'
import urlImage from '@/public/assets/imgs/sections/SectionHeroProgram/check-course.png'
import dataListTrainingInfo from '@/data/lists/listTrainengInfo'
import ImgTemplate from '../../imgs/ImgTemplate'
import classNames from 'classnames'
import BtnNewCourse from '@/components/btns/BtnNewCourse'


const HeroNewProgram = () => {
  const listTrainingInfo = Object.keys(data.listTrainingInfo)

  return (
    <section className={styles.wrapperBlock}>
      <div className={'container'}>
        <div className={styles.category}>
          {data.category}
        </div>

        <h1 className={styles.generalHeader}>{data.nameCourse}</h1>

        <p className={classNames(styles.textGeneral, styles.subHeader)}>
          {data.description}
        </p>

        <div className={styles.wrapperCard}>
          {data.listHeader.map((item, i) => (
            <div className={styles.cardInfoCourse} key={i}>
              <p>
                {item.item}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.wrapperBtn}>
          <BtnNewCourse text={'Записаться на курс'} />

          <div className={styles.wrapperBtn_blockInfo}>
            <Image src={urlImage} alt={'check-course'} width={59} height={58} />

            <p>Курс обновлен весной 2023</p>
          </div>
        </div>

        <div className={styles.blockTrainingInfo}>
          {listTrainingInfo.map((item, i) => {
            if (item in dataListTrainingInfo) {
              return <div key={i}>
                  <Image src={dataListTrainingInfo[item]?.image} width={30} height={30} alt={'imageIcon'} />

                  <h3 className={styles.header}>{dataListTrainingInfo[item]?.title}</h3>

                  <p className={styles.text}>{data.listTrainingInfo[item]}</p>
                </div>
            }
          })}
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageCourse}>
            <div className={styles.discount}>-40%</div>

            <ImgTemplate src={data.imageCourse} alt={'imageCourse'} layout={'fill'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroNewProgram
