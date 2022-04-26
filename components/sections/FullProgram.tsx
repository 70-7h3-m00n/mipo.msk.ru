import stls from '@/styles/components/sections/FullProgram.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgFullProgram1 } from '@/components/imgs'

const FullProgram = () => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper>
        <div className={cn(stls.wrapper, { [stls.atMba]: atMba })}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={cn(stls.text, { [stls.atMba]: atMba })}>
            <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>
              Полная программа
            </h2>
            <p className={cn(stls.p, { [stls.atMba]: atMba })}>
              Оставьте свои контактные данные, чтобы мы прислали учебный план
              направления
            </p>
          </div>
          <div className={cn(stls.btn, { [stls.atMba]: atMba })}>
            <PopupTrigger btn='gamma' cta='getProgram' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FullProgram
