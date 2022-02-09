import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import {
  handleGetStaticPathsStudyFields,
  handleGetStaticProps
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeCourses } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const CoursesStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { studyFields } = useContext(ProgramsContext)

  usePageHandleContext({
    programs,
    curProgramsType: 'course',
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Повышение квалификации'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Повышение квалификации | ${companyName}`}
        description={truncate(
          `Повышение квалификации - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routeCourses}/${studyFieldSlug}`}
      />
      <PagesPrograms ofType='course' />
    </>
  )
}

export const getStaticProps = async ({ params: { studyFieldSlug } }) =>
  await handleGetStaticProps({ page: '/programs', studyFieldSlug })

export const getStaticPaths = async () =>
  await handleGetStaticPathsStudyFields({ type: '/course' })

export default CoursesStudyFieldPage
