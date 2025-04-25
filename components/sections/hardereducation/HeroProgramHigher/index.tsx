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
import { BtnBorderBlack } from '@/components/btns'
import { OpenForm } from '@/components/forms'
import Image from 'next/image'
import { useHigherProgramContext } from '@/context/highereducation/ProgramHigherContext'
import UniversalProgramInfo from '@/components/program/UniversalProgramInfo'
import Link from 'next/link'

const HeroProgramHigher = () => {
  const program = useHigherProgramContext()

  const rootClassNames = cn(stls.container, selectors.sectionHero)

  const altStyles = true

  const [openFullText, setOpenFullText] = useState<boolean>(false)

  return (
    <section className={rootClassNames}>
      <Wrapper>
        <div className={cn(stls.top, stls.gridTemplate)}>
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
              <ProgramLabel color='black' text='Онлайн-бакалавриат' />
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

              <BtnBorderBlack text='Как поступить' scrollToID='howcanistudy' />
            </div>
          </div>

          <div className={cn(stls.form, altStyles && stls.altStyles)}>
            <div className={stls.giftPictureContainer}>
              <div className={stls.giftPicture}>
                <Image
                  src='/assets/imgs/new-course/gift.png'
                  alt='Ветка'
                  layout='fill'
                />
              </div>
            </div>

            <OpenForm isHigherEducation={true} cta='Получить консультацию'/>
          </div>
          <div className={stls.info}>
            <ProgramInfoAlt isHigherEducation={true}/>
          </div>
        </div>
      </Wrapper>
      <div className={stls.treePictureContainer}>
        <div className={stls.treePicture}>
          <Image
            src='/assets/imgs/hardereducation/bgElipses.png'
            alt='Фон'
            layout='fill'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroProgramHigher
