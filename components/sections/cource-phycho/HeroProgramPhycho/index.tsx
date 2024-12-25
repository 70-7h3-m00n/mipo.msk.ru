import stls from './index.module.sass'
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
  IconGeneralInfo,
  IconGeneralWaterDrop
} from '@/components/icons'
import { ImgCourse, ImgTemplate } from '@/components/imgs'
import { BtnBorderBlack } from '@/components/btns'
import { OpenForm } from '@/components/forms'
import Image from 'next/image'
import Popup from 'reactjs-popup'

const HeroProgramPhycho = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const { curProgramsType } = useContext(ProgramsContext)

  const rootClassNames = cn(
    stls.container,
    altStyles && stls.altStyles,
    selectors.sectionHero
  )

  return (
    <section className={rootClassNames}>
      <Wrapper>
        <div className={cn(stls.top, altStyles && stls.altStyles)}>
          <div className={cn(stls.heading, altStyles && stls.altStyles)}>
            <div className={stls.label}>
              <ProgramLabel color='black' />
            </div>
            <div className={stls.label}>
              <ProgramLabel color='purple' text='Расширенный курc' needIcon />
            </div>
            <h1 className={stls.title}>{program?.title}</h1>
            <div
              className={cn(
                stls.descriptionDesktop,
                altStyles && stls.altStyles
              )}>
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
              <BtnBorderBlack text='Посмотреть программу' />
            </div>
          </div>

          <div className={cn(stls.pic, altStyles && stls.altStyles)}>
            {altStyles && (
              <>
                <div className={stls.giftPictureContainer}>
                  <div className={stls.giftPicture}>
                    <Image
                      src='/assets/imgs/new-course/gift.png'
                      alt='Ветка'
                      layout='fill'
                    />
                  </div>
                </div>
                <div className={stls.treePictureContainer}>
                  <div className={stls.treePicture}>
                    <Image
                      src='/assets/imgs/new-course/tree.png'
                      alt='Ветка'
                      layout='fill'
                    />
                  </div>
                </div>
              </>
            )}
            <OpenForm />
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

export default HeroProgramPhycho
