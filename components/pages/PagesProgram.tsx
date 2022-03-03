import {
  HeroProgram,
  Desc,
  HowProcessGoes,
  WhatYouWillLearn,
  ForWhom,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  HelpWithEmployment,
  YourFutureJob,
  StudyCost,
  Faq
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

  return (
    <>
      <HeroProgram />
      {/* <Desc /> */}
      <ForWhom />
      <WhatYouWillLearn />
      <HowProcessGoes />
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
    </>
  )
}

export default PagesProgram
