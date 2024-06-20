import styles from './styles.module.scss'
import Slider from '../../Slider'
import CardTeacher from '../../Items/CardTeacher'
import urlStudent1 from '../../../assets/image/student.png'
import urlStudent2 from '../../../assets/image/student-2.png'
import urlDiploma from '@/assets/image/diploma.png'
import urlDirectory from '../../../assets/image/directory.png'
import Image from 'next/image'
import classNames from 'classnames'

const TeachersMentors = () => {
  return (
    <section className={'container'}>
      <h2 className={classNames('header', styles.header)}>преподаватели-наставники</h2>

      <div className={styles.wrapperSlider}>
        <Slider stylesBtn={styles.sliderBtn}>
          <>
            <CardTeacher />
            <CardTeacher />
            <CardTeacher />
            <CardTeacher />
            <CardTeacher />
            <CardTeacher />
          </>
        </Slider>
      </div>

      <div className={styles.listItem}>
        <div className={styles.itemText}>
          <h3 className={styles.header}>Официальное образование</h3>

          <p className={styles.description}>
            Все наши программы лицензированы, а дипломы имеют международные
            приложения, поэтому они ценятся клиентами и профессиональным
            психологическим сообществом как в России, так и за рубежом!
            По окончании программ профессиональной переподготовки и курсов
            повышения квалификации выпускники института получают официальный
            документ установленного образца, который вносится в реестр ФРДО,
            а в дополнение — сертификат Московского Института
          </p>
        </div>

        <div className={styles.itemImage}>
          <Image className={styles.image} src={urlDiploma} alt={'image'} />
        </div>

        <div className={styles.itemImage}>
          <Image className={styles.image} src={urlDirectory} alt={'image'} />
        </div>

        <div className={styles.itemImages}>
          <Image className={styles.image} src={urlStudent1} alt={'image'} />

          <Image className={styles.image} src={urlStudent2} alt={'image'} />
        </div>
      </div>
    </section>
  )
}

export default TeachersMentors
