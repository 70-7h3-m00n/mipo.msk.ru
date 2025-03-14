import stls from '@/styles/components/sections/all/StudyCost.module.sass'
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
import { useRouter } from 'next/router'

const StudyCost = () => {
  
  const router = useRouter()
  const isCourses = router.pathname.includes('/courses/')

  const { program } = useContext(ProgramContext)

  const atProfession = program?.category?.type === 'profession'
  const atCourse = program?.category?.type === 'course'
  const atMba = program?.category?.type === 'mba'
  const altStyles = atProfession || atMba

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

  const pointsDynamic =
    program?.StudyCostItems && program.StudyCostItems?.length > 0
      ? program.StudyCostItems.map(item => item?.item).filter(item => item)
      : null

  const points =
    pointsDynamic ||
    (atMba
      ? [
          'Программы с практическими заданиями от преподавателей-практиков и экспертов;',
          'Современный материал 2023 года;',
          'Интерактивное обучение;',
          'Личный куратор на весь этап обучения;',
          'Официальный диплом, все документы вносятся в реестр ФИС-ФРДО;',
          'Оформите налоговый вычет и верните 13% от стоимости обучения;',
          'Последнее предложение про налоговый вычет 13% с пропуском.'
        ]
      : !isCourses
      ? [
          'Онлайн вебинары с возможностью просмотра записей в течение всего курса обучения',
          'Тестирование и работа над ошибками после каждой дисциплины',
          'Лекционные и полезные дополнительные материалы к дисциплинам',
          // 'Индивидуальные и групповые домашние задания с обратной связью от преподавателей',
          // 'Онлайн-встречи с разбором вопросов от слушателей',
          // 'Практические упражнения с решением ситуационных задач'
          'Ведение и помощь в обучении куратором, от начала и до получения документа на руки, с обратной связью от преподавателей через куратора',
          'Видео-материал с практическими упражнения от преподавателей',
          'Официальным диплом РФ установленного образца с внесением данных в — Федеральный реестр сведений о документах об образовании (ФИС-ФРДО)'
        ]
      : [
          'Онлайн вебинары с возможностью просмотра записей в течение всего курса обучения',
          'Тестирование и работа над ошибками после каждой дисциплины',
          'Лекционные и полезные дополнительные материалы к дисциплинам',
          // 'Индивидуальные и групповые домашние задания с обратной связью от преподавателей',
          // 'Онлайн-встречи с разбором вопросов от слушателей',
          // 'Практические упражнения с решением ситуационных задач'
          'Ведение и помощь в обучении куратором, от начала и до получения документа на руки, с обратной связью от преподавателей через куратора',
          'Видео-материал с практическими упражнения от преподавателей',
          'Официальным удостоверение РФ установленного образца с внесением данных в — Федеральный реестр сведений о документах об образовании (ФИС-ФРДО)'
        ])

  const testimonials = [
    {
      title: 'Готовые знания + Официальный документ',
      content: (
        <>
          Смотрите лекции, выполняйте практические задания, получайте
          официальные документы по завершению курса.
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
            className={cn(stls.phoneNumber, { [stls.altStyles]: altStyles })}
            href={number.href}>
            {number.val}
          </a>
        </>
      )
    }
  ]

  return (
    <section className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper>
        <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
          <span className={stls.phonetablet}>Стоимость обучения</span>{' '}
          <span className={stls.laptopdesktop}>Запишитесь на программу</span>
        </h2>
        <div className={cn(stls.content, { [stls.altStyles]: altStyles })}>
          <div className={cn(stls.left, { [stls.altStyles]: altStyles })}>
            <div className={cn(stls.heading, { [stls.altStyles]: altStyles })}>
              <h3
                className={cn(stls.subtitle, { [stls.altStyles]: altStyles })}>
                {program?.title}
              </h3>
              <div className={cn(stls.info, { [stls.altStyles]: altStyles })}>
                {info.map((item, idx) => (
                  <div key={item.key + idx} className={stls.infoitem}>
                    <p
                      className={cn(stls.infokey, {
                        [stls.altStyles]: altStyles
                      })}>
                      {item.key}
                    </p>
                    <p
                      className={cn(stls.infoval, {
                        [stls.altStyles]: altStyles
                      })}>
                      {item.val}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className={cn(stls.discount, { [stls.altStyles]: altStyles })}>
                {program?.category?.type !== 'mba' && (
                  <ProgramDiscount small={!altStyles} />
                )}
              </div>
            </div>
            <div className={cn(stls.cost, { [stls.altStyles]: altStyles })}>
              <ProgramCost withPerMonth={!atCourse} />
            </div>
            <div className={cn(stls.btns, { [stls.altStyles]: altStyles })}>
              <div
                className={cn(stls.btncta, {
                  [stls.altStyles]: altStyles
                })}>
                <PopupTrigger btn='gamma' cta='signUp' />
              </div>
              <div
                className={cn(stls.btnquestion, {
                  [stls.altStyles]: altStyles
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
          <div className={cn(stls.right, { [stls.altStyles]: altStyles })}>
            <ul className={cn(stls.points, { [stls.altStyles]: altStyles })}>
              {points.map((point, idx) => (
                <li
                  key={point + idx}
                  className={cn(stls.point, { [stls.altStyles]: altStyles })}>
                  <span
                    className={cn(stls.pointicon, {
                      [stls.altStyles]: altStyles
                    })}>
                    <IconCircleCheck
                      classNames={[
                        cn(stls.IconCircleCheck, {
                          [stls.altStyles]: altStyles
                        })
                      ]}
                      inverse={!altStyles}
                      {...(altStyles && {
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
        {altStyles && (
          <ul
            className={cn(stls.testimonials, { [stls.altStyles]: altStyles })}>
            {testimonials.map((testimonial, idx) => (
              <li
                key={`${testimonial.title}-${idx}`}
                className={cn(stls.testimonial, {
                  [stls.altStyles]: altStyles
                })}>
                <p
                  className={cn(stls.testimonialTitle, {
                    [stls.altStyles]: altStyles
                  })}>
                  {testimonial.title}
                </p>
                <p
                  className={cn(stls.testimonialContent, {
                    [stls.altStyles]: altStyles
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
