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
import { routeMBA } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const MBAStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { studyFields } = useContext(ProgramsContext)

  usePageHandleContext({
    programs,
    curProgramsType: 'mba',
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'MBA'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | MBA | ${companyName}`}
        description={truncate(`${companyName} MBA`, 120)}
        canonical={`${routesFront.root}${routeMBA}/${studyFieldSlug}`}
      />
      <PagesPrograms ofType='mba' />
    </>
  )
}

export const getStaticProps = async ({ params: { studyFieldSlug } }) =>
  await handleGetStaticProps({ page: '/programs', studyFieldSlug })

export const getStaticPaths = async () =>
  await handleGetStaticPathsStudyFields({ type: '/mba' })

export default MBAStudyFieldPage
