import HomePageHeader from '../src/components/Sections/HomePageHeader'
import Directions from '../src/components/Sections/Directions'
import PopularCourses from '../src/components/Sections/PopularCourses'
import PassingTraining from '../src/components/Sections/PassingTraining'
import TrustTraining from '../src/components/Sections/TrustTraining'
import TeachersMentors from '../src/components/Sections/TeachersMentors'
import StudentReviews from '../src/components/Sections/StudentReviews'
import Faq from '../src/components/Sections/FAQ'
import Payment from '../src/components/Sections/Payment'

const HomePage = () => {

  return (
    <>
      <HomePageHeader />
      <Directions />
      <PopularCourses />
      <PassingTraining />
      <TrustTraining />
      <TeachersMentors />
      <StudentReviews />
      <Payment />
      <Faq />
    </>
  )
}


export default HomePage
