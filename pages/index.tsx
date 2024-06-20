import HomePageHeader from '../src/components/Sections/HomePageHeader'
import Directions from '../src/components/Sections/Directions'
import PopularCourses from '../src/components/Sections/PopularCourses'
import PassingTraining from '../src/components/Sections/PassingTraining'
import TrustTraining from '../src/components/Sections/TrustTraining'
import TeachersMentors from '../src/components/Sections/TeachersMentors'
import StudentReviews from '../src/components/Sections/StudentReviews'
import Faq from '../src/components/Sections/FAQ'
import Payment from '../src/components/Sections/Payment'
import getData, { PagesData } from '../src/services/getData'
import { useAppSelector } from '@/state/hooks'

export const getStaticProps = getData(PagesData.home)

const HomePage = () => {
  const { studentCommentData} = useAppSelector(state => state.studentCommentReducer)
  const { faqData} = useAppSelector(state => state.faqReducer)

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
  )
}

export default HomePage
