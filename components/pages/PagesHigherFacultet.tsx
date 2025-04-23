
import FormSimpleBlock from '../forms/FormSimpleBlock'
import UniversalProgramInfo from '../program/UniversalProgramInfo'
import AdmissionSteps from '../sections/hardereducation/AdmissionSteps'
import AreasOfStudy from '../sections/hardereducation/AreasOfStudy'
import HeroSectionFacultet from '../sections/hardereducation/HeroSectionFacultet'
import TextBlockWithSlider from '../sections/hardereducation/TextBlockWithSlider'

type Props = {
  name?: string
  slug?: string
  image?: string
}

const PagesHigherFacultet = ({ name, slug, image }: Props) => {
  return (
    <>
      <HeroSectionFacultet name={name} />
      <UniversalProgramInfo/>
      <AreasOfStudy nameFacultet={name}/>
      <AdmissionSteps />
      <TextBlockWithSlider />
      <FormSimpleBlock />
    </>
  )
}

export default PagesHigherFacultet
