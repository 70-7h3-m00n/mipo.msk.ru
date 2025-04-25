import { Faq } from '@/components/sections'
import { TypeCategory } from '@/types/index'
import { useRouter } from 'next/router'
import { useHigherProgramContext } from '@/context/highereducation/ProgramHigherContext'
import HeroProgramHigher from '../sections/hardereducation/HeroProgramHigher'
import WhyDoYouNeedLearningHigher from '../sections/hardereducation/WhyDoYouNeedLearningHigher'
import ForWhomHigher from '../sections/hardereducation/ForWhomHigher'
import InformationOnDirection from '../sections/hardereducation/InformationOnDirection'
import WhatYouWillLearnHigher from '../sections/hardereducation/WhatYouWillLearnHigher'
import AdmissionSteps from '../sections/hardereducation/AdmissionSteps'
import BriefProgramContentsHigher from '../sections/hardereducation/BriefProgramContentsHigher'
import DiplomasHigher from '../sections/hardereducation/DiplomasHigher'
import StudyCoastHigher from '../sections/hardereducation/StudyCoastHigher'
import FormSimpleBlock from '../forms/FormSimpleBlock'

type PagesProgramType = {
  ofType: TypeCategory
  reviews?: any // TODO: figure out the type
}

const PagesHigherProgram = ({ ofType = null, reviews }: PagesProgramType) => {
  const route = useRouter()
  const program = useHigherProgramContext()
  return (
    <>
      <HeroProgramHigher />
      <WhyDoYouNeedLearningHigher />
      <ForWhomHigher />
      <InformationOnDirection />
      <WhatYouWillLearnHigher />
      <AdmissionSteps backGroundColor='white' />
      <BriefProgramContentsHigher />
      <DiplomasHigher />
      <StudyCoastHigher />
      <FormSimpleBlock />
      <Faq isHigherEducation={true} />
    </>
  )
}

export default PagesHigherProgram
