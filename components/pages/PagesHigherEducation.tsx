import { TypeCategory } from '@/types/index'
import HeroSection from '@/components/sections/hardereducation/HeroSection'
import Factoids from '@/components/sections/hardereducation/Factoids'
import { SectionStudyFields } from '@/components/sections'
import Faculties from '@/components/sections/hardereducation/Faculties'
import { FormAlpha } from '../forms'
import FormSimpleBlock from '../forms/FormSimpleBlock'
import ProgramsHigherEducation from '../sections/hardereducation/ProgramsHigherEducation'
import TextBlockWithSlider from '../sections/hardereducation/TextBlockWithSlider'

type PagesProgramsType = {
  ofType?: TypeCategory
}

const PagesPrograms = ({ ofType }: PagesProgramsType) => {
  return (
    <>
      <HeroSection />
      <Factoids />
      <Faculties />
      <FormSimpleBlock />
      <ProgramsHigherEducation />
      <TextBlockWithSlider />
      <FormSimpleBlock isBlackBackground={true} />
    </>
  )
}

export default PagesPrograms
