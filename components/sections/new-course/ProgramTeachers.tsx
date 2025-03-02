import styles from '@/styles/components/sections/new-course/ProgramTeachers.module.sass'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import classNames from 'classnames'
import footerImage from '@/public/assets/imgs/new-course/discount-new-course.png'
import footerDecorator from '@/public/assets/imgs/new-course/footer-decorator.png'
import { ImgTemplate } from '@/components/imgs'
import CardNewTeacher from '@/components/cards/CardNewTeacher'
import leftUrl from '@/public/assets/imgs/new-course/left.png'
import rightUrl from '@/public/assets/imgs/new-course/right.png'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import fetchCourse from '../../../api/fetchCourse'
import routesBack from '@/config/routesBack'

type ScrollPosition = 'left' | 'right'

const widthItem = 400

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const ProgramTeachers = ({data}: Props) => {
  const elemList = useRef<HTMLUListElement | null>(null)
  const [scroll, setScroll] = useState(0)
  const [widthList, setWidthList] = useState(0)
  const counterItem = data.listTeachers.length

  const showArrow = widthList >= widthItem * counterItem

  const onScroll = (scrollPosition: ScrollPosition): void => {
    if (widthList >= widthItem * counterItem) {
      return
    }

    if (scrollPosition === 'left') {
      setScroll((scroll) => {
        if (scroll - widthItem < -((widthItem * counterItem) - widthList)) {
          return -((widthItem * counterItem) - widthList)
        } else {
          return scroll - widthItem
        }
      })
    }

    if (scrollPosition === 'right') {
      setScroll((scroll) => {
        if (scroll + widthItem > 0 ) {
          return 0
        } else {
          return scroll + widthItem
        }
      })
    }
  }

  useEffect(() => {
    const resize = () => {
      setWidthList(elemList.current.offsetWidth)
    }

    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    setWidthList(elemList.current.offsetWidth)
  }, [])

  return (
    <section style={{position: 'relative'}}>
      <header className={classNames('container', styles.headerBlock)}>
        <div className={styles.wrapperContent}>
          <h2 className={styles.header}>Преподаватели программы</h2>

          <h3 className={styles.subHeader}>
            Преподают ведущие российские и зарубежные эксперты с опытом от 7 до 25 лет
          </h3>
        </div>

        <div className={styles.btns}>
          {
            !showArrow &&
            <>
              <button onClick={() => onScroll('left')}>
                <ImgTemplate src={leftUrl} alt={'img'} layout={'fill'} />
              </button>

              <button onClick={() => onScroll('right')}>
                <ImgTemplate src={rightUrl} alt={'img'} layout={'fill'} />
              </button>
            </>
          }
        </div>

      </header>

      <div className={classNames('container', styles.sliderWrapper)}>
        <motion.ul className={styles.listSlider}
                   ref={elemList}
                   initial={{
                     translateX: 0
                   }}
                   animate={{
                     translateX: scroll,
                     transition: {
                       duration: 0.6,
                       type: "spring",
                       damping: 10,
                       stiffness: 100,
                     }
                   }}
        >
          {
            data.listTeachers.map((item, index) => (
              <CardNewTeacher key={index}
                              url={routesBack.newRoot + item.image?.data?.attributes?.url || ''}
                              title={item.title}
                              subTitle={item.subTitle}
                              description={item.description}
              />
            ))
          }
        </motion.ul>
      </div>

      <footer  className={classNames('container', styles.footer)} >
        <div className={styles.footerImage}>
          <ImgTemplate src={footerImage} alt={'image'} layout={'fill'} />
        </div>

        <div className={styles.footerInfo}>
          <h2 className={styles.header}>Начните обучаться со скидкой</h2>

          <h3 className={styles.subHeader}>
            Забронируйте программу по спеццене — со скидкой 40%
          </h3>

          <BtnNewCourse text={'Получить скидку'} className={styles.btn} />
        </div>

        <div className={styles.imageDecorator}>
          <ImgTemplate src={footerDecorator} alt={'image'} layout='fill'/>
        </div>
      </footer>
    </section>
  )
}

export default ProgramTeachers
