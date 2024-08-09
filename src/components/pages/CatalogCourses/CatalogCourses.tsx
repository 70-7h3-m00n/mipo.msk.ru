import BlockHelp from '@/components/BlockHelp';
import Faq from '@/components/Sections/FAQ';
import Navigation from '@/components/Sections/Navigation';
import { useAppSelector } from '@/state/hooks';

export const CatalogCourses = () => {
  const { faqData } = useAppSelector(state => state.faqReducer);

  return (
    <>
      <Navigation />

      <section className={'container'}>
        <BlockHelp />
      </section>

      <Faq faqData={faqData} />
    </>
  );
};
