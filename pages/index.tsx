import Directions from '@/components/Sections/Directions';
import Faq from '@/components/Sections/FAQ';
import HomePageHeader from '@/components/Sections/HomePageHeader';
import PassingTraining from '@/components/Sections/PassingTraining';
import Payment from '@/components/Sections/Payment';
import PopularCourses from '@/components/Sections/PopularCourses';
import StudentReviews from '@/components/Sections/StudentReviews';
import TeachersMentors from '@/components/Sections/TeachersMentors';
import TrustTraining from '@/components/Sections/TrustTraining';
import getData, { PagesData } from '@/services/getData';
import { useAppSelector } from '@/state/hooks';

export const getStaticProps = getData(PagesData.home);

const HomePage = () => {
  const { studentCommentData } = useAppSelector(
    state => state.studentCommentReducer
  );
  const { faqData } = useAppSelector(state => state.faqReducer);

  return (
    <>
      <HomePageHeader />
      <Directions />
      <PopularCourses />
      <PassingTraining />
      <TrustTraining />
      <TeachersMentors />
      <StudentReviews studentCommentData={studentCommentData} />
      <Payment />
      <Faq faqData={faqData} />
    </>
  );
};

export default HomePage;
