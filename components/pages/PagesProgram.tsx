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

type PagesProgramType = {
  ofType: TypeCategory
  reviews?: any // TODO: figure out the type
}

const PagesProgram = ({ ofType = null, reviews }: PagesProgramType) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <>
      <HeroProgram />
      {/* <Desc /> */}
      <ForWhom />
      {altStyles && <SectionMoreRelevant />}
      <WhatYouWillLearn />
      {altStyles && <SectionHowProcessGoesAlt />}
      {!altStyles && <HowProcessGoes />}
      {altStyles && <SectionYourDiplomasAlt />}
      {altStyles && <SectionOurGraduates />}
      {altStyles && <SectionRelevantContentOnly />}
      {/* <YourDiploma ofType={ofType} /> */}
      <BriefProgramContents />
      <FullProgram />
      {/* {ofType !== 'course' &&
        program?.resumeTitle &&
        program?.entrySalary &&
        program?.resumeSkills && <YourResume />} */}
      {ofType !== 'course' && !altStyles && <YourFutureJob />}
      {altStyles && <SectionInternationalExperts />}

      {altStyles ? <SectionGeneralTeachersAlt /> : <Teachers />}
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={
          altStyles ? (
            <>
              Забронируйте программу по спеццене —{' '}
              <span className={stls.highlightFw}>
                со скидкой{' '}
                <span className={stls.highlightC}>{discount.substring(1)}</span>
                <IconGeneralTextDecorativeUnderline
                  classNames={[stls.IconGeneralTextDecorativeUnderline]}
                />
              </span>
            </>
          ) : (
            `Забронируйте программу по спеццене — со скидкой ${discount.substring(
              1
            )}`
          )
        }
        cta={altStyles ? 'getProgram' : 'reserve'}
      />
      {!altStyles && <TrustedBy />}
      {altStyles && <SectionTrustedByAlt />}
      {/* {altStyles && <Reviews reviews={reviews} />} */}
      {altStyles && (
        <SectionReviewsAlt
          programReviews={program?.reviews}
          reviews={reviews}
        />
      )}
      {/* <HelpWithEmployment /> */}
      <StudyCost />
      <Faq />
      {altStyles && <SectionCorporateCourse />}
    </>
  )
}

export default PagesProgram
