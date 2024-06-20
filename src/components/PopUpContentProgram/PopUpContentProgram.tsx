import styles from './PopUpContentProgram.module.scss'
import ButtonLink from '../ButtonLink'
import Image from 'next/image'
import { useAppSelector } from '@/state/hooks'
import { useState } from 'react'
import Link from 'next/link'

interface PopUpContentProgram {
  isFaculty: string
}

const counterItem = 2

export const PopUpContentProgram = ({ isFaculty }: PopUpContentProgram) => {
  const { coursesData } = useAppSelector(state => state.coursesReducer)
  const { typeProgramData } = useAppSelector(state => state.typeProgramReducer)
  const { facultyData } = useAppSelector(state => state.facultyReducer)
  const [counter, setCounter] = useState(counterItem)

  const data = coursesData.filter((item, index) =>
    item.faculty.title === isFaculty && item.popularCourses
  )

  const toggle = () => {
    if (counterItem === counter) {
      setCounter(data.length)
    }else {
      setCounter(counterItem)
    }
  }

  const isPathCourse = (slug: string) => {
    const typeProgramSlug = Object.fromEntries(typeProgramData.map(item => [item.title, item.slug]))
    const facultySlug = Object.fromEntries(facultyData.map(item => [item.title, item.slug]))
    const course = coursesData.find(item => item.slug === slug)

    if (course === undefined) return '/'

    return `/catalog/${typeProgramSlug[course.typeProgram.title]}/${facultySlug[course.faculty.title]}/${course?.slug}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.wrapperProgram}>
          {
            data.slice(0, counter).map((item, index) => (
              <Link href={isPathCourse(item.slug)} key={index} passHref>
                <div className={styles.programItem}>
                  <Image className={styles.wrapperImage} width={290} height={210} src={item.image.url} alt={'image'} />

                  <div className={styles.wrapperContent}>
                    <h3 className={styles.header}>{item.title}</h3>

                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        {
          data.length > counterItem &&
          <ButtonLink text={counter === counterItem ? 'смотреть все' : 'скрыть'}
                      onClick={toggle}
                      active={true}
                      styleOption={'square'}
          />
        }
      </div>
    </div>
  )
}
