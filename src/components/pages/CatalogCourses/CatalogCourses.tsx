import Faq from '../../Sections/FAQ'
import BlockHelp from '../../BlockHelp'
import Navigation from '../../Sections/Navigation'
import { useAppSelector } from '@/state/hooks'

export const CatalogCourses = () => {
  const { faqData } = useAppSelector(state => state.faqReducer)

  return (
    <>
      <Navigation />

      <section className={'container'} >
        <BlockHelp />
      </section>

      <Faq faqData={faqData} />
    </>
  )
}
