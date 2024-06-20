import { GetStaticPaths, GetStaticProps } from 'next'
import AreasStudy from '../../../../src/components/pages/AreasStudy'
import fetchCourse from '../../../../api/fetchCourse'
import fetchProgramCourses from '../../../../src/api/fetchProgramCourses'

const PageSlug = () => {
  return (
    <>
      <AreasStudy />
    </>
  )
}

export const getStaticProps = (async (context) => {
  const course = await fetchProgramCourses()

  return {
    props: {
      course
    }
  }
}) satisfies GetStaticProps

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          slugFilterPrograms: 'test',
          slugProgram: 'test-1'
        }
      },
      {
        params: {
          slugFilterPrograms: 'one',
          slugProgram: 'one-1'
        }
      },
    ],
    fallback: false,
  }
}) satisfies GetStaticPaths

export default PageSlug
