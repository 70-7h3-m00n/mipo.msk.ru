import stls from '@/styles/components/sections/all/HeroPrograms.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramsContext from '@/context/programs/programsContext'
import Wrapper from '@/components/layout/Wrapper'
import { routeCourses, routeMBA, routeProfessions } from '@/data/routes'

const HeroPrograms = ({ ofType = null }) => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>Программы</h1>
        </div>
        <div className={stls.typeLinks}>
          <Link href={`${routeProfessions}/${slug}`}
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'profession'
              })}>
              <span className={stls.laptopdesktop}>
                Профессиональная&nbsp;переподготовка
              </span>
              <span className={stls.phonetablet}>ПП</span>
          </Link>
          <Link href={`${routeCourses}/${slug}`}
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'course'
              })}>
              <span className={stls.laptopdesktop}>
                Повышение&nbsp;квалификации
              </span>
              <span className={stls.phonetablet}>ПК</span>
          </Link>
          <Link href={`${routeMBA}/${slug}`}
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'mba'
              })}>
              <span className={stls.laptopdesktop}>MBA</span>
              <span className={stls.phonetablet}>MBA</span>
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
