import stls from '@/styles/components/sections/general/SectionCorporateCourse.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgCorporateCourseStudentsStudying } from '@/components/imgs'
import {
  IconGeneral3dSpiral,
  IconGeneralLiniarSpiral,
  IconGeneralSquare
} from '@/components/icons'

type TSectionCorporateCourse = TPropClassNames

const SectionCorporateCourse = ({ classNames }: TSectionCorporateCourse) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <h2 className={stls.title}>Курс для сотрудников компании</h2>
          <p className={stls.p}>
            Если нужно организовать обучение своих сотрудников – напишите нам.
            Мы подготовили для Вас индивидуальное предложение
          </p>
          <div className={stls.btn}>
            <PopupTrigger btn='alpha' cta={'learnMore'} />
          </div>
        </div>
        <div className={stls.right}>
          <IconGeneralSquare classNames={[stls.IconGeneralSquare]} />
          <IconGeneralLiniarSpiral
            classNames={[stls.IconGeneralLiniarSpiral]}
          />
          <ImgCorporateCourseStudentsStudying classNames={[stls.img]} />
          <IconGeneral3dSpiral
            classNames={[stls.IconGeneral3dSpiral]}
            color={colors.nu}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateCourse
