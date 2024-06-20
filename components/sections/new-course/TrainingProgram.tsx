import styles from '@/styles/components/sections/new-course/TrainingProgram.module.sass'
import checkUrlIcon from '@/public/assets/imgs/new-course/check-fill.png'
import { ImgTemplate } from '@/components/imgs'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import IconPro from '@/components/icons/IconPro'
import { useState } from 'react'
import fetchCourse from '../../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>> | any
}

const TrainingProgram = ({data}: Props) => {
  const training = data.trainingProgram.filter((item: any) => !item.pro)
  const proTraining = data.trainingProgram .filter((item: any) => item.pro)
  const [counterPro, setCounterPro] = useState(proTraining.length - 1 > 2 ? 2: proTraining.length)
  const [counter, setCounter] = useState(training.length - 1 > 2 ? 2: training.length)

  const getFullTrainingPro = () => {
    setCounterPro(proTraining.length)
  }

  const getFullTraining = () => {
    setCounter(training.length)
  }

  return (
    <section style={{ background: '#E8EBF2' }}>
      <div className={'container'}>
        <div className={styles.card}>
          <div className={styles.blockHeader}>
            <h2 className={styles.header}>Программа обучения</h2>

            <div className={styles.wrapperContentHeader}>
              <div className={styles.contentItem}>
                <div className={styles.wrapperImage}>
                  <ImgTemplate src={checkUrlIcon} alt={'amg'} layout={'fill'} />
                </div>

                <p className={styles.textHeader}>{data.watchProgram} часа</p>
              </div>
            </div>
          </div>

          <div>
            <ul className={styles.list}>
              {
                training.slice(0, counter).map((card: any, i: number) => (
                  <li className={styles.item} key={i}>
                    <h3>{i + 1}. {card.title}</h3>

                    <ul>
                      {
                        card.list.map((item: any, index: number) => (
                          <li key={index}>{item.item}</li>
                        ))
                      }
                    </ul>
                  </li>
                ))
              }
            </ul>

            {
              Boolean(training.length) && training.length > 7 && (counter !== training.length) ?
                <div className={styles.wrapperBtn}>
                  <BtnNewCourse onClick={getFullTraining} text={'Открыть полную программу'} />
                </div>
                :
                <></>
            }

            {
              Boolean(proTraining.length) &&
              <div className={styles.blockPro}>
                <IconPro />

                <ul>
                  {
                    proTraining.slice(0, counterPro).map((card: any, i: number) => (
                      <li className={styles.item} key={i}>
                        <h3>{training.length + i + 1} {card.title}</h3>

                        <ol>
                          {
                            card.list?.map((item: any, index: number) => (
                              <li key={index}>{item.item}</li>
                            ))
                          }
                        </ol>
                      </li>
                    ))
                  }
                </ul>
              </div>
            }

            {
              Boolean(proTraining.length) && data.trainingProgram.length > 7 ?
                <div className={styles.wrapperBtn}>
                  <BtnNewCourse onClick={getFullTrainingPro} text={'Открыть полную программу'} />
                </div>
                :
                <></>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrainingProgram
