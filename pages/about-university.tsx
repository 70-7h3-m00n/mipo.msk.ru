import AboutUniversity from '@/components/pages/AboutUniversity';
import getData, { PagesData } from '@/services/getData';

const AboutUniversityPage = () => {
  return <AboutUniversity />;
};

export const getStaticProps = getData(PagesData.aboutUniversity);

export default AboutUniversityPage;
