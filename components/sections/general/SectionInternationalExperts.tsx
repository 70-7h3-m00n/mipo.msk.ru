import stls from '@/styles/components/sections/general/SectionInternationalExperts.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgSectionInternationalExpertsImages } from '@/components/imgs'

type TSectionInternationalExperts = TPropClassNames

const SectionInternationalExperts = ({
  classNames
}: TSectionInternationalExperts) => {
  const list = [
    {
      title: 'Каждый из специалистов эксперт в своей области',
      content: 'Реализовывали крупные проекты в России и за границей'
    },
    {
      title: 'Имеют международный опыт преподавания',
      content: 'Преподают в ведущих бизнес-школах мира'
    },
    {
      title: 'Каждый эксперт проходит внутренню проверку',
      content:
        'Мы проводим внутреннюю многоэтоапную проверку, чтобы быть уверенными, что спикеры соответствуют всем нашим строгим критериям отбора'
    }
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <h2 className={stls.title}>
            Российские и зарубежные эксперты программы обучения
          </h2>
          <ul className={stls.list}>
            {list.map((item, idx) => (
              <li key={`${item.title}-${idx}`} className={stls.listItem}>
                <h3 className={stls.listItemTitle}>{item.title}</h3>
                <p className={stls.listItemContent}>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={stls.right}>
          <ImgSectionInternationalExpertsImages />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionInternationalExperts
