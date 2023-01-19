import stls from '@/styles/components/sections/FullProgram.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgFullProgram1 } from '@/components/imgs'

const FullProgram = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <section className={cn(stls.container, { [stls.altStyles]: altStyles })}>
      <Wrapper>
        <div className={cn(stls.wrapper, { [stls.altStyles]: altStyles })}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={cn(stls.text, { [stls.altStyles]: altStyles })}>
            <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
              Полная программа
            </h2>
            <p className={cn(stls.p, { [stls.altStyles]: altStyles })}>
              Оставьте свои контактные данные, чтобы мы прислали учебный план
              направления
            </p>
          </div>
          <div className={cn(stls.btn, { [stls.altStyles]: altStyles })}>
            <PopupTrigger
              btn='gamma'
              cta='getProgram'
              formName='Требуется полный учебный план'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FullProgram
