import React from 'react'
import styles from '@/styles/components/sections/new-course/HeroNewProgram.module.sass'
import Image from 'next/image'
import urlImage from '@/public/assets/imgs/sections/SectionHeroProgram/check-course.png'
import dataListTrainingInfo from '@/data/lists/listTrainengInfo'
import ImgTemplate from '../../imgs/ImgTemplate'
import classNames from 'classnames'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import fetchCourse from '../../../api/fetchCourse'
import routesBack from '@/config/routesBack'


interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const HeroNewProgram = ({data}:Props) => {
  const valid = data !== null

  const listTrainingInfo = valid? Object.keys(data.listTrainingInfo) : []

  const generalImageUrl = routesBack.newRoot + data?.imageCourse?.data[0]?.attributes?.url || ''

  return (
    <section className={styles.wrapperBlock}>
      <div className={'container'}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageCourse}>
            <div className={styles.discount}>-40%</div>

            <ImgTemplate src={generalImageUrl} priority alt={'imageCourse'} layout={'fill'} classNames={[styles.image]} />
          </div>
        </div>

        <p className={styles.category}>
          {valid && data.category}
        </p>

        <h1 className={styles.generalHeader}>{valid && data.nameCourse}</h1>

        <p className={classNames(styles.textGeneral, styles.subHeader)}>
          {valid && data.description}
        </p>

        <div className={styles.wrapperCard}>
          {valid && data.listHeader.map((item, i) => (
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
                  <Image priority src={dataListTrainingInfo[item]?.image} width={30} height={30} alt={'imageIcon'} />

                  <h3 className={styles.header}>{dataListTrainingInfo[item]?.title}</h3>

                  <p className={styles.text}>{data.listTrainingInfo[item]}</p>
                </div>
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroNewProgram
