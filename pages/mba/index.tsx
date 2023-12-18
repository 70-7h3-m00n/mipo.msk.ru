import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeMBA } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const MBAPage = ({ programs }) => {
  usePageHandleContext({ programs, curProgramsType: 'mba' })

  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`MBA | ${companyName}`}
        description={truncate(`${companyName} MBA`, 120)}
        canonical={`${routesFront.root}${routeMBA}`}
      />
      <PagesPrograms ofType='mba' />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/programs' })

export default MBAPage
