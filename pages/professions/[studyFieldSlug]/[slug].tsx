import {
  handleGetStaticProps,
  handleGetStaticPathsPrograms
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesProgram } from '@/components/pages'

const ProfessionPage = ({ programs, program, studyFieldSlug }) => {
  usePageHandleContext({
    programs,
    program,
    curProgramsType: 'profession',
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  return (
    <>
      <NextSeo
        title={`${program.title} | Переподготовка | ${companyName}`}
        description={truncate(program.description, 120)}
        canonical={`${routesFront.root}${routeProfessions}/${studyFieldSlug}/${program.slug}`}
      />
      <PagesProgram ofType={'profession'} />
    </>
  )
}

export const getStaticProps = async ({ params: { slug, studyFieldSlug } }) =>
  await handleGetStaticProps({
    page: '/programs',
    studyFieldSlug,
    slug,
    type: 'profession'
  })

// export async function getStaticProps({ params: { slug, studyFieldSlug } }) {
//   const programs = await fetchPrograms()
//   const program = getProgram({
//     data: programs,
//     ofType: 'profession',
//     slug
//   })

//   return {
//     props: {
//       programs,
//       program,
//       studyFieldSlug
//     },
//     revalidate: revalidate.default
//   }
// }

export const getStaticPaths = async () =>
  await handleGetStaticPathsPrograms({ type: '/profession' })

export default ProfessionPage
