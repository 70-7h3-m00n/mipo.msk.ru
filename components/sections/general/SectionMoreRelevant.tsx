import stls from '@/styles/components/sections/general/SectionMoreRelevant.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgMoreRelevantPeopleStudying } from '@/components/imgs'

type TSectionMoreRelevant = TPropClassNames

const SectionMoreRelevant = ({ classNames }: TSectionMoreRelevant) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <h2 className={stls.title}>
            В период изменений обучение становится еще актуальней
          </h2>
          <p className={stls.p}>
            Мы проводим постоянные исследования ситуации на рынке и
            актуализируем наши программы. После обучения вы будете готовы к
            новым профессиональным вызовам
          </p>
        </div>
        <div className={stls.right}>
          <ImgMoreRelevantPeopleStudying classNames={[stls.img]} />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionMoreRelevant
