import stls from './index.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { useContext, useMemo, useState } from 'react'
import Title from '@/components/parts/Title'
import Image from 'next/image'
import InputRange from '@/components/parts/InputRange'
import { IconGeneralCircleCheckAlt } from '@/components/icons'
import { discountNum } from '@/data/price'
import PopupTrigger from '@/components/general/PopupTrigger'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import roundingUpPriceOrNumber from '@/helpers/roundingUpPriceOrNumber'
import { number } from '@/data/contact'
const StudyCoastPhycho = () => {
  const { program } = useContext(ProgramContext)

  const price =
    (program?.timenprice && Number(program?.timenprice?.[0]?.price)) || 0
  const discount =
    (program?.timenprice && Number(program?.timenprice?.[0]?.discount)) ||
    discountNum

  let priceWithoutCeil = roundingUpPriceOrNumber(
    (price / (100 - discount)) * 100
  )

  priceWithoutCeil = roundingUpPriceOrNumber(
    priceWithoutCeil + priceWithoutCeil * 0.17
  )
  const installmentPeriod = priceWithoutCeil >= 30000 ? 24 : 12
  const priceToMounth = roundingUpPriceOrNumber(
    priceWithoutCeil / installmentPeriod
  )

  const fullPriceWithSale = roundingUpPriceOrNumber(priceWithoutCeil * 0.35)
  const priceToMonthWithSale = roundingUpPriceOrNumber(priceToMounth * 0.35)
  const data = [
    {
      title: 'Базовый',
      duration: '6 месяцев',
      program: [
        'Самостоятельное обучение',
        'Без проверки знаний',
        'Доступ к практическим занятиям в записи',
        'Сертификат об окончании'
      ],
      sale: -10
    },
    {
      title: 'Практический',
      duration: '(по учебному плану)',
      addTariff: 'Базовый',
      program: [
        'Диплом, соответствующий государственным требованиям',
        'Профессиональный куратор на связи',
        'Проверка знаний: домашние задания, тесты',
        'Обратная связь от преподавателя',
        'Киноклуб',
        'Вебинары от практикующих психологов',
        'Доступ к библиотеке ЮРАЙТ',
        'Закрытое комьюнити в соцсетях с экспертами',
        'Центр развития карьеры'
      ],
      addProgram: ['Курс «Старт в профессии психолога» с выдачей сертификата']
    },
    {
      title: 'Экспектный',
      duration: '(по учебному плану)',
      addTariff: 'Практический',
      program: ['Бессрочный доступ к материалам'],
      addProgram: [
        'Курс повышения квалификации «Интегративный подход в практике психолога» (222 ак. часа)',
        'Курс повышения квалификации «Практикум по психодаигностике» (60 ак. часов)',
        'Курс «Психологическое интернет-консультирование» с выдачей сертификата',
        'Профессиональная подготовка «MBA: BUSINESS PSYCHOLOGY» (256 ак. часов)',
        '+ 2 курса в подарок на выбор',
        'Кол-во мест ограничено',
        '5 документов об образовании: 3 диплома, 1 удостоверение и 1 сертификат'
      ],
      sale: 50
    }
  ]
  return (
    <section className={cn(stls.container)} id='price'>
      <Wrapper>
        <Title as='h2' color='black'>
          Выберите свой тариф
        </Title>

        <div className={stls.columns}>
          {data.map((elem, key) => (
            <div key={key} className={stls.colum}>
              <h3 className={stls.title}>
                {elem.title}
                {key == 1 && <span className={stls.label}>ТОП</span>}
              </h3>
              <div className={stls.duration}>
                <span>Срок обучения: </span>
                <span>{elem.duration}</span>
              </div>
              <div className={stls.subtitle}>Программа обучения</div>
              {elem.addTariff && (
                <div className={stls.addTariff}>
                  <div>Включает тариф</div>
                  <div>{elem.addTariff}</div>
                </div>
              )}
              {elem.program?.length && (
                <ul className={stls.list}>
                  {elem.program.map((programm, index) => (
                    <li key={index}>
                      <IconGeneralCircleCheckAlt
                        color1={key == 1 ? '#FFF' : '#AC94F4'}
                        color2={key == 1 ? '#AC94F4' : '#FFF'}
                      />
                      {programm}
                    </li>
                  ))}
                </ul>
              )}
              {elem.addProgram?.length && (
                <>
                  <div className={stls.subtitle}>Программа обучения</div>
                  <ul className={stls.list}>
                    {elem.addProgram.map((addProgram, index) => (
                      <li key={index}>
                        <IconGeneralCircleCheckAlt
                          color1={key == 1 ? '#FFF' : '#AC94F4'}
                          color2={key == 1 ? '#AC94F4' : '#FFF'}
                        />
                        {addProgram}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {key == 2 && (
                <div className={stls.image}>
                  <Image
                    src='/assets/imgs/new-course/diploms.png'
                    layout='fill'
                    alt='Дипломы'
                  />
                </div>
              )}
              <div className={stls.priveBlock}>
                <div>
                  {elem.sale
                    ? toNumberWithSpaces(
                        roundingUpPriceOrNumber(
                          priceToMounth + (priceToMounth / 100) * elem.sale
                        )
                      )
                    : toNumberWithSpaces(priceToMounth)}
                  ₽/мес
                </div>
                <div className={stls.bigPrice}>
                  <div>от {priceToMonthWithSale} ₽/мес</div>
                  <div className={stls.priceDesc}>
                    в рассрочку на {installmentPeriod} месяца
                  </div>
                </div>
                <div className={stls.smallPrice}>
                  <div>
                    {elem.sale
                      ? toNumberWithSpaces(
                          roundingUpPriceOrNumber(
                            fullPriceWithSale +
                              (fullPriceWithSale / 100) * elem.sale
                          )
                        )
                      : toNumberWithSpaces(fullPriceWithSale)}
                    {' ₽'}
                  </div>
                  <div className={stls.priceDesc}>
                    одним платежом с доп. скидкой 5%
                  </div>
                </div>
                <div className={stls.btn}>
                  <PopupTrigger btn='gamma' cta='choosePlan' tarifPhycho={elem.title} />
                </div>
              </div>
            </div>
          ))}
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
              Позвоните или напишите нам <br /><a href={number.href}>{number.val}</a><br />
              Whatsapp <a href={number.newHref}>{number.newVal}</a>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StudyCoastPhycho
