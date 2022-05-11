import stls from '@/styles/components/sections/HeroProgram.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import marked from 'marked'
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
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  const { curProgramsType } = useContext(ProgramsContext)
  return (
    <section
      className={cn(
        stls.container,
        { [stls.atMba]: atMba },
        selectors.sectionHero
      )}>
      <Wrapper>
        <div className={cn(stls.top, { [stls.atMba]: atMba })}>
          <div className={stls.heading}>
            <div className={stls.label}>
              <ProgramLabel />
            </div>
            <h1 className={stls.title}>{program?.title}</h1>
            <div
              className={cn(stls.descriptionDesktop, { [stls.atMba]: atMba })}>
              {program?.description && parse(marked(program.description))}
            </div>
            <div className={stls.btnsDesktop}>
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
          <div className={cn(stls.pic, { [stls.atMba]: atMba })}>
            <div className={cn(stls.discount, { [stls.atMba]: atMba })}>
              <ProgramDiscount />
            </div>
            {atMba && (
              <>
                <IconGeneral3dSpiral classNames={[stls.IconGeneral3dSpiral]} />
                <IconGeneralCircle classNames={[stls.IconGeneralCircle]} />
                <IconGeneralWaterDrop
                  classNames={[stls.IconGeneralWaterDrop]}
                />
              </>
            )}
            <div className={cn(stls.img, { [stls.atMba]: atMba })}>
              <ImgCourse
                src={program?.heroPicture?.url}
                width={program?.heroPicture?.width && 676}
                height={getImageHeight({
                  width: 676,
                  widthInitial: program?.heroPicture?.width,
                  heightInitial: program?.heroPicture?.height
                })}
              />
            </div>
          </div>
          <div className={cn(stls.descriptionMobile, { [stls.atMba]: atMba })}>
            {program?.description && parse(program.description)}
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
