import stls from '@/styles/components/sections/Cta.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
import ProgramContext from '@/context/program/programContext'
import { ImgCta1 } from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'

type CtaType = {
  title: string
  desc: string
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
  question?: boolean
}

const Cta = ({ title = null, desc = null, cta }: CtaType) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <section className={cn(stls.container, { [stls.atMba]: atMba })}>
      <Wrapper classNames={[cn(stls.wrapper, { [stls.atMba]: atMba })]}>
        <div className={stls.img}>
          <ImgCta1 />
        </div>
        <div className={stls.text}>
          <h2 className={stls.title}>{title}</h2>
          <p className={stls.p}>{desc}</p>
        </div>
        <div className={cn(stls.btn, { [stls.atMba]: atMba })}>
          <PopupTrigger btn='gamma' cta={cta} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Cta
