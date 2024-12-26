import styles from '@/styles/components/sections/new-course/TrainingWorks.module.sass'
import { useEffect, useState } from 'react'
import IconTime from '@/components/cards/IconTime'
import { ListTrainingWorks, TrainingWorks } from '@/data/lists/ListTrainingWorks'
import { ImgTemplate } from '@/components/imgs'
import image from '@/public/assets/imgs/new-course/training-works.png'
import classNames from 'classnames'

const TrainingWorks = () => {
  const  [dataTrainingWorks, setTrainingWorks] = useState<Array<TrainingWorks>>(ListTrainingWorks)
  const timer = 30
  const interval = timer * 1000
  const content = dataTrainingWorks.filter((item) => item.important)[0]

  const isImportant = (counter: number, data: Array<TrainingWorks>): Array<TrainingWorks> => {
    return data.map((item, index) => {
      if (index !== counter)  {
        item.important = false
      }
      if (index === counter) {
        item.important = true;
      }
      return item
    })
  }

  const isCounter = (data: Array<TrainingWorks>) => {
    let findCounter = data.findIndex((item => item.important)) + 1
    return  findCounter > data.length - 1 ? 0 : findCounter
  }

  const onImportant = (index: number, data: Array<TrainingWorks>) => {
    const currentIndex = data.findIndex((item => item.important))

    if (index !== currentIndex) {
      setTrainingWorks((data) => [...isImportant(index, data)])
    }
  }

  useEffect(() => {
    let counter = isCounter(dataTrainingWorks)

    const time = window.setInterval(() => {
      setTrainingWorks((data) => [...isImportant(counter, data)])
    }, interval)

    return () => window.clearInterval(time)
  },[dataTrainingWorks])

  return (
    <section className={styles.trainingWorks}>
      <div className={'container'}>
          <div className={styles.wrapperHeader}>
            <h2 className={styles.header}>Как проходит обучение</h2>

            <p className={classNames(styles.text, styles.description)}>
              Обучение осуществляется по заочной форме с применением дистанционных*
              технологий. Лекции, общение, тестирование проходят в онлайн-формате
              через образовательную платформу
            </p>
          </div>

          <div className={styles.wrapperContent}>
            <div className={styles.wrapperItems}>
              {
                dataTrainingWorks.map((item, index) => (
                  <div onClick={() => onImportant(index, dataTrainingWorks)}
                       className={styles.item}
                       key={index}
                       style={{
                         cursor: item.important ? 'auto' : 'pointer'
                       }}
                  >
                    <IconTime timer={timer} urlIcon={item.image} isTime={item.important} />

                    <p className={classNames(styles.text, styles.itemText)}>{item.title}</p>
                  </div>
                ))
              }
            </div>

            <div className={styles.wrapperDescr}>
              <div className={styles.wrapperImage}>
                <ImgTemplate src={content.description.image} alt={'image'} layout={'fill'} />
              </div>

              <p className={styles.text}>{content.description.title}</p>
            </div>
          </div>
      </div>

      <div className={classNames('container', styles.footer)}>
        <div className={styles.wrapperImageFooter}>
          <ImgTemplate src={image} alt='img' layout='fill' />
        </div>

        <p className={styles.textFooter}>
          Дистанционное образование — это обучение в комфортном темпе из
          любой точки мира и возможность совмещать с работой.
        </p>
      </div>
    </section>
  )
}

export default TrainingWorks
