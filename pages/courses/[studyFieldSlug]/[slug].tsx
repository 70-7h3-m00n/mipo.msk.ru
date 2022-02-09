import {
  handleGetStaticPathsPrograms,
  handleGetStaticProps
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeCourses } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesProgram } from '@/components/pages'

const CoursePage = ({ programs, program, studyFieldSlug }) => {
  usePageHandleContext({
    programs,
    program,
    curProgramsType: 'course',
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  return (
    <>
      <NextSeo
        title={`${program.title} | Повышение квалификации | ${companyName}`}
        description={truncate(program.description, 120)}
        canonical={`${routesFront.root}${routeCourses}/${studyFieldSlug}/${program.slug}`}
      />
      <PagesProgram ofType={'course'} />
    </>
  )
}

export const getStaticProps = async ({ params: { slug, studyFieldSlug } }) =>
  await handleGetStaticProps({
    page: '/programs',
    studyFieldSlug,
    slug,
    type: 'course'
  })

export const getStaticPaths = async () =>
  await handleGetStaticPathsPrograms({ type: '/course' })

export default CoursePage
