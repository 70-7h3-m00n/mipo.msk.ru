import CatalogCourses from '@/components/pages/CatalogCourses';
import getData, { PagesData } from '@/services/getData';

const CatalogPage = () => {
  return (
    <>
      <CatalogCourses />
    </>
  );
};

export const getStaticProps = getData(PagesData.catalog);

export default CatalogPage;
