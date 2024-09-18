import Reviews from '@/components/pages/Reviews';
import getData, { PagesData } from '@/services/getData';

const ReviewsPages = () => {
  return <Reviews />;
};

export const getStaticProps = getData(PagesData.reviews);

export default ReviewsPages;
