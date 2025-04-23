import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routePrograms } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesHigherEducation } from '@/components/pages'
import { EducationProvider } from '@/context/highereducation/EducationContext'

const ProgramsPage = ({ facultets, programs }) => {
  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`Все программы | ${companyName}`}
        description={truncate(
          `Профессиональная переподготовка - длинные программы для полного погружения в направление. Повышение квалификации - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routePrograms}`}
      />
      <EducationProvider facultets={facultets} programs={programs}>
        <PagesHigherEducation />
      </EducationProvider>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.mipo.msk.ru/faculties-higher-educations')
  const resPrograms = await fetch(
    'https://api.mipo.msk.ru/program-higher-educations'
  )

  const facultets = await res.json()
  const programs = await resPrograms.json()

  return { props: { facultets, programs } }
}

export default ProgramsPage
