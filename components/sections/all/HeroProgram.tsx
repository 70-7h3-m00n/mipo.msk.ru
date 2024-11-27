import stls from '@/styles/components/sections/all/HeroProgram.module.sass'
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
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const { curProgramsType } = useContext(ProgramsContext)
  return (
    <section
      className={cn(
        stls.container,
        { [stls.altStyles]: altStyles },
        selectors.sectionHero
      )}>
      <Wrapper>
        <div className={cn(stls.top, { [stls.altStyles]: altStyles })}>
          <div className={cn(stls.heading, { [stls.altStyles]: altStyles })}>
            <div className={stls.label}>
              <ProgramLabel />
            </div>
            <h1 className={stls.title}>{program?.title}</h1>
            <div
              className={cn(stls.descriptionDesktop, {
                [stls.altStyles]: altStyles
              })}>
              {program?.description && parse(marked(program.description))}
            </div>
            <div
              className={cn(stls.btnsDesktop, { [stls.altStyles]: altStyles })}>
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
          <div className={cn(stls.pic, { [stls.altStyles]: altStyles })}>
            <div className={cn(stls.discount, { [stls.altStyles]: altStyles })}>
              <ProgramDiscount />
            </div>
            {altStyles && (
              <>
                <IconGeneral3dSpiral classNames={[stls.IconGeneral3dSpiral]} />
                <IconGeneralCircle classNames={[stls.IconGeneralCircle]} />
                <IconGeneralWaterDrop
                  classNames={[stls.IconGeneralWaterDrop]}
                />
              </>
            )}
            <div className={cn(stls.img, { [stls.altStyles]: altStyles })}>
              <ImgCourse
                src={program?.heroPicture?.url}
                width={program?.heroPicture?.width && (altStyles ? 700 : 676)}
                height={getImageHeight({
                  width: altStyles ? 700 : 676,
                  widthInitial: program?.heroPicture?.width,
                  heightInitial: program?.heroPicture?.height
                })}
              />
            </div>
          </div>
          <div
            className={cn(stls.descriptionMobile, {
              [stls.altStyles]: altStyles
            })}>
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
