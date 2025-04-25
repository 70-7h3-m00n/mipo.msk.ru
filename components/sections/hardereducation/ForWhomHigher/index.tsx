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
import { IconAtom } from '@/components/icons'
import IconEarth from '@/components/icons/phychology/IconEarth'
import IconFire from '@/components/icons/phychology/IconFire'
import IconRocket from '@/components/icons/phychology/IconRocket'
import Image from 'next/image'
import AdmissionSteps from '../AdmissionSteps'
import BlockDoubtingYourScores from '../BlockDoubtingYourScores'

const ForWhomHigher = () => {
  const route = useRouter()
  const { program } = useContext(ProgramContext)

  const data = [
    {
      title: 'Выпускники 11 класса',
      desc: 'Поступление по результатам ЕГЭ или без ЕГЭ по специальной программе'
    },
    {
      title: 'Для тех, кто хочет перевестись из другого учебного заведения',
      desc: 'Перевод осуществляется без потери курса'
    },
    {
      title: 'У тебя хорошие баллы ЕГЭ? Получи скидку на обучение!*',
      desc: '*Скидка 20% при наличии результатов ЕГЭ от 230 баллов по сумме трех предметов'
    },
    {
      title: 'У кого уже есть среднее профессиональное или высшее образование',
      desc: 'Без ЕГЭ, вне зависимости имеющегося профиля, по ускоренной программе с сокращением срока обучения до 3.6 лет*'
    }
  ]

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2' className={stls.title}>Для кого программа</Title>

        <div className={stls.lineElements}>
          <div className={stls.imageWrapper}>
            <Image
              alt='Картинка с мужчиной'
              src='/assets/imgs/hardereducation/man.jpg'
              layout='fill'
            />
          </div>
          {data.map((elem, key) => (
            <div
              key={elem.title}
              className={cn(stls.elemOfLine, key === 2 && stls.active)}>
              <div>
                <div className={stls.title}>{elem.title}</div>
                <div className={stls.desc}>{elem.desc}</div>
                {key === 3 && <div className={stls.smalltext}>*при допустимой академической разнице</div>}
              </div>
            </div>
          ))}
        </div>
        <BlockDoubtingYourScores textColor='black'/>
      </Wrapper>
    </section>
  )
}

export default ForWhomHigher
