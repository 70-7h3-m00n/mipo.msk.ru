import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProfessionsPage = ({ programs }) => {
  usePageHandleContext({ programs, curProgramsType: 'profession' })

  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`Профессиональная переподготовка | ${companyName}`}
        description={truncate(
          `Профессиональная переподготовка - длинные программы для полного погружения в направление`,
          120
        )}
        canonical={`${routesFront.root}${routeProfessions}`}
      />
      <PagesPrograms ofType='profession' />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/programs' })

export default ProfessionsPage
