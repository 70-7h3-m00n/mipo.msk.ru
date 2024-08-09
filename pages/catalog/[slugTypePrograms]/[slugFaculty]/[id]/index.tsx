import type { GetStaticPaths } from 'next';

import { fetchFaculty } from '@/api/fetchFaculty';
import { fetchProgramCourses } from '@/api/fetchProgramCourses';
import { fetchTypeProgram } from '@/api/fetchTypeProgram';
import { ProgramCourse } from '@/components/pages/ProgramCourse/ProgramCourse';
import getData, { PagesData } from '@/services/getData';

const PageIdCourse = () => {
  return (
    <>
      <ProgramCourse />
    </>
  );
};

export const getStaticProps = getData(PagesData.course);

export const getStaticPaths = (async () => {
  const course = await fetchProgramCourses();
  const faculty = await fetchFaculty();
  const typeProgram = await fetchTypeProgram();

  const facultyMap = Object.fromEntries(faculty.map(f => [f.title, f.slug]));
  const typeProgramMap = Object.fromEntries(
    typeProgram.map(tp => [tp.title, tp.slug])
  );

  const paths = course.map(course => ({
    params: {
      slugTypePrograms: typeProgramMap[course.typeProgram.title],
      slugFaculty: facultyMap[course.faculty.title],
      id: course.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default PageIdCourse;
