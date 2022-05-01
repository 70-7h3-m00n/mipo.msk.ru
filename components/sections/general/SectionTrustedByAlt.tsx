import stls from '@/styles/components/sections/general/SectionTrustedByAlt.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import {
  ImgSectionTruestedByAltLenovoLogo,
  ImgSectionTruestedByAltVtbLogo,
  ImgSectionTruestedByAltRzhdLogo,
  ImgSectionTruestedByAltRosneft
} from '@/components/imgs'

type TSectionTrustedByAlt = TPropClassNames

const SectionTrustedByAlt = ({ classNames }: TSectionTrustedByAlt) => {
  const list = [
    ImgSectionTruestedByAltLenovoLogo,
    ImgSectionTruestedByAltVtbLogo,
    ImgSectionTruestedByAltRzhdLogo,
    ImgSectionTruestedByAltRosneft
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Обучают своих сотрудников у нас</h2>
        <ul className={stls.list}>
          {list.map((Component, idx) => (
            <li
              key={`SectionTrustedByAlt__list-${idx}`}
              className={stls.listItem}>
              <Component classNames={[stls.img]} />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionTrustedByAlt
