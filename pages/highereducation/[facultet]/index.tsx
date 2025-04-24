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
import { PagesHigherFacultet, PagesPrograms } from '@/components/pages'
import { EducationProvider } from '@/context/highereducation/EducationContext'

const CatalogHigherPrograms = ({ facultets, programs, thisFacultet }) => {
  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`Повышение квалификации | ${companyName}`}
        description={truncate(
          `Повышение квалификации - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routeCourses}`}
      />
      <EducationProvider facultets={facultets} programs={programs}>
        <PagesHigherFacultet {...thisFacultet} />
      </EducationProvider>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://api.mipo.msk.ru/faculties-higher-educations')
  const data = await res.json()

  const paths = data.map(elem => ({
    params: { facultet: elem.slug }
  }))

  paths.push({
    params: { facultet: 'all' }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async context => {
  const { facultet } = context.params

  const oneFacultet = await fetch(
    `https://api.mipo.msk.ru/faculties-higher-educations?slug=${facultet}`
  )
  const resFacultet = await fetch(
    `https://api.mipo.msk.ru/faculties-higher-educations`
  )
  const resPrograms = await fetch(
    'https://api.mipo.msk.ru/program-higher-educations'
  )

  const thisFacultet = await oneFacultet.json()
  const dataFacultet = await resFacultet.json()
  const dataPrograms = await resPrograms.json()

  if (
    !dataFacultet ||
    dataFacultet.length === 0 ||
    ((!thisFacultet || thisFacultet.length === 0) && facultet !== 'all')
  ) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      facultets: dataFacultet,
      programs: dataPrograms,
      thisFacultet: facultet !== 'all' && thisFacultet.length > 0 ? thisFacultet[0] : null
    }
  }
}

export default CatalogHigherPrograms
