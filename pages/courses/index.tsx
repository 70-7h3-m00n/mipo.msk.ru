import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeCourses } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const CoursesPage = ({ programs }) => {
  usePageHandleContext({ programs, curProgramsType: 'course' })

  return (
    <>
      <NextSeo
        title={`Повышение квалификации | ${companyName}`}
        description={truncate(
          `Повышение квалификации - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routeCourses}`}
      />
      <PagesPrograms ofType='course' />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/programs' })

export default CoursesPage
