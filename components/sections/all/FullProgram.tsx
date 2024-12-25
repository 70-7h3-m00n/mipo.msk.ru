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
      className={cn(stls.container, {
        [stls.altStyles]: altStyles
      })}>
      <Wrapper>
        <div
          className={cn(stls.wrapper, isForPhychology && stls.forPhychology, {
            [stls.altStyles]: altStyles
          })}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={cn(stls.text, { [stls.altStyles]: altStyles })}>
            <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
              {isForPhychology
                ? 'Остались вопросы? Поможем определиться с программой'
                : 'Полная программа'}
            </h2>
            <p className={cn(stls.p, { [stls.altStyles]: altStyles })}>
              {isForPhychology
                ? 'Вы можете оставить заявку на обратную связь. Менеджеры приёмной комиссии свяжутся с вами и помогут подобрать программу под ваш запрос и уровень знаний, а также предоставят информацию об обучении и поступлении'
                : 'Оставьте свои контактные данные, чтобы мы прислали учебный план направления'}
            </p>
          </div>
          <div className={cn(stls.btn, { [stls.altStyles]: altStyles })}>
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
