import { TypeCategory } from '@/types/index'
import HeroSection from '@/components/sections/hardereducation/HeroSection'
import Factoids from '@/components/sections/hardereducation/Factoids'
import { SectionStudyFields } from '@/components/sections'
import Faculties from '@/components/sections/hardereducation/Faculties'

type PagesProgramsType = {
  ofType?: TypeCategory
}

const PagesPrograms = ({ ofType }: PagesProgramsType) => {
  return (
    <>
      <HeroSection />
      <Factoids />
      <Faculties />
      <SectionStudyFields withTitle withBtn atIndex />
    </>
  )
}

export default PagesPrograms
