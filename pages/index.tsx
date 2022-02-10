import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeHome } from '@/data/routes'
import companyName from '@/data/companyName'
import {
  Hero,
  WhyBother,
  About,
  HowProcessGoes,
  Programs,
  TrustedBy,
  Cta,
  Reviews,
  Webinars
} from '@/components/sections'

const HomePage = ({ programs, reviews }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <NextSeo
        title={`${companyName} | 
        Московский институт
        профессионального
        образования | Получи новую профессию или повысь квалификацию по своему нынешнему направлению дистанционно
        `}
        description={truncate(
          `✅ Можно вернуть 13% НДФЛ; ✅ Есть гос. аккредитация и сертификаты; ✅ Рассрочка от института Без переплат; ✅ Дистанционное обучение без отрыва от работы; ✅ Дипломы котируются по всему миру; ✅ Спикеры практики и имеют ученые степени`,
          120
        )}
        canonical={`${routesFront.root}${routeHome}`}
      />
      <Hero />
      <Programs withTitle withBtn atIndex />
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
