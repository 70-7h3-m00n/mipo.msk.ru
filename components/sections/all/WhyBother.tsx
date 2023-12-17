import stls from '@/styles/components/sections/all/WhyBother.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import {
  IconRemoteWork,
  IconCompassion,
  IconDemand,
  IconHighIncome
} from '@/components/icons'

const WhyBother = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Почему стоит осваивать профессию психолога?
        </h2>
        <TwoColumns>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconRemoteWork />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Работайте удаленно</h3>
              <p className={stls.p}>
                Психологом можно работать из любой точки мира удаленно
              </p>
            </div>
          </div>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconCompassion />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Экологичная профессия</h3>
              <p className={stls.p}>
                Психолог - тот человек, который несет пользу окружающим
              </p>
            </div>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconDemand />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Востребованность</h3>
              <p className={stls.p}>
                8989 в Росии людей ежедневно нуждаются в психологической помощи
              </p>
            </div>
          </div>
          <div className={stls.reason}>
            <div className={stls.icon}>
              <IconHighIncome />
            </div>
            <div className={stls.text}>
              <h3 className={stls.subTitle}>Высокий доход</h3>
              <p className={stls.p}>
                Средняя зарплата наших выпускников 90000 т.р.
              </p>
            </div>
          </div>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default WhyBother
