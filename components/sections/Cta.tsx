import stls from '@/styles/components/sections/Cta.module.sass'
import { ReactNode, useContext } from 'react'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { ImgCta1 } from '@/components/imgs'
import { IconGeneralPercent } from '@/components/icons'
import PopupTrigger from '@/components/general/PopupTrigger'

type CtaType = {
  title: string
  desc: string | ReactNode
  cta:
    | 'askQuestion'
    | 'callMeBack'
    | 'signUpForCourse'
    | 'signUpForProfession'
    | 'signUp'
    | 'chooseProgram'
    | 'learnAboutUs'
    | 'submitApplication'
    | 'reserve'
    | 'learnAboutTeachers'
    | 'getProgram'
  question?: boolean
}

const Cta = ({ title = null, desc = null, cta }: CtaType) => {
  const { program } = useContext(ProgramContext)
  const atMba =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper classNames={[cn(stls.wrapper, { [stls.atMba]: atMba })]}>
        {atMba ? (
          <IconGeneralPercent
            classNames={[cn(stls.IconGeneralPercent, { [stls.atMba]: atMba })]}
          />
        ) : (
          <div className={stls.img}>
            <ImgCta1 />
          </div>
        )}

        <div className={cn(stls.text, { [stls.atMba]: atMba })}>
          <h2 className={cn(stls.title, { [stls.atMba]: atMba })}>{title}</h2>
          <p className={cn(stls.p, { [stls.atMba]: atMba })}>{desc}</p>
        </div>
        <div className={cn(stls.btn, { [stls.atMba]: atMba })}>
          <PopupTrigger btn='gamma' cta={cta} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Cta
