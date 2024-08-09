import type { GetStaticPaths } from 'next';

import { fetchFaculty } from '@/api/fetchFaculty';
import { fetchProgramCourses } from '@/api/fetchProgramCourses';
import { fetchTypeProgram } from '@/api/fetchTypeProgram';
import CatalogCourses from '@/components/pages/CatalogCourses';
import getData, { PagesData } from '@/services/getData';

const PageSlug = () => {
  return (
    <>
      <CatalogCourses />
    </>
  );
};

export const getStaticProps = getData(PagesData.catalog);

export const getStaticPaths = (async () => {
  const course = await fetchProgramCourses();
  const faculty = await fetchFaculty();
  const typeProgram = await fetchTypeProgram();

  const facultyMap = Object.fromEntries(faculty.map(f => [f.title, f.slug]));
  const typeProgramMap = Object.fromEntries(
    typeProgram.map(tp => [tp.title, tp.slug])
  );

  const dataFilterFaculty = [
    ...new Set(
      course.map(item => ({
        typeProgram: typeProgramMap[item.typeProgram.title],
        faculty: facultyMap[item.faculty.title],
      }))
    ),
  ];

  const paths = dataFilterFaculty.map(item => ({
    params: {
      slugTypePrograms: item.typeProgram,
      slugFaculty: item.faculty,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default PageSlug;
