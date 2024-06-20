import styles from './LearningProfessions.module.scss'
import { Fragment } from 'react'
import Image from 'next/image'
import softFlower from '@/assets/image/soft-flower.png'
import { useAppSelector } from '@/state/hooks'
import classNames from 'classnames'

export const LearningProfessions = () => {
  const { courseData} = useAppSelector(state => state.courseReducer)

  return (
    <section className={'container'}>
      <h2 className={classNames('header', styles.header)}>
        ПОЧЕМУ СТОИТ ОСВАИВАТЬ ПРОФЕССИЮ
      </h2>

      <div className={styles.listLearningProfessions}>
        {
          courseData?.learningProfessions.map((item, index) => (
            <Fragment key={index}>
              {
                item.image ?
                  <div className={styles.cardLearningProfessionsImage}>
                    <Image src={item.image.url} fill alt={'image'} />
                  </div>
                  :
                  <div className={styles.cardLearningProfessions}>
                    <div className={index % 2 !== 0 ? styles.wrapperImageEven : styles.wrapperImageNotEven}>
                      <Image src={softFlower} fill alt={'img'} />
                    </div>

                    <h3 className={styles.title}>{item.header}</h3>

                    <p className={styles.description}>{item.description}</p>
                  </div>
              }
            </Fragment>
          ))
        }
      </div>
    </section>
  )
}
