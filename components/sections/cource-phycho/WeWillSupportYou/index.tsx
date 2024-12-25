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

const WeWillSupportYou = () => {
  const route = useRouter()
  const { program } = useContext(ProgramContext)

  const data = [
    {
      text: 'Ментор',
      icon: true
    },
    {
      text: 'Методист',
      icon: true
    },
    {
      text: 'Служба заботы',
      icon: true
    },
    {
      text: 'Персональный ментор ответит     на все вопросы, совместно с однокурсниками, поможет разобраться в тонкостях профессии, узнать все плюсы и минусы, выбрать правильный профессиональный путь.'
    },
    {
      text: 'Методист будет проверять ваши работы и помогать сделать их лучше. А также, проводит интервизии и знакомит с профессией в обучающей форме.'
    },
    {
      text: 'Служба заботы поддержит в решении всех технических вопросов. Например, поможет слушателям разобраться в системе дистанционного обучения и ответит на все вопросы при возникновении трудностей.'
    }
  ]

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <Title as='h2'>Вас поддержат менторы и эксперты</Title>
        <div className={stls.lineElements}>
          {/* Тут есть костыль на адаптив его нужно убрать и переделать потом */}
          {data.map((elem, index) => (
            <div
              key={index}
              className={cn(stls.elemOfLine, index > 2 && stls.bigText)}>
              {elem.icon && (
                <div className={stls.icon}>
                  <IconEarth />
                </div>
              )}

              <div>{elem.text}</div>
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
