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
import { useContext, useEffect, useState } from 'react'
import ProgramContext from '@/context/program/programContext'
import { discount } from '@/data/price'
import { TypeCategory } from '@/types/index'
import { IconGeneralTextDecorativeUnderline } from '@/components/icons'
import CardMshpp from '@/components/cards/CardMSHPP'
import { useRouter } from 'next/router'
import Script from 'next/script'
import HeroProgramPhycho from '@/components/sections/cource-phycho/HeroProgramPhycho'
import WhyDoYouNeedLearningPhycho from '../sections/cource-phycho/WhyDoYouNeedLearningPhycho'
import ForWhomPhyco from '../sections/cource-phycho/ForWhomPhyco'
import WhatYouWillLearnPhycho from '../sections/cource-phycho/WhatYouWillLearnPhycho'
import WeWillSupportYou from '../sections/cource-phycho/WeWillSupportYou'
import DiplomasPhycho from '../sections/cource-phycho/DiplomasPhycho'
import FullProgramPsycho from '../sections/cource-phycho/BriefProgramContentsPhycho'
import BriefProgramContentsPhycho from '../sections/cource-phycho/BriefProgramContentsPhycho'
import HowCanKnowledgeBeApplied from '../sections/cource-phycho/HowCanKnowledgeBeApplied'
import TeachersPhycho from '../sections/cource-phycho/TeachersPhycho'
import PortfolioAfterStudy from '../sections/cource-phycho/PortfolioAfterStudy'
import CalculatorPhycho from '../sections/cource-phycho/CalculatorPhycho'
import PopupTrigger from '../general/PopupTrigger'
import StudyCoastPhycho from '../sections/cource-phycho/StudyCoastPhycho'
import LineToScroll from '../sections/cource-phycho/LineToScroll'

type PagesProgramType = {
  ofType: TypeCategory
  reviews?: any // TODO: figure out the type
}

const PagesProgram = ({ ofType = null, reviews }: PagesProgramType) => {
  const route = useRouter()
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const [nameSlugForTariff, setNameSlugForTariff] = useState<
    string | undefined
  >()

  const [isForPhychology, setIsForPhychology] = useState(false)
  const [isForOtherTariff, setIsForOtherTariff] = useState(false)

  useEffect(() => {
    if (!program && !program?.study_field?.slug) return

    const foundPhychologyTariff = [
      'Psychology',
      'prakticheskaya-psihologiya-m-sh-pp',
      'obshhaya-psihologiya'
    ].find(field => {
      if (field === program.study_field?.slug) {
        setNameSlugForTariff('phycho')
        return true
      }
      return false
    })

    setIsForPhychology(() => !!program && !!foundPhychologyTariff)

    const foundOtherTariff = ['Marketing', 'jekonomika', 'Management'].find(field => {
      if (field === program.study_field?.slug) {
        setNameSlugForTariff(field)
        return true
      }
      return false
    })

    setIsForOtherTariff(!!program && !!foundOtherTariff)
  }, [program])

  return (
    <>
      {isForPhychology && <LineToScroll />}
      {isForPhychology ? <HeroProgramPhycho /> : <HeroProgram />}
      {isForPhychology && <WhyDoYouNeedLearningPhycho />}
      {/* {isMshppBlock && <CardMshpp />} */}

      {isForPhychology ? <ForWhomPhyco /> : <ForWhom />}
      {isForPhychology && <WhatYouWillLearnPhycho />}
      {altStyles && !isForPhychology && <SectionMoreRelevant />}
      {!isForPhychology && <WhatYouWillLearn />}
      {altStyles && (
        <SectionHowProcessGoesAlt isForPhychology={isForPhychology} />
      )}
      {isForPhychology && <WeWillSupportYou />}
      {isForPhychology && <DiplomasPhycho />}
      {!altStyles && <HowProcessGoes />}
      {altStyles && !isForPhychology && <SectionYourDiplomasAlt />}

      {isForPhychology && <BriefProgramContentsPhycho />}

      {altStyles && !isForPhychology && <SectionOurGraduates />}
      {altStyles && !isForPhychology && <SectionRelevantContentOnly />}

      {!isForPhychology && <BriefProgramContents />}
      <FullProgram isForPhychology={isForPhychology} />
      {isForPhychology && <HowCanKnowledgeBeApplied />}
      {isForPhychology && <TeachersPhycho />}
      {isForPhychology && <PortfolioAfterStudy />}
      {isForPhychology && <CalculatorPhycho />}
      {isForPhychology && (
        <Cta
          title='Начните обучаться со скидкой'
          desc={
            <>
              Забронируйте программу по спеццене —{' '}
              <span className={stls.highlightFw}>
                со скидкой <span className={stls.highlightC}>65%</span>
                <IconGeneralTextDecorativeUnderline
                  classNames={[stls.IconGeneralTextDecorativeUnderline]}
                />
              </span>
            </>
          }
          isForPhychology
          cta='signUpForCourse'
        />
      )}
      {ofType !== 'course' && !isForPhychology && <YourFutureJob />}
      {altStyles && !isForPhychology && <SectionInternationalExperts />}

      {altStyles && !isForPhychology ? (
        <SectionGeneralTeachersAlt />
      ) : (
        !isForPhychology && <Teachers />
      )}

      {!isForPhychology && (
        <Cta
          title={'Начните обучаться со скидкой'}
          desc={
            altStyles ? (
              <>
                Забронируйте программу по спеццене —{' '}
                <span className={stls.highlightFw}>
                  со скидкой{' '}
                  {/* <span className={stls.highlightC}>{discount.substring(1)}</span> */}
                  <span className={stls.highlightC}>65%</span>
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
      )}

      {!altStyles && !isForPhychology && <TrustedBy />}
      {altStyles && !isForPhychology && <SectionTrustedByAlt />}

      {altStyles && !isForPhychology && (
        <SectionReviewsAlt
          programReviews={program?.reviews}
          reviews={reviews}
        />
      )}
      {isForPhychology || isForOtherTariff ? (
        <StudyCoastPhycho
          isForOtherTariff={isForOtherTariff}
          nameSlugForTariff={nameSlugForTariff}
        />
      ) : (
        <StudyCost />
      )}

      <Faq isForPhychology />
      {altStyles && <SectionCorporateCourse />}

      <Script
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
      />
    </>
  )
}

export default PagesProgram
