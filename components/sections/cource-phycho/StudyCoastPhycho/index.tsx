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
      addProgram: [
        {
          title: 'Курс «Старт в профессии психолога» с выдачей сертификата',
          info: ['14 академических часов', 'Сертификат о прохождении курса'],
          program: [
            'Место психологии в современной жизни',
            'Кто такой психолог?',
            'Карьерные возможности, или где можно работать',
            'Выбор специализации - как?',
            '«Ловушки» и сложности в профессии',
            'Профессиональное выгорание психолога',
            'Продвижение'
          ]
        }
      ]
    },
    {
      title: 'Экспертный',
      duration: '(по учебному плану)',
      addTariff: 'Практический',
      program: ['Бессрочный доступ к материалам'],
      addProgram: [
        {
          title:
            'Курс повышения квалификации «Интегративный подход в практике психолога» (222 ак. часа)',
          info: [
            '222 академических часов',
            'Удостоверение о повышении квалификации'
          ],
          program: [
            {
              text: 'Современная практическая психология: от разделения к интеграции',
              time: '18 часов'
            },
            {
              text: 'Начало работы: регламент сессии и диагностика запроса клиента',
              time: '18 часов'
            },
            {
              text: 'Гипнотический транс: возможности применения в психологическом консультировании и коучинге',
              time: '18 часов'
            },
            {
              text: 'Ограничивающие убеждения и интроекты',
              time: '18 часов'
            },
            {
              text: 'Работа с ресурсами ресурсными состояниями',
              time: '18 часов'
            },
            {
              text: 'Психосоматика и работа со вторичными выгодами',
              time: '18 часов'
            },
            {
              text: 'Работа с негативными чувствами и тяжелыми эмоциональными состояниями',
              time: '18 часов'
            },
            {
              text: 'Работа со страхами и фобиями',
              time: '18 часов'
            },
            {
              text: 'Работа с психотравмой',
              time: '18 часов'
            },
            {
              text: 'Работа со стыдом и чувством вины',
              time: '18 часов'
            },
            {
              text: 'Практикум по психологическому консультированию',
              time: '8 часов'
            }
          ]
        },
        {
          title:
            'Курс повышения квалификации «Практикум по психодаигностике» (60 ак. часов)',
          info: [
            '60 академических часов',
            'Удостоверение о повышении квалификации'
          ],
          program: [
            {
              text: 'Диагностика когнитивной сферы личности',
              time: '30 часов'
            },
            {
              text: 'Психодиагностика личности и поведения',
              time: '30 часов'
            }
          ]
        },
        {
          title:
            'Курс «Психологическое интернет-консультирование» с выдачей сертификата',
          info: ['10 академических часов', 'Сертификат о прохождении курса'],
          program: [
            {
              text: 'Интернет как пространство и средство психологической помощи'
            },
            {
              text: 'Социальные представления и научные доказательства эффективности дистанционного консультирования и психотерапии'
            },
            {
              text: 'Уникальные характеристики Интернет-консультирования и психотерапии'
            },
            {
              text: 'Виды и организационные методы Е-консультирования'
            },
            {
              text: 'Процесс и техники Интернет-консультирования и психотерапии'
            },
            {
              text: 'Частные проблемы Интернет-консультирования'
            },
            {
              text: 'Личные характеристики и компетенции специалистов, работающих в Интернете'
            },
            {
              text: 'Перспективы психологического консультирования и психотерапии в Интернете'
            }
          ]
        },
        {
          title:
            'Профессиональная подготовка «MBA: BUSINESS PSYCHOLOGY» (256 ак. часов)',
          info: [
            '256 академических часов',
            'Диплом профессиональной переподготовке'
          ],
          program: [
            {
              text: 'Психология управления',
              time: '40 часов'
            },
            {
              text: 'Психологическое бизнес-консультирование',
              time: '40 часов'
            },
            {
              text: 'Психология эффективных коммуникаций',
              time: '35 часов'
            },
            {
              text: 'Лидерство',
              time: '15 часов'
            },
            {
              text: 'Карьерный коучинг',
              time: '30 часов'
            },
            {
              text: 'Командообразование',
              time: '15 часов'
            },
            {
              text: 'Групповой и командный бизнес-коучинг',
              time: '15 часов'
            },
            {
              text: 'Тайм-менеджмент',
              time: '15 часов'
            },
            {
              text: 'Практика группового взаимодействия и самостоятельная работа',
              time: '43 часов'
            },
            {
              text: 'Особенности работы психолога за рубежом',
              time: '8 часов'
            }
          ]
        },

        '+ 2 курса в подарок на выбор',
        'Кол-во мест ограничено',
        '6 документов об образовании: 2 диплома, 2 удостоверения и 2 сертификата'
      ],
      sale: 120
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
                        {addProgram.title ? (
                          <Popup
                            trigger={
                              <a className={stls.link}>{addProgram.title}</a>
                            }
                            closeOnDocumentClick
                            modal>
                            {close => (
                              <PopupInfoProgram close={close} {...addProgram} />
                            )}
                          </Popup>
                        ) : (
                          addProgram
                        )}
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
                  <div>
                    от{' '}
                    {elem.sale
                      ? toNumberWithSpaces(
                          roundingUpPriceOrNumber(
                            priceToMonthWithSale +
                              (priceToMonthWithSale / 100) * elem.sale
                          )
                        )
                      : toNumberWithSpaces(priceToMonthWithSale)}
                    ₽/мес
                  </div>
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
                  <PopupTrigger
                    btn='gamma'
                    cta='choosePlan'
                    tarifPhycho={elem.title}
                  />
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

export default StudyCoastPhycho
