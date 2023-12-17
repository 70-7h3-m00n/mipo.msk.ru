import styles from '@/styles/components/sections/new-course/TrainingProgram.module.sass'
import checkUrlIcon from '@/public/assets/imgs/new-course/check-fill.png'
import { ImgTemplate } from '@/components/imgs'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import IconPro from '@/components/icons/IconPro'
import { useState } from 'react'
import fetchCourse from '../../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const TrainingProgram = ({data}: Props) => {
  const training = data.trainingProgram.filter((item) => !item.pro)
  const proTraining = data.trainingProgram .filter((item) => item.pro)
  const [counter, setCounter] = useState(proTraining.length - 1 > 2 ? 2: proTraining.length)

  const getFullTraining = () => {
    setCounter(proTraining.length)
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

              <div className={styles.contentItem}>
                <div className={styles.wrapperImage}>
                  <ImgTemplate src={checkUrlIcon} alt={'amg'} layout={'fill'} />
                </div>

                <p className={styles.textHeader}>{data.businessCase} бизнес кейсов</p>
              </div>
            </div>
          </div>

          <div>
            <ul className={styles.list}>
              {
                training.map((card, i) => (
                  <li className={styles.item} key={i}>
                    <h3>{i + 1} {card.title}</h3>

                    <ul>
                      {
                        card.list.map((item, index) => (
                          <li key={index}>{item.item}</li>
                        ))
                      }
                    </ul>
                  </li>
                ))
              }
            </ul>

            <div className={styles.blockPro}>
              <IconPro />

              <ul>
                {
                  proTraining.slice(0, counter).map((card, i) => (
                    <li className={styles.item} key={i}>
                      <h3>{training.length + i + 1} {card.title}</h3>

                      <ol>
                        {
                          card.list?.map((item, index) => (
                            <li key={index}>{item.item}</li>
                          ))
                        }
                      </ol>
                    </li>
                  ))
                }
              </ul>
            </div>
            {
              data.trainingProgram.length > 7 ?
                <div className={styles.wrapperBtn}>
                  <BtnNewCourse onClick={getFullTraining} text={'Открыть полную программу'} />
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
