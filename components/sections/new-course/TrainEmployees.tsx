import styles from '@/styles/components/sections/new-course/TrainEmployees.module.sass'
import classNames from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import urlImg from "@/public/assets/imgs/new-course/group-img.png"
import urlImgMobile from "@/public/assets/imgs/new-course/mobileImage.png"
import fetchCourse from '../../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const TrainEmployees = ({data}:Props) => {
  return (
    <section className={styles.trainEmployees}>
      <h2 className={classNames('container', styles.header)}>Обучают своих сотрудников у нас</h2>

      <ul className={classNames('container', styles.listCompany)}>
        {
          data.listCompany.map((item, i) => (
            <li className={styles.item} key={i}>
              <div>
                <ImgTemplate src={item.image.url} alt={'img'} layout={'fill'} />
              </div>
            </li>
          ))
        }
      </ul>

      <div className={styles.graduates}>
        <div className={classNames('container', styles.wrapperGraduates)}>
          <div>
            <h2>Наши выпускники</h2>

            <h3>По опросам наших студентов в 2021 году:</h3>

            <ul className={styles.listSurvey}>
              <li>
                <h2>72%</h2>
                <p>перешли в более престижную компанию</p>
              </li>

              <li>
                <h2>94%</h2>
                <p>увеличили свои финансовые показатели в бизнесе</p>
              </li>

              <li>
                <h2>96%</h2>
                <p>остались довольны обучением</p>
              </li>
            </ul>

            <BtnNewCourse className={styles.btn} text={'Записаться на курс'} />
          </div>
        </div>

        <div className={styles.imgWrapper}>
          <ImgTemplate classNames={[styles.desctop]} src={urlImg} alt={'img'} layout={'fill'} />
          <ImgTemplate classNames={[styles.mobile]} src={urlImgMobile} alt={'img'} layout={'fill'} />
        </div>
      </div>
    </section>
  )
}

export default TrainEmployees
