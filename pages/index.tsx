import { handleGetStaticProps } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { routeHome } from '@/data/routes'
import companyName from '@/data/companyName'
import {
  Hero,
  WhyBother,
  About,
  HowProcessGoes,
  Programs,
  TrustedBy,
  Cta,
  Reviews,
  Webinars
} from '@/components/sections'

const HomePage = ({ programs, reviews }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  console.log(programs)
  console.log(reviews)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`${companyName} | Онлайн-институт психологии | Освойте востребованную профессию психолога или повысьте квалификацию вместе с нами
        `}
        description={truncate(
          `✅ Самые востребованные направления; ✅ Есть гос. аккредитация и сертификаты; ✅ Помощь в трудоустройстве; ✅ Онлайн обучение; ✅ Дипломы котируются по всему миру; ✅ Спикеры практики и имеют ученые степени`,
          120
        )}
        canonical={`${routesFront.root}${routeHome}`}
      />
      <Hero />
      <Programs withTitle withBtn />
      <WhyBother />
      <About />
      <TrustedBy />
      <HowProcessGoes />
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      />
      <Reviews reviews={reviews} />
      {/* <Webinars /> */}
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/index' })

export default HomePage
