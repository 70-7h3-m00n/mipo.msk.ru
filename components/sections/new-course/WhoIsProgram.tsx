import styles from '@/styles/components/sections/new-course/WhoIsProgram.module.sass'
import { ImgTemplate } from '@/components/imgs'
import classNames from 'classnames'
import fetchCourse from '../../../api/fetchCourse'
import routesBack from '@/config/routesBack'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const WhoIsProgram = ({ data }: Props) => {
  return (
    <section className={'container'}>
      <div className={styles.blockHeader}>
        <h2 className={styles.header}>Для кого программа</h2>

        <p className={classNames(styles.text, styles.description)}>
          Все программы обучения института МИПО подготовлены практикующими
          экспертами и сертифицированы, а выданные документы вносятся в
          Федеральный реестр ФИС-ФРДО и котируются по всему миру!
        </p>
      </div>

      <div className={styles.blockList}>
        {data.whoIsProgram.map((item, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.wrapperImage}>
              <ImgTemplate
                src={routesBack.newRoot + item.icon.data.attributes.url || ''}
                alt='img'
                layout='fill'
              />
            </div>

            <h3 className={styles.headerCard}>{item.title}</h3>

            <p className={styles.text}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhoIsProgram
