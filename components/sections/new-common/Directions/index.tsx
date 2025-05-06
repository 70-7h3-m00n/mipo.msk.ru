import React, { useContext } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import Wrapper from '@/components/layout/Wrapper'
import Title from '@/components/parts/Title'
import stls from './index.module.sass'
import CardWithoutImage from '@/components/cards/CardWithoutImage'
import programsContext from '@/context/programs/programsContext'
import getCategoryFromPrograms from '@/helpers/getCategoryFromPrograms'

export default function Directions() {
  const data = useContext(programsContext)

  const dataForDisplay = [
    {
      title: 'Профессиональная переподготовка',
      textDown: `${
        getCategoryFromPrograms(data.professions).length
      } направлений`,
      link: '/professions'
    },
    {
      title: 'Профессиональная переподготовка',
      textDown: `${getCategoryFromPrograms(data.courses).length} направлений`,
      link: '/courses'
    },
    {
      title: 'MBA',
      textDown: `${getCategoryFromPrograms(data.mbas).length} направлений`,
      link: '/mba'
    },
    {
      title: 'Высшее образование',
      textDown: `${data.facultets.length} направлений`,
      link: '/highereducation'
    }
  ]

  return (
    <section className={stls.component}>
      <Wrapper>
        <Title fontSize={44} className={stls.title}>Программы обучения</Title>
        <div className={stls.list}>
          {dataForDisplay.map((elem, idx) => (
            <CardWithoutImage
              key={idx}
              title={elem.title}
              displayLabels={false}
              bgColor='lightBlue'
              textDown={elem.textDown}
              className={stls.card}
              lintTo={elem.link}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
