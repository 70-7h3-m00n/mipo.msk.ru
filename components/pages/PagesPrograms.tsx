import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm
} from '@/components/sections'
import { TypeCategory } from '@/types/index'

type PagesProgramsType = {
  ofType?: TypeCategory | any
}

const PagesPrograms = ({ ofType }: PagesProgramsType) => {
  return (
    <>
      <HeroPrograms ofType={ofType} />
      <FilterSearch ofType={ofType} />
      <Programs ofType={ofType} withQty threerow withFilters />
      <ContactForm />
    </>
  )
}

export default PagesPrograms
