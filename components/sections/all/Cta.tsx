import stls from '@/styles/components/sections/all/Cta.module.sass'
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
  isForPhychology?: boolean
}

const Cta = ({
  title = null,
  desc = null,
  cta,
  isForPhychology = false,
}: CtaType) => {
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
      <Wrapper
        classNames={[
          cn(
            stls.wrapper,
            altStyles && stls.altStyles,
            isForPhychology && stls.forPhychology
          )
        ]}>
        {altStyles ? (
          <IconGeneralPercent
            fillColor='#6F02C6'
            classNames={[
              cn(stls.IconGeneralPercent, { [stls.altStyles]: altStyles })
            ]}
          />
        ) : (
          <div className={stls.img}>
            <ImgCta1 />
          </div>
        )}

        <div className={cn(stls.text, { [stls.altStyles]: altStyles })}>
          <h2 className={cn(stls.title, { [stls.altStyles]: altStyles })}>
            {title}
          </h2>
          <p className={cn(stls.p, { [stls.altStyles]: altStyles })}>{desc}</p>
        </div>
        <div className={cn(stls.btn, { [stls.altStyles]: altStyles })}>
          <PopupTrigger btn='gamma' cta={cta} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Cta
