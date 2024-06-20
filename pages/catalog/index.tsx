import { GetStaticProps } from 'next'
import AreasStudy from '../../src/components/pages/AreasStudy'
import fetchProgramCourses from '../../src/api/fetchProgramCourses'


const CatalogPage = () => {
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

export default CatalogPage
