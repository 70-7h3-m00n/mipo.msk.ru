import stls from '@/styles/components/general/ProsCircle.module.sass'
import { colors } from '@/config/index'
import { IconGeneralLogoSquare, IconBgCircle } from '@/components/icons'

const ProsCircle = () => {
  return (
    <div className={stls.container}>
      <IconBgCircle />
      <div className={stls.center}>
        <IconGeneralLogoSquare color={colors.beta} />
      </div>
      <div className={stls.top}>
        <h3 className={stls.subTitle}>12 лет</h3>
        <p className={stls.p}>Занимаемся образованием</p>
      </div>
      <div className={stls.right}>
        <h3 className={stls.subTitle}>2500+</h3>
        <p className={stls.p}>
          Учаться
          <br /> прямо сейчас
        </p>
      </div>
      <div className={stls.bottom}>
        <h3 className={stls.subTitle}>8 лет</h3>
        <p className={stls.p}>
          специализируемся <br />
          на дистанционном обучении
        </p>
      </div>
      <div className={stls.left}>
        <h3 className={stls.subTitle}>{'>'}17000</h3>
        <p className={stls.p}>
          Студентов <br />
          уже обучили
        </p>
      </div>
    </div>
  )
}

export default ProsCircle
