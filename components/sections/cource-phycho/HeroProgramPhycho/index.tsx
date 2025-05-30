import stls from './index.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import marked from 'marked'
import { selectors, colors } from '@/config/index'
import ProgramContext from '@/context/program/programContext'
import ProgramsContext from '@/context/programs/programsContext'
import Wrapper from '@/components/layout/Wrapper'
import ProgramLabel from '@/components/program/ProgramLabel'
import ProgramInfoAlt from '@/components/program/ProgramInfoAlt'
import PopupTrigger from '@/components/general/PopupTrigger'
import { BtnBorderBlack } from '@/components/btns'
import { OpenForm } from '@/components/forms'
import Image from 'next/image'
import IconPaper from '@/components/icons/phychology/IconPaper'

const HeroProgramPhycho = () => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const { curProgramsType } = useContext(ProgramsContext)

  const rootClassNames = cn(stls.container, selectors.sectionHero)

  return (
    <section className={rootClassNames}>
      <Wrapper>
        <div className={cn(stls.top, stls.gridTemplate)}>
          <div className={cn(stls.heading)}>
            <div className={stls.label}>
              <ProgramLabel color='black' />
            </div>
            <div className={stls.label}>
              <ProgramLabel color='purple' text='Расширенный курc' needIcon />
            </div>
            <h1 className={stls.title}>{program?.title}</h1>
            <div className={cn(stls.description)}>
              {program?.description && parse(marked(program.description))}
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
              <PopupTrigger btn='theta' cta='askQuestion' />
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

              <BtnBorderBlack
                text='Посмотреть программу'
                scrollToID='program'
              />
            </div>
            <div className={stls.gift}>
              <div className={stls.giftIcon}>
                <IconPaper />
              </div>
              Оставьте заявку и получите гайд «Основные виды и методы
              психотерапии и практической психологии» в подарок
            </div>
          </div>

          <div className={cn(stls.form, altStyles && stls.altStyles)}>
            <div className={stls.giftPictureContainer}>
              <div className={stls.giftPicture}>
                <Image
                  src='/assets/imgs/new-course/gift.png'
                  alt='Подарок'
                  layout='fill'
                />
              </div>
            </div>
            {/* <div className={stls.treePictureContainer}>
              <div className={stls.treePicture}>
                <Image
                  src='/assets/imgs/new-course/tree.png'
                  alt='Ветка'
                  layout='fill'
                />
              </div>
            </div> */}

            <OpenForm className={stls.formWrapper} />
          </div>
          <div className={stls.info}>
            <ProgramInfoAlt />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroProgramPhycho
