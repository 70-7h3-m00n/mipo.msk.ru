import styles from '@/styles/components/sections/new-course/Study.module.sass'
import image2 from '@/public/assets/imgs/new-course/check-one.png'
import { ImgTemplate } from '@/components/imgs'
import CardMotion from '@/components/cards/CardMotion'
import IconPro from '@/components/icons/IconPro'
import fetchCourse from '../../../api/fetchCourse'
import classnames from 'classnames'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>> | any
}

const Study = ({data}: Props) => {
  const isPro = Boolean(data.listStudyPro.length)

  return (
    <section className={classnames(['container', styles.block])}
             style={{
               overflow: 'initial'
             }}
    >
      <h2 className={styles.header}>Чему вы научитесь</h2>

      <div className={styles.listStudy}>
        {
          data.listStudy.map((item: any, i: number) => (
            <CardMotion title={item.title}
                        description={item.description}
                        key={i}
            />
          ))
        }
      </div>

      {
        isPro &&
        <div className={styles.listStudyPro}>
          <IconPro />

          {
            data.listStudyPro.map((item: any, i: number) => (
              <div className={styles.card} key={i}>
                <ImgTemplate src={image2} alt={'image'} width={35} height={35} />

                <p className={styles.text}>{item.title}</p>
              </div>
            ))
          }
        </div>
      }
    </section>
  )
}

export default Study
