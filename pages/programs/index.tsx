import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routePrograms } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProgramsPage = ({ programs }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <NextSeo
        title={`Все программы | ${companyName}`}
        description={truncate(
          `Переподготовка - длинные программы для полного погружения в направление. Повышение квалификации - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routePrograms}`}
      />
      <PagesPrograms />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/programs' })

export default ProgramsPage
