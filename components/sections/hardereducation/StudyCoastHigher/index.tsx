import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { useContext, useMemo, useState } from 'react'
import Title from '@/components/parts/Title'
import Image from 'next/image'
import { IconGeneralCircleCheckAlt } from '@/components/icons'
import { discountNum } from '@/data/price'
import PopupTrigger from '@/components/general/PopupTrigger'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import roundingUpPriceOrNumber from '@/helpers/roundingUpPriceOrNumber'
import { number } from '@/data/contact'
import Popup from 'reactjs-popup'
import PopupInfoProgram from '@/components/popups/PopupInfoProgram'
import { SALE_DATE_VALUE, SALE_VALUE } from '@/lib/constant'
import { useHigherProgramContext } from '@/context/highereducation/ProgramHigherContext'
import UniversalButton from '@/components/btns/UniversalButton'

interface Props {
  isForOtherTariff?: boolean
  nameSlugForTariff?: string
}

const StudyCoastHigher = ({}: Props) => {
  const program = useHigherProgramContext()

  const dataList = [
    {
      title:
        'Онлайн вебинары с возможностью просмотра записей в течение всего курса обучения'
    },
    {
      title: 'Тестирование и работа над ошибками после каждой дисциплины'
    },
    {
      title: 'Лекционные и полезные дополнительные материалы к дисциплинам'
    },
    {
      title:
        'Индивидуальные и групповые домашние задания с обратной связью от преподавателей'
    },
    {
      title: 'Онлайн-встречи с разбором вопросов от слушателей'
    },
    {
      title: 'Практические упражнения с решением ситуационных задач '
    }
  ]

  const price = program['timenprice'][0].price
  const priceWithoutSale = (price / (100 - SALE_VALUE)) * 100

  return (
    <section className={cn(stls.container)} id='price'>
      <Wrapper>
        <Title as='h2' color='black'>
          Стоимость обучения
        </Title>

        <div className={cn(stls.columns)}>
          <div>
            <Title as='div' color='black' fontSize={22}>
              Стоимость за семестр
            </Title>
            <div className={stls.label}>Скидка {SALE_VALUE}%</div>
            <div className={stls.oldPrice}>
              {toNumberWithSpaces(
                roundingUpPriceOrNumber(priceWithoutSale / 24 / 2)
              )}
              ₽/мес
            </div>
            <div className={stls.newPrice}>
              <div>
                {toNumberWithSpaces(roundingUpPriceOrNumber(price / 24 / 2))}
                ₽/мес
              </div>
              <div className={stls.subtitle}>в рассрочку на 24 месяца</div>
            </div>
            <div className={stls.fullPrice}>
              <div>
                {toNumberWithSpaces(roundingUpPriceOrNumber(price / 2))}
                ₽/мес
              </div>
              <div className={stls.subtitle}>
                оплата за один семестр обучения
              </div>
            </div>
            <Popup
              trigger={
                <UniversalButton
                  bgColor='blue'
                  colorText='white'
                  className={stls.btn}>
                  Выбрать
                </UniversalButton>
              }
              modal
              nested>
              {close => <div>Тут будет попап</div>}
            </Popup>
          </div>
          <div>
            <Title as='div' color='black' fontSize={22} className={stls.commonTitle}>
              Стоимость за семестр
            </Title>
            <div className={stls.label}>Скидка {SALE_VALUE}%</div>
            <div className={stls.oldPrice}>
              {toNumberWithSpaces(
                roundingUpPriceOrNumber(priceWithoutSale / 24 / 2)
              )}
              ₽/мес
            </div>
            <div className={stls.newPrice}>
              <div>
                {toNumberWithSpaces(roundingUpPriceOrNumber(price / 24 / 2))}
                ₽/мес
              </div>
              <div className={stls.subtitle}>в рассрочку на 24 месяца</div>
            </div>
            <div className={stls.fullPrice}>
              <div>
                {toNumberWithSpaces(roundingUpPriceOrNumber(price / 2))}
                ₽/мес
              </div>
              <div className={stls.subtitle}>
                оплата за один семестр обучения
              </div>
            </div>
            <Popup
              trigger={
                <UniversalButton
                  borderColor='white'
                  borderPx={1}
                  colorText='white'
                  className={stls.btn}>
                  Выбрать
                </UniversalButton>
              }
              modal
              nested>
              {close => <div>Тут будет попап</div>}
            </Popup>
          </div>
          <div>
            <ul>
              {dataList.map((elem, idx) => (
                <li key={idx}>
                  <IconGeneralCircleCheckAlt
                    color1={'#FFF'}
                    color2={'#2663F0'}
                    classNames={[stls.icon]}
                  />
                  {elem.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={stls.blockAfter}>
          <div>
            <h3>Возврат денег</h3>
            <div>
              Если вы передумаете учиться, то мы вернем полную сумму в течении
              первых двух недель
            </div>
          </div>
          <div>
            <h3>Сэкономьте 13%</h3>
            <div>
              Получить налоговый вычет. Все подробности у менеджера при записи
              на курс
            </div>
          </div>
          <div>
            <h3>Остались вопросы?</h3>
            <div>
              Позвоните или напишите нам <br />
              <a href={number.href}>{number.val}</a>
              <br />
              Whatsapp <a href={number.newHref}>{number.newVal}</a>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StudyCoastHigher
