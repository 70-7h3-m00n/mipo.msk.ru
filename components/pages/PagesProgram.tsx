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
import Script from 'next/script'

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

  const isMshppBlock = route.asPath.includes('prakticheskaya-psihologiya-m-sh-pp')

  return (
    <>
      <Script id="xcntmyAsync"
              type="text/javascript"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{__html: `
                var xcnt_product_id = '${program.id}';
                  (function(d){
                  var xscr = d.createElement( 'script' ); 
                  xscr.async = 1;
                   xscr.src = '//x.cnt.my/async/track/?r=' + Math.random(); 
                  var x = d.getElementById( 'xcntmyAsync' ); 
                  x.parentNode.insertBefore( xscr, x );
                  })(document);
              `}}
      />
      <HeroProgram />
      {/* <Desc /> */}
      {isMshppBlock && <CardMshpp />}
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
