import stls from '@/styles/components/sections/all/HeroProgram.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import { selectors, colors } from '@/config/index'
import { getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import ProgramsContext from '@/context/programs/programsContext'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/program/ProgramLabel'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import ProgramInfo from '@/components/program/ProgramInfo'
import ProgramInfoAlt from '@/components/program/ProgramInfoAlt'
import PopupTrigger from '@/components/general/PopupTrigger'
import {
  IconGeneral3dSpiral,
  IconGeneralCircle,
  IconGeneralWaterDrop
} from '@/components/icons'
import { ImgCourse } from '@/components/imgs'

const HeroProgram = () => {

  const { curProgramsType } = useContext(ProgramsContext)
  return (
    <section
      className={cn(
        stls.container,
        selectors.sectionHero
      )}>
      <Wrapper>
        <div className={cn(stls.top)}>
          <div className={cn(stls.heading)}>
            <div className={stls.label}>
              <ProgramLabel />
            </div>
            <div
              className={cn(stls.descriptionDesktop, {

              })}>

            </div>
            <div className={cn(stls.btnsDesktop)}>
              <PopupTrigger
                btn='alpha'
                cta={
                  curProgramsType === 'course'
                    ? 'signUpForCourse'
                    : curProgramsType === 'profession'
                    ? 'signUpForProfession'
                    : curProgramsType === 'mba'
                    ? 'sighUpForMBA'
                    : 'signUp'
                }
              />
              <PopupTrigger btn='beta' cta='askQuestion' />
            </div>
          </div>
          <div className={cn(stls.pic)}>
            <div className={cn(stls.discount)}>
              <ProgramDiscount />
            </div>

            <div className={cn(stls.img)}>

            </div>
          </div>
          <div
            className={cn(stls.descriptionMobile)}>
          </div>
        </div>
        <div className={stls.btnsMobile}>
          <PopupTrigger
            btn='alpha'
            cta={
              curProgramsType === 'course'
                ? 'signUpForCourse'
                : curProgramsType === 'profession'
                ? 'signUpForProfession'
                : curProgramsType === 'mba'
                ? 'sighUpForMBA'
                : 'signUp'
            }
          />
          <PopupTrigger btn='beta' cta='askQuestion' />
        </div>
        <div className={stls.info}>
          <ProgramInfoAlt />
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroProgram
