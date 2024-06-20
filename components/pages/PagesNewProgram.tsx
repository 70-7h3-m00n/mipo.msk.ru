import styles from '@/styles/components/pages/PagesNewProgram.module.sass'
import HeroNewProgram from '@/components/sections/new-course/HeroNewProgram'
import CardDiscount from '@/components/cards/CardDiscount'
import DescriptionProgram from '@/components/sections/new-course/DescriptionProgram'
import VacanciesProfession from '@/components/sections/new-course/VacanciesProfession'
import WhoIsProgram from '@/components/sections/new-course/WhoIsProgram'
import WeTookCare from '@/components/sections/new-course/WeTookCare'
import Study from '@/components/sections/new-course/Study'
import ScrollProfession from '@/components/sections/new-course/ScrollProfession'
import { SectionYourDiplomasAlt } from '@/components/sections'
import TrainingWorks from '@/components/sections/new-course/TrainingWorks'
import TrainingProgram from '@/components/sections/new-course/TrainingProgram'
import ProgramTeachers from '@/components/sections/new-course/ProgramTeachers'
import YourResume from '@/components/sections/new-course/YourResume'
import TrainEmployees from '@/components/sections/new-course/TrainEmployees'
import CurrentContent from '@/components/sections/new-course/CurrentContent'
import FaqNew from '@/components/sections/new-course/FAQNew'
import SignUpProgram from '@/components/sections/new-course/SignUpProgram'
import fetchCourse from '../../api/fetchCourse'

interface Props {
    courses: Awaited<ReturnType<typeof fetchCourse>>
}

const PagesNewProgram = ({courses}: Props) => {
  return (
    <div className={styles.wrapper}>
      <HeroNewProgram data={courses} />
      <CardDiscount />
      <DescriptionProgram data={courses} />
      <VacanciesProfession data={courses} />
      <WhoIsProgram data={courses} />
      <WeTookCare />
      <Study data={courses} />
      <ScrollProfession />
      <SectionYourDiplomasAlt />
      <TrainingWorks />
      <TrainingProgram data={courses} />
      <ProgramTeachers data={courses} />
      <YourResume data={courses} />
      <TrainEmployees data={courses} />
      <CurrentContent />
      <SignUpProgram data={courses} />
      <FaqNew />
    </div>
  )
}

export default PagesNewProgram
