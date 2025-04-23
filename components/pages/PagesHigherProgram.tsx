import stls from '@/styles/components/pages/PagesProgram.module.sass'
import {
  SectionHowProcessGoesAlt,
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
import { discount } from '@/data/price'
import { TypeCategory } from '@/types/index'
import { IconGeneralTextDecorativeUnderline } from '@/components/icons'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { SALE_VALUE } from '@/lib/constant'
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
import FaqAnswer from '../general/FaqAnswer'

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
      <Faq />

      {/* <Script
        id='xcntmyAsync'
        type='text/javascript'
        strategy='afterInteractive'
        defer
        dangerouslySetInnerHTML={{
          __html: `
                var xcnt_product_id = '${program?.id ? program.id : ''}';
                  (function(d){
                  var xscr = d.createElement( 'script' ); 
                  xscr.async = 1;
                   xscr.src = '//x.cnt.my/async/track/?r=' + Math.random(); 
                  var x = d.getElementById( 'xcntmyAsync' ); 
                  x.parentNode.insertBefore( xscr, x );
                  })(document);
              `
        }}
      /> */}
    </>
  )
}

export default PagesHigherProgram
