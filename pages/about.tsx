import About from '@/components/sections/all/About'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { handleGetStaticProps } from '@/helpers/index'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeAbout } from '@/data/routes'
import companyName from '@/data/companyName'

const AboutPage = ({ programs }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <NextSeo
        title={`Об институте | ${companyName}`}
        description={truncate(
          `Московский Институт Профессионального образования за современный подход в образовании. Мы постоянно берем обратную связь от работодателей и каждый месяц адаптируем учебные программы. Это в 12 раз быстрее обновления программы обучения в государственном ВУЗе!`,
          120
        )}
        canonical={`${routesFront.root}${routeAbout}`}
      />
      <About standalone />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/about' })

export default AboutPage
