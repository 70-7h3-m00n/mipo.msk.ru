import type { GetStaticPaths } from 'next';

import { fetchFaculty } from '@/api/fetchFaculty';
import { fetchProgramCourses } from '@/api/fetchProgramCourses';
import { fetchTypeProgram } from '@/api/fetchTypeProgram';
import CatalogCourses from '@/components/pages/CatalogCourses';
import getData, { PagesData } from '@/services/getData';

const FilterPrograms = () => {
  return (
    <>
      <CatalogCourses />
    </>
  );
};

export const getStaticProps = getData(PagesData.catalog);

export const getStaticPaths = (async () => {
  const typeProgram = await fetchTypeProgram();
  const course = await fetchProgramCourses();
  const faculty = await fetchFaculty();

  const typeCourses = course.map(item => item.typeProgram.title);
  const facultyCourses = course.map(item => item.faculty.title);

  const pathTypeProgram = typeProgram
    .filter(item => typeCourses.some(elem => elem === item.title))
    .map(item => ({
      params: {
        slugTypePrograms: item.slug,
      },
    }));

  const pathFaculty = faculty
    .filter(item => facultyCourses.some(elem => elem === item.title))
    .map(item => ({
      params: {
        slugTypePrograms: item.slug,
      },
    }));

  return {
    paths: [...pathTypeProgram, ...pathFaculty],
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default FilterPrograms;
