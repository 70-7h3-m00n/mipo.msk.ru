import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PagesNewProgram from '@/components/pages/PagesNewProgram'
import fetchCourse from '../../api/fetchCourse'
import fetchPathsCourses from '../../api/fetchPathsCourses'

interface PageCourseProps {
  course: Awaited<ReturnType<typeof fetchCourse>>
}

const NewCoursePage: NextPage<PageCourseProps> = ({course}) => {
  return (<PagesNewProgram course={course} />)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const course = await fetchCourse(String(params!.newCourse))
  return {
    props: {
      course
    }
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const newCourse = await fetchPathsCourses()

  return {
    paths: newCourse,
    fallback: 'blocking'
  }
}

export default NewCoursePage
