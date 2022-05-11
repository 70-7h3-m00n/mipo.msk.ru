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

type PagesProgramType = {
  ofType: TypeCategory
  reviews?: any // TODO: figure out the type
}

const PagesProgram = ({ ofType = null, reviews }: PagesProgramType) => {
  const { program } = useContext(ProgramContext)
  const atMba = program?.category?.type === 'mba'

  console.log(program)
  console.log(reviews)
  return (
    <>
      <HeroProgram />
      {/* <Desc /> */}
      <ForWhom />
      {atMba && <SectionMoreRelevant />}
      <WhatYouWillLearn />
      {atMba && <SectionHowProcessGoesAlt />}
      {!atMba && <HowProcessGoes />}
      {atMba && <SectionYourDiplomasAlt />}
      {atMba && <SectionOurGraduates />}
      {atMba && <SectionRelevantContentOnly />}
      {/* <YourDiploma ofType={ofType} /> */}
      <BriefProgramContents />
      <FullProgram />
      {/* {ofType !== 'course' &&
        program?.resumeTitle &&
        program?.entrySalary &&
        program?.resumeSkills && <YourResume />} */}
      {ofType !== 'course' && !atMba && <YourFutureJob />}
      {atMba && <SectionInternationalExperts />}

      {atMba ? <SectionGeneralTeachersAlt /> : <Teachers />}
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />
      {!atMba && <TrustedBy />}
      {atMba && <SectionTrustedByAlt />}
      {/* {atMba && <Reviews reviews={reviews} />} */}
      {atMba && (
        <SectionReviewsAlt
          programReviews={program?.reviews}
          reviews={reviews}
        />
      )}
      {/* <HelpWithEmployment /> */}
      <StudyCost />
      <Faq />
      {atMba && <SectionCorporateCourse />}
    </>
  )
}

export default PagesProgram
