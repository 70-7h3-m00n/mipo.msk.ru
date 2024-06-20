import styles from './styles.module.scss'
import Slider from '../../Slider'
import PopularCourse from '../../Items/PopularCourse'
import { popularCourse } from '../../../data/Mock/test'
import { IAboutInstitute } from '../../../data/aboutInstitute'
import Modal from '../../Modal'
import { useState } from 'react'
import PopUpContentProgram from '../../PopUpContentProgram'

const PopularCourses = () => {
  const [openPopUp, setOpenPopUp] = useState(false)

  const valid = IAboutInstitute.length

  return (
    <section>
      <div className={'container'}>
        <h2 className={'header'}>ПОПУЛЯРНЫЕ КУРСЫ</h2>

        <div className={styles.wrapperSlider}>
          <Slider stylesBtn={styles.btnSlider}>
            <>
              {
                popularCourse.map((item, index) => (
                  <PopularCourse key={index}
                                 href={item.href}
                                 title={item.title}
                                 image={item.icon}
                                 setOpenPopUp={setOpenPopUp}
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
        <PopUpContentProgram />
      </Modal>
    </section>
  )
}

export default PopularCourses
