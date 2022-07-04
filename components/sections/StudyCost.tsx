import stls from '@/styles/components/sections/StudyCost.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { BtnEta, BtnGamma, BtnText } from '@/components/btns'
import { IconCircleCheck } from '@/components/icons'
import PopupTrigger from '@/components/general/PopupTrigger'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { number } from '@/data/contact'

const StudyCost = () => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba' || 'profession'

  const info = [
    { key: 'Зачисление:', val: <ProgramAdmission /> },
    // {
    //   key: 'Количество часов:',
    //   val: `${studyHours} ч`
    // },
    {
      key: 'Форма обучения:',
      val: program?.study_form && program?.study_form.label
    },
    {
      key: 'Срок обучения:',
      val: (
        <ProgramStudyDuration
          studyMonthsDuration={
            program?.timenprice && program.timenprice?.[0]?.studyMonthsDuration
          }
        />
      )
    }
  ]

  const points = [
    'Онлайн вебинары с возможностью просмотра записей в течение всего курса обучения',
    'Тестирование и работа над ошибками после каждой дисциплины',
    'Лекционные и полезные дополнительные материалы к дисциплинам',
    'Индивидуальные и групповые домашние задания с обратной связью от преподавателей',
    // 'Онлайн-встречи с разбором вопросов от слушателей',
    'Практические упражнения с решением ситуационных задач'
  ]

  const testimonials = [
    {
      title: 'Возврат денег',
      content: (
        <>
          Если вы передумаете учиться, то мы вернем полную сумму в&nbsp;течение
          первых двух недель
        </>
      )
    },
    {
      title: 'Сэкономьте 13%',
      content: (
        <>
          Получите налоговый вычет. <br /> Все подробности у менеджера при
          записи на курс
        </>
      )
    },
    {
      title: 'Остались вопросы?',
      content: (
        <>
          Позвоните или напишите нам:{' '}
          <a
            className={cn(stls.phoneNumber, { [stls.atMba]: atMba })}
            href={number.href}>
            {number.val}
          </a>
        </>
      )
    }
  ]

  return (
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper>
        <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>
          <span className={stls.phonetablet}>Стоимость обучения</span>{' '}
          <span className={stls.laptopdesktop}>Запишитесь на программу</span>
        </h2>
        <div className={cn(stls.content, { [stls.atMba]: atMba })}>
          <div className={cn(stls.left, { [stls.atMba]: atMba })}>
            <div className={cn(stls.heading, { [stls.atMba]: atMba })}>
              <h3 className={cn(stls.subtitle, { [stls.atMba]: atMba })}>
                {program?.title}
              </h3>
              <div className={cn(stls.info, { [stls.atMba]: atMba })}>
                {info.map((item, idx) => (
                  <div key={item.key + idx} className={stls.infoitem}>
                    <p className={cn(stls.infokey, { [stls.atMba]: atMba })}>
                      {item.key}
                    </p>
                    <p className={cn(stls.infoval, { [stls.atMba]: atMba })}>
                      {item.val}
                    </p>
                  </div>
                ))}
              </div>
              <div className={cn(stls.discount, { [stls.atMba]: atMba })}>
                <ProgramDiscount small={!atMba} />
              </div>
            </div>
            <div className={cn(stls.cost, { [stls.atMba]: atMba })}>
              <ProgramCost withPerMonth />
            </div>
            <div className={cn(stls.btns, { [stls.atMba]: atMba })}>
              <div
                className={cn(stls.btncta, {
                  [stls.atMba]: atMba
                })}>
                <PopupTrigger btn='gamma' cta='signUp' />
              </div>
              <div
                className={cn(stls.btnquestion, {
                  [stls.atMba]: atMba
                })}>
                <PopupTrigger btn='eta' cta='askQuestion' />
              </div>
              <div
                className={cn({
                  [stls.btnmore]: true
                })}>
                {/* <BtnText text={'Подробнее'} arrowBottom /> */}
              </div>
            </div>
          </div>
          <div className={cn(stls.right, { [stls.atMba]: atMba })}>
            <ul className={cn(stls.points, { [stls.atMba]: atMba })}>
              {points.map((point, idx) => (
                <li
                  key={point + idx}
                  className={cn(stls.point, { [stls.atMba]: atMba })}>
                  <span className={cn(stls.pointicon, { [stls.atMba]: atMba })}>
                    <IconCircleCheck
                      classNames={[
                        cn(stls.IconCircleCheck, { [stls.atMba]: atMba })
                      ]}
                      inverse={!atMba}
                      {...(atMba && {
                        color1: colors.nu,
                        color2: colors['nu-2']
                      })}
                    />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {atMba && (
          <ul className={cn(stls.testimonials, { [stls.atMba]: atMba })}>
            {testimonials.map((testimonial, idx) => (
              <li
                key={`${testimonial.title}-${idx}`}
                className={cn(stls.testimonial, { [stls.atMba]: atMba })}>
                <p
                  className={cn(stls.testimonialTitle, {
                    [stls.atMba]: atMba
                  })}>
                  {testimonial.title}
                </p>
                <p
                  className={cn(stls.testimonialContent, {
                    [stls.atMba]: atMba
                  })}>
                  {testimonial.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    </section>
  )
}

export default StudyCost
