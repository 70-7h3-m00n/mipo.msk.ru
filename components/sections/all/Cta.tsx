import stls from '@/styles/components/sections/all/Cta.module.sass'
import { ReactNode } from 'react'
import cn from 'classnames'
import Wrapper from '@/components/layout/Wrapper'
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

const Cta = ({ title = null, desc = null, cta }: CtaType | any) => {

  return (
    <section className={cn(stls.container)}>
      <Wrapper classNames={[cn(stls.wrapper)]}>
        <div className={cn(stls.text)}>
          <h2 className={cn(stls.title)}>
            {title}
          </h2>
          <p className={cn(stls.p)}>{desc}</p>
        </div>
        <div className={cn(stls.btn)}>
          <PopupTrigger btn='gamma' cta={cta} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Cta
