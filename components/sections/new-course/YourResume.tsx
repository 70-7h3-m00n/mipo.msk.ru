import data from '@/data/mock/new-course/data.json'
import styles from '@/styles/components/sections/new-course/YourResume.module.sass'
import urlChecked from '@/public/assets/imgs/new-course/checked-summary.png'
import urlIllustration from '@/public/assets/imgs/new-course/Illustration.png'
import { ImgTemplate } from '@/components/imgs'
const YourResume = () => {
  return (
    <section className={'container'}>
      <div className={styles.blockHeader}>
        <h2>Твое резюме</h2>
      </div>

      <div className={styles.blockContent}>
        <div className={styles.profession}>
          <div>
            <h2>Профессия</h2>

            <h3>{data.profession}</h3>
          </div>

          <div>
            <h2>Зарплата</h2>

            <h3>{data.salary}</h3>
          </div>
        </div>

        <div className={styles.skills}>
          <div className={styles.contentList}>
            <h2>Профессиональные навыки:</h2>

            <ul>
              {
                data.listProfessionalSkills.map((item, i) => (
                  <li key={i}>
                    <ImgTemplate width={23} height={19} src={urlChecked} alt={'img'} />

                    <p>{item.title}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className={styles.contentDiploma}>
            <h2>Диплом:</h2>

            <p>Название диплома, специальности и учреждения</p>
          </div>
        </div>

        <div className={styles.wrapperImage}>
          <ImgTemplate src={urlIllustration} alt={'img'} layout={'fill'} />
        </div>
      </div>
    </section>
  )
}

export default YourResume
