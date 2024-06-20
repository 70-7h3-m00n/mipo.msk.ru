import styles from './Directions.module.scss'
import ButtonLink from '../../ButtonLink'
import LinkProfession from '../../LinkProfession'
import { useCallback, useState } from 'react'
import { useAppSelector } from '@/state/hooks'
import { IProgramCourses } from '@/api/fetchProgramCourses/types'

type DataPath = {
  faculty: {
    slug: string | null
    title: string
  },
  typeProgram: {
    slug: string | null
    title: string
  },
}

export const Directions = () => {
  const { facultyData } = useAppSelector(state => state.facultyReducer)
  const { typeProgramData } = useAppSelector(state => state.typeProgramReducer)
  const { coursesData }  = useAppSelector(state => state.coursesReducer)

  const [activeProgram, setActiveProgram] = useState(0)

  const onDataPath = useCallback(() => {
    const facultyMap = Object.fromEntries(facultyData?.map(f => [f.title, f.slug]))
    const typeProgramMap = Object.fromEntries(typeProgramData?.map(tp => [tp.title, tp.slug]))

    return (coursesData as  IProgramCourses[]).reduce((acc: DataPath[], item) => {
      if (!acc.some(entry => entry.faculty.title === item.faculty.title && entry.typeProgram.title === item.typeProgram.title)) {
        acc.push({
          faculty: {
            slug: facultyMap[item.faculty.title] || null,
            title: item.faculty.title,
          },
          typeProgram: {
            slug: typeProgramMap[item.typeProgram.title] || null,
            title: item.typeProgram.title,
          },
        })
      }
      return acc
    }, [])
  }, [coursesData, facultyData, typeProgramData])

  const filterTypeProgram = () => typeProgramData?.filter(item => onDataPath()?.some(elem => item.title === elem.typeProgram.title))

  const [filterProgram, setFilterProgram] = useState(filterTypeProgram()[activeProgram]?.title)

  const filterFaculty = () => onDataPath().filter(item => item.typeProgram.title === filterProgram)

  const toggleTypeProgram = (index: number, title: string) => {
    setActiveProgram(index)
    setFilterProgram(title)
  }

  if (!filterTypeProgram().length && !filterFaculty().length) return <></>

  return (
    <section className={'container'}>
      <h2 className={'header'}>Направления ОБУЧЕНИЯ</h2>

      <div className={styles.content}>
        <div className={styles.category}>
          {
            filterTypeProgram()?.map((item, index) => (
              <ButtonLink text={item.title}
                          styleOption={'round'}
                          active={activeProgram === index}
                          onClick={() => toggleTypeProgram(index, item.title)}
                          key={index}
              />
            ))
          }
        </div>

        <div className={styles.profession}>
          {
            filterFaculty()?.map((item, i) => (
              <LinkProfession href={`/catalog/${item!.typeProgram.slug}/${item!.faculty.slug}`}
                              text={item!.faculty.title}
                              key={i}
              />
              ))
          }
          <div className={styles.wrapperBtnItem}>
            <ButtonLink text={'ВСЕ Направления'}
                        active={true}
                        styleOption={'square'}
                        hrefLink={'/catalog'}
            />
          </div>
        </div>
      </div>

      <div className={styles.wrapperBtn}>
        <ButtonLink text={'ВСЕ Направления'}
                    className={styles.btn}
                    active={true}
                    styleOption={'square'}
                    hrefLink={'/catalog'}
        />
      </div>
    </section>
  )
}
