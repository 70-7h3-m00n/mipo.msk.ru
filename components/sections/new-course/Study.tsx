import data from '@/data/mock/new-course/data.json'
import styles from '@/styles/components/sections/new-course/Study.module.sass'
import image2 from '@/public/assets/imgs/new-course/check-one.png'
import { ImgTemplate } from '@/components/imgs'
import CardMotion from '@/components/cards/CardMotion'
import IconPro from '@/components/icons/IconPro'

const Study = () => {
  return (
    <section className={'container'}
             style={{
               overflow: 'initial'
             }}
    >
      <h2 className={styles.header}>Чему вы научитесь</h2>

      <div className={styles.listStudy}>
        {
          data.listStudy.map((item, i) => (
            <CardMotion title={item.title}
                        description={item.description}
                        key={i}
            />
          ))
        }
      </div>

      <div className={styles.listStudyPro}>
        <IconPro />

        {
          data.listStudyPro.map((item, i) => (
            <div className={styles.card} key={i}>
              <ImgTemplate src={image2} alt={'image'} width={35} height={35} />

              <p className={styles.text}>{item.title}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Study
