import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PagesNewProgram from '@/components/pages/PagesNewProgram'
import fetchCourse from '../../api/fetchCourse'
import fetchPathsCourses from '../../api/fetchPathsCourses'

interface PageCourseProps {
  course: Awaited<ReturnType<typeof fetchCourse>>
}

const NewCoursePage: NextPage<PageCourseProps> = ({course}) => {
  return (<PagesNewProgram courses={course} />)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.newCourse !== 'string') {
    return {
      notFound: true,
    };
  }

  const course = await fetchCourse(params.newCourse)

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
