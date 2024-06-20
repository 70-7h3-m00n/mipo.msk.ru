import { GetStaticPaths } from 'next'
import AreasStudy from '../../../src/components/pages/AreasStudy'
import fetchFaculty from '../../../src/api/fetchFaculty'
import fetchTypeProgram from '../../../src/api/fetchTypeProgram'
import fetchProgramCourses from '../../../src/api/fetchProgramCourses'
import getData, { PagesData } from '../../../src/services/getData'



const FilterPrograms = () => {
  return (
    <>
      <AreasStudy />
    </>
  )
}

export const getStaticProps = getData(PagesData.catalog)

export const getStaticPaths = (async () => {
  const typeProgram = await fetchTypeProgram()
  const course = await fetchProgramCourses()
  const faculty = await fetchFaculty()

  const typeCourses =  course.map(item =>  item.typeProgram.title)
  const facultyCourses =  course.map(item =>  item.faculty.title)

   const pathTypeProgram= typeProgram.filter((item) => (
          typeCourses.some(elem => elem === item.title)
      )).map(item => ({
        params : {
          slugTypePrograms: item.slug
        },
      }))

  const pathFaculty= faculty.filter((item) => (
      facultyCourses.some(elem => elem === item.title)
  )).map(item => ({
    params : {
      slugTypePrograms: item.slug
    },
  }))

  return {
    paths: [...pathTypeProgram, ...pathFaculty],
    fallback: false,
  }
}) satisfies GetStaticPaths

export default FilterPrograms
