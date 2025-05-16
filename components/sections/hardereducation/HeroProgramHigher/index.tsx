import stls from './index.module.sass'
import { useContext, useState } from 'react'
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
import { BtnBorderBlack, BtnBorderWhite } from '@/components/btns'
import { OpenForm } from '@/components/forms'
import Image from 'next/image'
import { useHigherProgramContext } from '@/context/highereducation/ProgramHigherContext'
import UniversalProgramInfo from '@/components/program/UniversalProgramInfo'
import Link from 'next/link'
import IconSpringElement from '@/components/icons/IconSpringElement'
import IconLineElement from '@/components/icons/IconLineElement'

const HeroProgramHigher = () => {
  const program = useHigherProgramContext()

  const rootClassNames = cn(stls.container, selectors.sectionHero)

  const altStyles = true

  const [openFullText, setOpenFullText] = useState<boolean>(false)

  return (
    <section className={rootClassNames}>
      <Wrapper>
        <div className={cn(stls.top, stls.gridTemplate)}>
          <div className={stls.bgElement}>
            <div className={cn(stls.blurryCircle, stls.down)}></div>
            <div className={cn(stls.blurryCircle, stls.top)}></div>
            <div className={stls.springIcon}><IconSpringElement /></div>
            <div className={stls.lineIcon}><IconLineElement /></div>
          </div>
          <div className={cn(stls.heading)}>
            <div className={stls.breadcreambs}>
              <Link href='/'>Главная</Link>
              {' / '}
              <Link
                href={`/highereducation/${program['faculties_higher_educations'][0].slug}`}>
                {program['faculties_higher_educations'][0].name}
              </Link>
              {' / '}
              <span>{program.name}</span>
            </div>
            <div className={stls.label}>
              <ProgramLabel color='white' text='Онлайн-бакалавриат' />
            </div>
            {/* <div className={stls.label}>
              <ProgramLabel color='purple' text='Расширенный курc' needIcon />
            </div> */}
            <h1 className={stls.title}>{program?.name}</h1>
            <div className={cn(stls.description, !openFullText && stls.hidden)}>
              {program?.informationOfDirection &&
                parse(marked(program.informationOfDirection))}
              <div
                className={stls.btnOpenText}
                onClick={() => setOpenFullText(!openFullText)}>
                {openFullText ? 'Скрыть' : 'Читать далее'}
              </div>
            </div>

            <div className={stls.btnsMobile}>
              <PopupTrigger btn='alpha' cta='signUpForCourse' />
              <PopupTrigger btn='theta' cta='askQuestion' />
            </div>
            <div className={cn(stls.btnsDesktop)}>
              <PopupTrigger btn='alpha' cta='signUpForCourse' />
              <BtnBorderWhite text='Как поступить' scrollToID='howcanistudy' />
            </div>
          </div>

          <div className={cn(stls.form, altStyles && stls.altStyles)}>
            <OpenForm isHigherEducation={true} cta='Получить консультацию' />
          </div>
          <div className={stls.info}>
            <ProgramInfoAlt isHigherEducation={true} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroProgramHigher
