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
import styled from '@emotion/styled'
import { text } from 'stream/consumers'

const WeWillSupportYou = () => {
  const route = useRouter()
  const { program } = useContext(ProgramContext)

  const data = [
    {
      title: 'Ментор',
      icon: true,
      text: 'Персональный ментор ответит на все вопросы, совместно с однокурсниками, поможет разобраться в тонкостях профессии, узнать все плюсы и минусы, выбрать правильный профессиональный путь.'
    },
    {
      title: 'Методист',
      icon: true,
      text: 'Методист будет проверять ваши работы и помогать сделать их лучше. А также, проводит интервизии и знакомит с профессией в обучающей форме.'
    },
    {
      title: 'Служба заботы',
      icon: true,
      text: 'Служба заботы поддержит в решении всех технических вопросов. Например, поможет слушателям разобраться в системе дистанционного обучения и ответит на все вопросы при возникновении трудностей.'
    }
  ]

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2'>Вас поддержат менторы и эксперты</Title>
        <div className={stls.lineElements}>
          {data.map((elem, index) => (
            <div key={index} className={stls.elementOfGrid}>
              <div className={cn(stls.elemOfLine, index > 2 && stls.bigText)}>
                {elem.icon && (
                  <div className={stls.icon}>
                    <IconEarth />
                  </div>
                )}

                <div>{elem.title}</div>
              </div>
              <div className={stls.elemOfLine}>{elem.text}</div>
            </div>
          ))}
        </div>
        <Title as='div' color='purple' fontSize={20} className={stls.subtitle}>
          90% наших студентов отмечают заботу и оперативность обратной связи
          кураторов
        </Title>
      </Wrapper>
    </section>
  )
}

export default WeWillSupportYou
