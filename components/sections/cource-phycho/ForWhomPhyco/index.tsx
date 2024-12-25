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

const ForWhomPhyco = () => {
  const route = useRouter()
  const { program } = useContext(ProgramContext)

  const data = [
    {
      title: 'Для мечтающих освоить профессию психолога с нуля',
      desc: 'Вы всегда хотели зарабатывать любимым и благородным делом. Люди тянутся к вам за советами, у вас богатый жизненный опыт, но не хватает знаний.',
      icon: <IconEarth />
    },
    {
      title: 'Для тех кто хочет освоить профессию психолога для себя',
      desc: 'Вы начнете разбираться в психологических практиках и процессах. Использовать это в личной жизни, в работе и помощи близким.',
      icon: <IconFire />
    },
    {
      title: 'Для тех кто хочет получить диплом, чтобы работать официально',
      desc: 'Вы уже сейчас работающий психолог, но требуется подтверждения своего статуса официальным дипломом.',
      icon: <IconRocket />
    }
  ]

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2'>Для кого программа</Title>
        <Title as='div' color='grey' fontSize={20} className={stls.subtitle}>
          Все наши программы сертифицированы, имеют аккредитации, а дипломы
          котируются по всему миру!
        </Title>
        <div className={stls.lineElements}>
          {data.map(elem => (
            <div key={elem.title} className={stls.elemOfLine}>
              <div className={stls.icon}>{elem.icon}</div>
              <div>
                <div className={stls.title}>{elem.title}</div>
                <div className={stls.desc}>{elem.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhomPhyco
