import Wrapper from '@/components/layout/Wrapper'
import stls from './index.module.sass'
import Image from 'next/image'
import Title from '@/components/parts/Title'
import { useState } from 'react'
import { IconGeneralCircleCheckAlt } from '@/components/icons'
import BlockDoubtingYourScores from '../BlockDoubtingYourScores'
import cn from 'classnames'

interface Props {
  backGroundColor?: 'white'
}

const AdmissionSteps = ({ backGroundColor }: Props) => {
  const [selectedPoint, setSelectedPoint] = useState<number>(0)

  const dataToSteps = [
    {
      title: 'Оставить заявку',
      desc: 'Менеджер Приемной комиссии свяжется с Вами, уточнит все детали поступления и поможет оформить документы',
      image: '/assets/imgs/hardereducation/steps/step1.jpg'
    },
    {
      title: 'Подтверди результаты ЕГЭ или пройди вступительные испытания',
      desc: 'Все вступительные испытания проводятся дистанционно на нашей платформе, приезжать в Институт не потребуется',
      image: '/assets/imgs/hardereducation/steps/step2.jpg'
    },
    {
      title: 'Заключи договор',
      desc: 'Заключи договор на оказание платных образовательных услуг и оплати обучение',
      image: '/assets/imgs/hardereducation/steps/step3.jpg'
    },
    {
      title: 'Поздравляем!',
      desc: 'Теперь ты студент Московского института Профессиональной Переподготовки',
      image: '/assets/imgs/hardereducation/steps/step4.jpg'
    }
  ]

  return (
    <section className={cn(stls.component, backGroundColor && stls[backGroundColor])}>
      <Wrapper classNames={[stls.wrapper]}>
        <Title fontSize={44} color={backGroundColor == 'white' ? 'black' : 'white'} >
          Что нужно для поступления? <br />4 легких шага в поступлении:
        </Title>
        <div className={stls.stepsBlock}>
          <div className={stls.steps}>
            {dataToSteps.map((element, key) => (
              <div
                className={cn(key === selectedPoint && stls.active, backGroundColor && stls.blackColor)}
                key={key}
                onClick={() => setSelectedPoint(key)}>
                {key + 1}. {element.title}
              </div>
            ))}
          </div>
          <div className={stls.pictireBlock}>
            <div>{dataToSteps[selectedPoint].desc}</div>
            <div className={stls.imageWrapper}>
              <Image
                src={dataToSteps[selectedPoint].image}
                alt={dataToSteps[selectedPoint].title}
                layout='fill'
              />
            </div>
          </div>
        </div>
        <div className={stls.information}>
          <Title as='div' color='black' fontSize={28}>
            Для поступления потребуется минимум документов:
          </Title>
          <div>
            <ul>
              <li>
                <IconGeneralCircleCheckAlt
                  color1={'#FFF'}
                  color2={'#2663F0'}
                  classNames={[stls.icon]}
                />
                Паспорт
              </li>
              <li>
                <IconGeneralCircleCheckAlt
                  color1={'#FFF'}
                  color2={'#2663F0'}
                  classNames={[stls.icon]}
                />
                Диплом/аттестат
              </li>
              <li>
                <IconGeneralCircleCheckAlt
                  color1={'#FFF'}
                  color2={'#2663F0'}
                  classNames={[stls.icon]}
                />
                Заявление на поступление
              </li>
            </ul>
          </div>
        </div>
        <BlockDoubtingYourScores textColor={backGroundColor == 'white' ? 'black' : backGroundColor}/>
      </Wrapper>
    </section>
  )
}

export default AdmissionSteps
