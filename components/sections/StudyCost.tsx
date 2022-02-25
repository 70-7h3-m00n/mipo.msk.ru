import stls from '@/styles/components/sections/StudyCost.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramCost from '@/components/program/ProgramCost'
import { BtnEta, BtnGamma, BtnText } from '@/components/btns'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import classNames from 'classnames'
import { IconCircleCheck } from '@/components/icons'
import PopupTrigger from '@/components/general/PopupTrigger'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'

const StudyCost = () => {
  const { program } = useContext(ProgramContext)

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

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.phonetablet}>Стоимость обучения</span>{' '}
          <span className={stls.laptopdesktop}>Запишитесь на программу</span>
        </h2>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.heading}>
              <h3 className={stls.subtitle}>{program?.title}</h3>
              <div className={stls.info}>
                {info.map((item, idx) => (
                  <div key={item.key + idx} className={stls.infoitem}>
                    <p className={stls.infokey}>{item.key}</p>
                    <p className={stls.infoval}>{item.val}</p>
                  </div>
                ))}
              </div>
              <div className={stls.discount}>
                <ProgramDiscount small />
              </div>
            </div>
            <div className={stls.cost}>
              <ProgramCost withPerMonth />
            </div>
            <div className={stls.btns}>
              <div
                className={classNames({
                  [stls.btncta]: true
                })}>
                <PopupTrigger btn='gamma' cta='signUp' />
              </div>
              <div
                className={classNames({
                  [stls.btnquestion]: true
                })}>
                <PopupTrigger btn='eta' cta='askQuestion' />
              </div>
              <div
                className={classNames({
                  [stls.btnmore]: true
                })}>
                {/* <BtnText text={'Подробнее'} arrowBottom /> */}
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <ul className={stls.points}>
              {points.map((point, idx) => (
                <li key={point + idx} className={stls.point}>
                  <span className={stls.pointicon}>
                    <IconCircleCheck inverse />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StudyCost
