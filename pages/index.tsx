import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeHome } from '@/data/routes'
import companyName from '@/data/companyName'
import { About, TrustedBy, Cta } from '@/components/sections'
import Script from 'next/script'
import SliderCommon from '@/components/sections/new-common/SliderCommon'
import Directions from '@/components/sections/new-common/Directions'
import PopularProgram from '@/components/sections/new-common/PopularProgram'
import DiplomasHigher from '@/components/sections/hardereducation/DiplomasHigher'
import FormSimpleBlock from '@/components/forms/FormSimpleBlock'
import NewReviews from '@/components/sections/new-common/NewReviews'
import DiplomasCommon from '@/components/sections/new-common/DiplomasCommon'

const HomePage = ({ programs, reviews, facultets }) => {
  usePageHandleContext({ programs })

  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`${companyName} | Получи новую профессию или повысь квалификацию по своему нынешнему направлению дистанционно
        `}
        description={truncate(
          `✅ Можно вернуть 13% НДФЛ; ✅ Есть гос. лицензия и аккредитации; ✅ Рассрочка от института Без переплат; ✅ Дистанционное обучение без отрыва от работы; ✅ Дипломы котируются по всему миру; ✅ Ведущие эксперты, преподаватели-практики`,
          120
        )}
        canonical={`${routesFront.root}${routeHome}`}
      />
      <Script
        id='xcntmyAsync'
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
          (function(d){
          var xscr = d.createElement( 'script' ); 
          xscr.async = 1; 
          xscr.src = '//x.cnt.my/async/track/?r=' + Math.random(); 
          var x= d.getElementById( 'xcntmyAsync' ); 
          x.parentNode.insertBefore( xscr, x );
          })(document);
        `
        }}
      />

      {/* <Hero /> */}
      <SliderCommon />
      <Directions />
      <PopularProgram />
      {/* <Programs withTitle withBtn atIndex /> */}
      {/* <SectionStudyFields withTitle withBtn atIndex /> */}
      {/* <WhyBother /> */}
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      />

      <About />
      <DiplomasCommon />
      <TrustedBy />
      <NewReviews reviews={reviews} />
      {/* <Reviews reviews={reviews} /> */}
      <FormSimpleBlock />

      {/* <HowProcessGoes /> */}
      {/* <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      /> */}

      {/* <Webinars /> */}
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/index' })

export default HomePage
