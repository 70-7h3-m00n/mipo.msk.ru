import Teachers from '@/components/pages/Teachers';
import getData, { PagesData } from '@/services/getData';

const TeachersPage = () => {
  return <Teachers />;
};

export const getStaticProps = getData(PagesData.teachers);

export default TeachersPage;
