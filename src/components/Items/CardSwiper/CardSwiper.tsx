import React, { useEffect, useState } from 'react'
import styles from './CardSwiper.module.scss'
import { evaluationCompanyData } from '../../../data/evaluationСompany'
import Link from 'next/link'
import ButtonLink from '../../ButtonLink'

export const CardSwiper = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const lengthEvaluation = evaluationCompanyData.length - 1

    const counterInterval = setInterval(() => {
      const result = counter + 1

      if (result > lengthEvaluation) {
        setCounter(0)
      }else {
        setCounter(result)
      }
    }, 3000)

    return () => clearInterval(counterInterval)
  }, [counter])

  return (
    <div className={styles.itemEvaluation}>
      <div className={styles.wrapperTop}>
        <div className={styles.counter}>
          {evaluationCompanyData[counter].ratingCounter}+
        </div>

        <div className={styles.description}>
          оценок на разных независимых площадках
        </div>
      </div>

      <div className={styles.wrapperBottom}>
        <div className={styles.wrapperCounter}>
          <div className={styles.estimation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
              <path
                d="M19 0.5L24.4723 11.9681L37.0701 13.6287L27.8543 22.3769L30.1679 34.8713L19 28.81L7.83208 34.8713L10.1457 22.3769L0.929926 13.6287L13.5277 11.9681L19 0.5Z"
                fill="white" />
            </svg>

            <div className={styles.text}>{evaluationCompanyData[counter].estimation}</div>
          </div>

          <div className={styles.reviewsCounter}>
            {evaluationCompanyData[counter].reviewsCounter} отзывов
          </div>
        </div>

        <Link href={evaluationCompanyData[counter].href} target={'_blank'}>
          <ButtonLink text={evaluationCompanyData[counter].platform}
                      styleOption={'square'}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white'
                      }}
          />
        </Link>
      </div>
    </div>
  )
}
