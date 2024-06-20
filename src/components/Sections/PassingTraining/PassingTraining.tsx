import styles from './PassingTraining.module.scss'
import classNames from 'classnames'
import passingTraining from '../../../data/passingTraining'
import { useState } from 'react'
import Image from 'next/image'

export const PassingTraining = () => {
  const [active, setActive] = useState(0)

  return (
    <section className={'container'}>
      <h2 className={'header'}>КАК ПРОХОДИТ ОБУЧЕНИЕ?</h2>

      <div className={styles.wrapperContent}>
        <div className={styles.wrapperImage}>
          <Image className={styles.image}
                 src={passingTraining[active].image}
                 alt={'image'}
                 sizes={''}
          />
        </div>

        <div className={styles.wrapperTab}>
          {
            passingTraining.map((item, index) => (
              <div className={classNames(
                styles.itemTab,
                active !== index || styles.activeItem
              )}
                   key={index}
                   onClick={() => setActive(index)}
              >
                <div className={styles.headerItem}>{item.title}</div>
                <div className={classNames(
                  styles.descriptionItem,
                  active === index || 'hidden'
                )}>
                  {item.description}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
