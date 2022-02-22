import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import {
  handleGetStaticProps,
  handleGetStaticPathsStudyFields
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routePrograms } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProgramsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const { studyFields } = useContext(ProgramsContext)

  usePageHandleContext({
    programs,
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Программы'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Все направления | ${companyName}`}
        description={truncate(
          `Профессиональная переподготовка - длинные программы для полного погружения в направление. Повышение квалификации - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routePrograms}/${studyFieldSlug}`}
      />
      <PagesPrograms />
    </>
  )
}

export const getStaticProps = async ({ params: { studyFieldSlug } }) =>
  await handleGetStaticProps({ page: '/programs', studyFieldSlug })

export const getStaticPaths = async () =>
  await handleGetStaticPathsStudyFields()

export default ProgramsStudyFieldPage
