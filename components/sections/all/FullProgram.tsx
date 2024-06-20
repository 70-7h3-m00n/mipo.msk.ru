import stls from '@/styles/components/sections/all/FullProgram.module.sass'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import PopupTrigger from '@/components/general/PopupTrigger'
import { ImgFullProgram1 } from '@/components/imgs'

const FullProgram = () => {

  return (
    <section className={cn(stls.container)}>
      <Wrapper>
        <div className={cn(stls.wrapper)}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div className={cn(stls.text)}>
            <h2 className={cn(stls.title)}>
              Полная программа
            </h2>
            <p className={cn(stls.p)}>
              Оставьте свои контактные данные, чтобы мы прислали учебный план
              направления
            </p>
          </div>
          <div className={cn(stls.btn)}>
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
