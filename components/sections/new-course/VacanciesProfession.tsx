import styles from '@/styles/components/sections/new-course/VacanciesProfession.module.sass'
import img from '@/public/assets/imgs/new-course/vacancies.png'
import { ImgTemplate } from '@/components/imgs'
import classNames from 'classnames'
import data from '@/data/mock/new-course/data.json'

const VacanciesProfession = () => {
  return (
    <section className={styles.vacanciesProfession}>
      <div className={classNames('container', styles.contentBlock)}>
        <div>
          <div className={styles.wrapperCardVacancies}>
            {
              data.vacanciesProfession.listVacancies.map((item, i) => (
                <div className={styles.cardVacancies} key={i}>
                  <h3>{item.header}</h3>

                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>

          <div className={styles.infoBlock}>
            <h2 className={styles.header}>{data.vacanciesProfession.header}</h2>

            <p className={styles.text}>{data.vacanciesProfession.description}</p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <ImgTemplate src={img} alt={'img'} layout={'fill'} />
        </div>

        <div className={styles.wrapperCardSalary}>
          {
            data.vacanciesProfession.listSalary.map((item, i) => (
              <div className={styles.cardSalary} key={i}>
                <h3>{item.header}</h3>

                <p className={styles.text}>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default VacanciesProfession
