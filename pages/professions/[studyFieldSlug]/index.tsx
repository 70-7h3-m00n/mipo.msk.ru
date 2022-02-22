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
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProfessionsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { studyFields } = useContext(ProgramsContext)

  usePageHandleContext({
    programs,
    curProgramsType: 'profession',
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Профессиональная переподготовка'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Профессиональная переподготовка | ${companyName}`}
        description={truncate(
          `Профессиональная переподготовка - длинные программы для полного погружения в направление`,
          120
        )}
        canonical={`${routesFront.root}${routeProfessions}/${studyFieldSlug}`}
      />
      <PagesPrograms ofType='profession' />
    </>
  )
}

export const getStaticProps = async ({ params: { studyFieldSlug } }) =>
  await handleGetStaticProps({ page: '/programs', studyFieldSlug })

export const getStaticPaths = async () =>
  await handleGetStaticPathsStudyFields({ type: '/profession' })

export default ProfessionsStudyFieldPage
