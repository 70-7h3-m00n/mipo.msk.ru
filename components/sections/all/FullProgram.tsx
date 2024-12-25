import stls from '@/styles/components/sections/all/FullProgram.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgFullProgram1 } from '@/components/imgs'

const FullProgram = ({ isForPhychology = false }) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <section
      className={cn(
        stls.container,
        altStyles && stls.altStyles,
        isForPhychology && stls.forPhychology
      )}>
      <Wrapper>
        <div
          className={cn(
            stls.wrapper,
            altStyles && stls.altStyles,
            isForPhychology && stls.forPhychology
          )}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={cn(stls.text, altStyles && stls.altStyles)}>
            <h2 className={cn(stls.title, altStyles && stls.altStyles)}>
              {isForPhychology
                ? 'Остались вопросы? Поможем определиться с программой'
                : 'Полная программа'}
            </h2>
            <p className={cn(stls.p, altStyles && stls.altStyles)}>
              {isForPhychology
                ? 'Вы можете оставить заявку на обратную связь. Менеджеры приёмной комиссии свяжутся с вами и помогут подобрать программу под ваш запрос и уровень знаний, а также предоставят информацию об обучении и поступлении'
                : 'Оставьте свои контактные данные, чтобы мы прислали учебный план направления'}
            </p>
          </div>
          <div className={cn(stls.btn, altStyles && stls.altStyles)}>
            <PopupTrigger
              btn='gamma'
              cta={isForPhychology ? 'askQuestion' : 'getProgram'}
              formName='Требуется полный учебный план'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FullProgram
