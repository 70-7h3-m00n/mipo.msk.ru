import stls from '@/styles/components/pages/PagesProgram.module.sass'
import {
  HeroProgram,
  Desc,
  HowProcessGoes,
  SectionHowProcessGoesAlt,
  SectionYourDiplomasAlt,
  SectionOurGraduates,
  SectionRelevantContentOnly,
  WhatYouWillLearn,
  ForWhom,
  SectionMoreRelevant,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  TrustedBy,
  SectionTrustedByAlt,
  Reviews,
  SectionReviewsAlt,
  SectionInternationalExperts,
  Teachers,
  SectionGeneralTeachersAlt,
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
import { IconGeneralTextDecorativeUnderline } from '@/components/icons'
import CardMshpp from '@/components/cards/CardMSHPP'
import { useRouter } from 'next/router'

type PagesProgramType = {
  ofType: TypeCategory | any
  reviews?: any // TODO: figure out the type
}

const PagesProgram = ({ ofType = null, reviews }: PagesProgramType) => {
  const route = useRouter()

  const isMshppBlock = route.asPath.includes('prakticheskaya-psihologiya-m-sh-pp')

  return (
    <>
      <HeroProgram />
      {/* <Desc /> */}
      {isMshppBlock && <CardMshpp />}
      <ForWhom />
      <WhatYouWillLearn />
      {/* <YourDiploma ofType={ofType} /> */}
      <BriefProgramContents />
      <FullProgram />
      {/* {ofType !== 'course' &&
        program?.resumeTitle &&
        program?.entrySalary &&
        program?.resumeSkills && <YourResume />} */}
    </>
  )
}

export default PagesProgram
