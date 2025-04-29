import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeHome } from '@/data/routes'
import companyName from '@/data/companyName'
import {
  Hero,
  About,
  SectionStudyFields,
  TrustedBy,
  Cta,
  Reviews
} from '@/components/sections'
import Script from 'next/script'
import SliderCommon from '@/components/sections/new-common/SliderCommon'

const HomePage = ({ programs, reviews }) => {
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
      {/* <Programs withTitle withBtn atIndex /> */}
      <SectionStudyFields withTitle withBtn atIndex />
      {/* <WhyBother /> */}
      <About />
      <TrustedBy />
      {/* <HowProcessGoes /> */}
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      />
      <Reviews reviews={reviews} />
      {/* <Webinars /> */}
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/index' })

export default HomePage
