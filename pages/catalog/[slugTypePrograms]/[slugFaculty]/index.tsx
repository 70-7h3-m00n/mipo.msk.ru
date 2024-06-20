import { GetStaticPaths } from 'next'
import AreasStudy from '../../../../src/components/pages/AreasStudy'
import fetchProgramCourses from '../../../../src/api/fetchProgramCourses'
import fetchFaculty from '../../../../src/api/fetchFaculty'
import fetchTypeProgram from '../../../../src/api/fetchTypeProgram'
import getData, { PagesData } from '../../../../src/services/getData'

const PageSlug = () => {
  return (
    <>
      <AreasStudy />
    </>
  )
}

export const getStaticProps = getData(PagesData.catalog)

export const getStaticPaths = (async () => {
  const course = await fetchProgramCourses()
  const faculty = await fetchFaculty()
  const typeProgram = await fetchTypeProgram()

  const facultyMap = Object.fromEntries(faculty.map(f => [f.title, f.slug]))
  const typeProgramMap = Object.fromEntries(typeProgram.map(tp => [tp.title, tp.slug]))

  const dataFilterFaculty = [...new Set(
          course.map(item => (
              {
                typeProgram: typeProgramMap[item.typeProgram.title],
                faculty: facultyMap[item.faculty.title]
              }
          ))
      )]

  const paths = dataFilterFaculty.map(item => ({
    params : {
      slugTypePrograms: item.typeProgram,
      slugFaculty: item.faculty
    },
  }))

  return {
    paths,
    fallback: false,
  }
}) satisfies GetStaticPaths

export default PageSlug
