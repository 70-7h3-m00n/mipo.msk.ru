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
import {
  PagesHigherProgram,
  PagesProgram,
  PagesPrograms
} from '@/components/pages'
import ProgramHigherContext from '@/context/highereducation/ProgramHigherContext'

const ProgramHigherEducation = ({ program }) => {
  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={` Все направления | ${companyName}`}
        description={truncate(
          `Профессиональная переподготовка - длинные программы для полного погружения в направление. Повышение квалификации - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routePrograms}`}
      />
      <ProgramHigherContext program={program}>
        <PagesHigherProgram ofType='profession' />
      </ProgramHigherContext>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('https://api.mipo.msk.ru/program-higher-educations')
  const data = await res.json()

  const paths = data.map(elem => ({
    params: {
      program: elem.slug,
      facultet: elem['faculties_higher_educations'][0].slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async context => {
  const { facultet, program } = context.params
  const oneProgram = await fetch(
    `https://api.mipo.msk.ru/program-higher-educations?slug=${program}`
  )

  const thisProgram = await oneProgram.json()
  const category = thisProgram[0]['faculties_higher_educations'][0]

  if (
    !thisProgram ||
    thisProgram.length === 0 ||
    !category ||
    category.length === 0 ||
    category.slug !== facultet ||
    thisProgram[0].slug !== program
  ) {
    return {
      notFound: true
    }
  }

  return {
    props: { program: thisProgram[0] }
  }
}

export default ProgramHigherEducation
