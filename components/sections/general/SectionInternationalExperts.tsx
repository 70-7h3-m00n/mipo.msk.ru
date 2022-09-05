import stls from '@/styles/components/sections/general/SectionInternationalExperts.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import ProgramContext from '@/context/program/programContext'
import { getClassNames } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgSectionInternationalExpertsImages } from '@/components/imgs'
import { IconGeneralCircleArrorRight } from '@/components/icons'

type TSectionInternationalExperts = TPropClassNames

const SectionInternationalExperts = ({
  classNames
}: TSectionInternationalExperts) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const atProfession = program?.category?.type === 'profession'

  const listDynamic =
    program?.SectionInternationalExpertsItems &&
    program.SectionInternationalExpertsItems?.length > 0
      ? program.SectionInternationalExpertsItems
      : null

  const list = listDynamic || [
    {
      title: 'Каждый из специалистов эксперт в своей области',
      desc: 'Реализовывали крупные проекты в России и за границей'
    },
    {
      title: 'Имеют международный опыт преподавания',
      desc: 'Преподают в ведущих бизнес-школах мира'
    },
    {
      title: 'Каждый эксперт проходит внутреннюю проверку',
      desc: 'Мы проводим внутреннюю многоэтапную проверку, чтобы быть уверенными, что спикеры соответствуют всем нашим строгим критериям отбора'
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
                <IconGeneralCircleArrorRight
                  classNames={[stls.IconGeneralCircleArrorRight]}
                />
                <div className={stls.listItemText}>
                  <h3 className={stls.listItemTitle}>{item.title}</h3>
                  <p className={stls.listItemContent}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={stls.right}>
          <ImgSectionInternationalExpertsImages
            classNames={[stls.ImgSectionInternationalExpertsImages]}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionInternationalExperts
