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

const WhyDoYouNeedLearningHigher = () => {
  const route = useRouter()
  const { program } = useContext(ProgramContext)

  const data = [
    {
      title: 'Рост по карьерной лестнице',
      desc: 'Руководящие должности доступны преимущественно специалистам с высшим образованием'
    },
    {
      title: 'Вакансии в крупных компаниях',
      desc: 'Диплом вуза обязателен при трудоустройстве в государственные корпорации и частные холдинги'
    },
    {
      title: 'Подтвержденная квалификация',
      desc: 'Работодатели ценят кандидатов, чья квалификация подтверждена соответствующими документами'
    },
    {
      title: 'Увеличение доходов',
      desc: 'Заработная плата сотрудников с дипломом вуза выше, чем у сотрудников без высшего образования'
    }
  ]

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2'>Открой для себя новые возможности</Title>
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

export default WhyDoYouNeedLearningHigher
