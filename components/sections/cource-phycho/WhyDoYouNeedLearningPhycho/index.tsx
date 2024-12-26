import stls from './index.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import marked from 'marked'
import { getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import { ImgForWhom, ImgForWhomPhoneTablet } from '@/components/imgs'
import { useRouter } from 'next/router'
import Title from '@/components/parts/Title'

const WhyDoYouNeedLearningPhycho = () => {
  const route = useRouter()
  const { program } = useContext(ProgramContext)

  const data = [
    {
      title: 'Востребованность',
      desc: 'Потребность в психологах в России за 2023 год выросла на 43%'
    },
    {
      title: 'Удаленный график',
      desc: 'Можно работать дистанционно из любой точки мира'
    },
    {
      title: 'Экологичная профессия',
      desc: 'Психолог помогает справиться с психологическими проблемами и кризисами'
    },
    {
      title: 'Высокий доход',
      desc: 'Средняя зарплата наших выпускников 100 000 р.'
    }
  ]

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2'>Почему стоит осваивать профессию психолога?</Title>
        <div className={stls.lineElements}>
          {data.map(elem => (
            <div key={elem.title} className={stls.elemOfLine}>
              <div className={stls.title}>{elem.title}</div>
              <div className={stls.desc}>{elem.desc}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhyDoYouNeedLearningPhycho
