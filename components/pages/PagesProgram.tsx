import {
  HeroProgram,
  Desc,
  HowProcessGoes,
  SectionHowProcessGoesAlt,
  WhatYouWillLearn,
  ForWhom,
  SectionMoreRelevant,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  HelpWithEmployment,
  YourFutureJob,
  StudyCost,
  Faq,
  SectionCorporateCourse
} from '@/components/sections'
import { useContext } from 'react'
import ProgramContext from '@/context/program/programContext'
import { discount } from '@/data/price'
import { TypeCategory } from '@/types/index'

type PagesProgramType = {
  ofType: TypeCategory
}

const PagesProgram = ({ ofType = null }: PagesProgramType) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  return (
    <>
      <HeroProgram />
      {/* <Desc /> */}
      <ForWhom />
      {atMba && <SectionMoreRelevant />}
      <WhatYouWillLearn />
      {atMba && <SectionHowProcessGoesAlt />}
      {!atMba && <HowProcessGoes />}

      {/* <YourDiploma ofType={ofType} /> */}
      <BriefProgramContents />
      <FullProgram />
      {/* {ofType !== 'course' &&
        program?.resumeTitle &&
        program?.entrySalary &&
        program?.resumeSkills && <YourResume />} */}
      {ofType !== 'course' && <YourFutureJob />}
      <Teachers />
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />
      {/* <HelpWithEmployment /> */}
      <StudyCost />
      <Faq />
      {atMba && <SectionCorporateCourse />}
    </>
  )
}

export default PagesProgram
