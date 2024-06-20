import styles from './PopularCourses.module.scss'
import Slider from '../../Slider'
import PopularCourse from '../../Items/PopularCourse'
import { IAboutInstitute } from '../../../data/aboutInstitute'
import Modal from '../../Modal'
import { useEffect, useState } from 'react'
import PopUpContentProgram from '../../PopUpContentProgram'
import { useAppSelector } from '@/state/hooks'
import { IFaculty } from '@/api/fetchFaculty/type'

export const PopularCourses = () => {
  const { facultyData } = useAppSelector(state => state.facultyReducer)
  const { coursesData } = useAppSelector(state => state.coursesReducer)
  const [openPopUp, setOpenPopUp] = useState(false)
  const [isFaculty, setIsFaculty] = useState('')

  const valid = IAboutInstitute.length

  const isData = (): IFaculty[] | [] => {
    const ivValidTitle = [...new Set(
      coursesData.filter(item => item.popularCourses)
    )].map((item) => item.faculty.title)

    return facultyData.filter(item => ivValidTitle.includes(item.title))
  }

  useEffect(() => {
    if (!openPopUp) {
      setIsFaculty('')
    }
  }, [openPopUp])

  if (!isData().length) return <></>

  return (
    <section>
      <div className={'container'}>
        <h2 className={'header'}>ПОПУЛЯРНЫЕ КУРСЫ</h2>

        <div className={styles.wrapperSlider}>
          <Slider stylesBtn={styles.btnSlider}>
            <>
              {
                isData().map((item, index) => (
                  <PopularCourse key={ index }
                                 title={ item.title }
                                 image={ item.image[0].url }
                                 setOpenPopUp={ setOpenPopUp }
                                 setIsFaculty={ setIsFaculty }
                                 isFaculty={ isFaculty }
                  />
                ))
              }
            </>
          </Slider>
        </div>
      </div>

      <div className={styles.bg}>
        <div className={'container'}>
          <div className={styles.wrapperAboutInstitute}>
            <h2 className={styles.headerIAboutInstitute}>об институте <br /> мипо</h2>

            <p className={styles.titleIAboutInstitute}>
              Наш институт нацелен на предоставление самых актуальных знаний,
              которые будут полезны как практикующим специалистам, так и тем,
              кто делает первые шаги в профессии. Для этого мы приглашаем
              преподавателей-практиков, которые являются настоящими экспертами
              в своей области. Получите практические навыки для продвижения в
              карьере или освоения новой профессии.
            </p>

            <div className={styles.wrapperIAboutInstitute}>
              {
                IAboutInstitute.map((item, index) => (
                  <div className={styles.cardIAboutInstitute}
                       key={index}
                       style={{
                         backgroundColor: `rgba(255,255,255, ${
                           valid === index + 1?
                             1
                             :
                             0.2 * (index + 1)
                         })`,
                         color: valid === index + 1 ? '#3F3BFF' : '#FFF'
                       }}
                  >
                    <h3 className={styles.headerCard}>{item.title}</h3>
                    <p className={styles.descriptionCard}>{item.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <Modal open={openPopUp} setHidden={setOpenPopUp}>
        <PopUpContentProgram isFaculty={isFaculty} />
      </Modal>
    </section>
  )
}
