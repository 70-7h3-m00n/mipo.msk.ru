import Webinars from '@/components/pages/Webinars';
import getData, { PagesData } from '@/services/getData';

const WebinarsPage = () => {
  return <Webinars />;
};

export const getStaticProps = getData(PagesData.webinars);

export default WebinarsPage;
