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
import { PopupCta } from '@/components/popups'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import calculateClosestAdmission from '@/helpers/calculateClosestAdmission'

interface Props {
  isForOtherTariff?: boolean
  nameSlugForTariff?: string
}

const StudyCoastHigher = ({}: Props) => {
  const program = useHigherProgramContext()

  const dataList = [
    {
      title: 'Образовательный кредит от Сбера',
      logo: '/assets/imgs/hardereducation/sber.svg'
    },
    {
      title: 'Рассрочка от Т-банка',
      logo: '/assets/imgs/hardereducation/tbank.svg'
    },
    {
      title: 'Длительность обучения - 4 года 6 месяцев'
    },
    {
      title: 'Дистанционно'
    },
    {
      title: 'Ближайшее зачисление - ' + calculateClosestAdmission()
    },
    {
      title: 'Государственный диплом'
    }
  ]

  const price = program['timenprice'][0].price
  const priceWithoutSale = (price / (100 - SALE_VALUE)) * 100

  return (
    <section className={cn(stls.container)} id='price'>
      <Wrapper>
        <Title as='h2' color='black' className={stls.title}>
          Стоимость обучения
        </Title>

        <div className={cn(stls.columns)}>
          <div>
            <div className={stls.titleWrapper}>
              <Title
                as='div'
                color='black'
                fontSize={22}
                className={stls.title}>
                Оплата за семестр
              </Title>
              <div className={stls.label}>- {SALE_VALUE}%</div>
            </div>
            <div className={stls.textInstallments}>
              Можно в рассрочку (при оплате стоимости обучения от 1 года)
            </div>
            <div className={stls.subtitleText}>
              Стоимость программы при оплате за семестр:
            </div>
            <div className={stls.oldPrice}>
              {toNumberWithSpaces(
                roundingUpPriceOrNumber((price / 2 / 100) * (100 + SALE_VALUE))
              )}{' '}
              ₽
            </div>
            <div className={stls.fullPrice}>
              <div>
                {toNumberWithSpaces(roundingUpPriceOrNumber(price / 2))} ₽
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
              {close => (
                <PopupCta title='Заявка оплата за семестр' close={close} />
              )}
            </Popup>
          </div>
          <div>
            <div className={stls.titleWrapper}>
              <Title
                as='div'
                color='black'
                fontSize={22}
                className={stls.commonTitle}>
                Оплата за год
              </Title>
              <div className={stls.label}>- {SALE_VALUE}%</div>
            </div>
            <div className={cn(stls.subtitleText, stls.whiteText)}>
              Стоимость программы при оплате за семестр:
            </div>

            <div className={stls.oldPrice}>
              {toNumberWithSpaces(
                roundingUpPriceOrNumber(priceWithoutSale / 24)
              )}
              ₽
            </div>
            <div className={stls.newPrice}>
              <div>
                от {toNumberWithSpaces(roundingUpPriceOrNumber(price / 24))}{' '}
                ₽/мес
              </div>
            </div>
            <div className={stls.oldFullPrice}>
              {toNumberWithSpaces(
                roundingUpPriceOrNumber((price / 100) * (100 + SALE_VALUE))
              )}
              ₽
            </div>
            <div className={stls.fullPriceCenterBlock}>
              <div>{toNumberWithSpaces(roundingUpPriceOrNumber(price))}₽</div>
              <div className={stls.subtitle}>
                Беспроцентная рассрочка на 12 месяцев
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
              {close => <PopupCta title='Заявка оплата за год' close={close} />}
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
                  {elem.logo && (
                    <Image
                      src={elem.logo}
                      width={82}
                      height={47}
                      alt='Логотип банка'
                    />
                  )}
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
