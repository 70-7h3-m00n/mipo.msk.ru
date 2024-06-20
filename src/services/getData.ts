import { GetStaticProps } from 'next'
import fetchFaq from '@/api/fetchFaq'
import fetchFaculty from '@/api/fetchFaculty'
import fetchTeacher from '@/api/fetchTeacher'
import fetchTypeProgram from '@/api/fetchTypeProgram'
import fetchStudentComment from '@/api/fetchStudentComment'
import fetchProgramCourses from '@/api/fetchProgramCourses'
import fetchTrustTraining from '@/api/fetchTrustTraining'
import fetchProgramCourse from '@/api/fetchProgramCourse'
import { wrapper } from '@/state/store'
import { setDataFaq } from '@/state/reducers/Faq'
import { setDataFaculty } from '@/state/reducers/Faculty'
import { setDataTypeProgram } from '@/state/reducers/TypeProgram'
import { setDataCourses } from '@/state/reducers/Courses'
import { setDataTeacher } from '@/state/reducers/Teacher'
import { setDataTrustTraining } from '@/state/reducers/TrustTraining'
import { setDataStudentComment } from '@/state/reducers/StudentComment'
import { setDataCourse } from '@/state/reducers/Course'

export enum PagesData {
  catalog = 'catalog',
  home = 'home',
  course = 'course',
}

const getData  = (page?: PagesData) => wrapper.getStaticProps(
  store => async ({ params})  => {
    const faculty = await fetchFaculty()
    const typeProgram = await fetchTypeProgram()
    const courses = await fetchProgramCourses()

    store.dispatch(setDataFaculty([...faculty]))
    store.dispatch(setDataTypeProgram([...typeProgram]))
    store.dispatch(setDataCourses([...courses]))

    if (page === PagesData.catalog) {
      const faq  = await fetchFaq()

      store.dispatch(setDataFaq([...faq]));
    }

    if (page === PagesData.home) {
      const faq  = await fetchFaq()
      const teacher = await fetchTeacher()
      const trustTraining  = await fetchTrustTraining()
      const studentComment = await fetchStudentComment()

      store.dispatch(setDataFaq([...faq]));
      store.dispatch(setDataTeacher([...teacher]))
      store.dispatch(setDataTrustTraining([...trustTraining]))
      store.dispatch(setDataStudentComment([...studentComment]))
    }

    if (page === PagesData.course) {
      if (!params || typeof params.id !== 'string') {
        return {
          notFound: true,
        }
      }

      const course = await fetchProgramCourse(params.id)
      const teacher = await fetchTeacher()
      const studentComment = await fetchStudentComment()

      store.dispatch(setDataCourse(course!))
      store.dispatch(setDataTeacher([...teacher]))
      store.dispatch(setDataStudentComment([...studentComment]))
    }

    return {
      props: {},
      revalidate: 2000
    }
  }
) satisfies GetStaticProps

export default getData
