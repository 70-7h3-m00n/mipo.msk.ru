import type { GetStaticProps } from 'next';

import { fetchFaculty } from '@/api/fetchFaculty';
import { fetchFaq } from '@/api/fetchFaq';
import { fetchProgramCourse } from '@/api/fetchProgramCourse';
import { fetchProgramCourses } from '@/api/fetchProgramCourses';
import { fetchStudentComment } from '@/api/fetchStudentComment';
import { fetchTeacher } from '@/api/fetchTeacher';
import { fetchTrustTraining } from '@/api/fetchTrustTraining';
import { fetchTypeProgram } from '@/api/fetchTypeProgram';
import { setDataCourse } from '@/state/reducers/Course';
import { setDataCourses } from '@/state/reducers/Courses';
import { setDataFaculty } from '@/state/reducers/Faculty';
import { setDataFaq } from '@/state/reducers/Faq';
import { setDataStudentComment } from '@/state/reducers/StudentComment';
import { setDataTeacher } from '@/state/reducers/Teacher';
import { setDataTrustTraining } from '@/state/reducers/TrustTraining';
import { setDataTypeProgram } from '@/state/reducers/TypeProgram';
import { wrapper } from '@/state/store';

export enum PagesData {
  catalog = 'catalog',
  home = 'home',
  course = 'course',
  webinars = 'webinars',
}

const getData = (page?: PagesData) =>
  wrapper.getStaticProps(store => async ({ params }) => {
    const faculty = await fetchFaculty();
    const typeProgram = await fetchTypeProgram();
    const courses = await fetchProgramCourses();

    store.dispatch(setDataFaculty([...faculty]));
    store.dispatch(setDataTypeProgram([...typeProgram]));
    store.dispatch(setDataCourses([...courses]));

    if (page === PagesData.catalog) {
      const faq = await fetchFaq();

      store.dispatch(setDataFaq([...faq]));
    }

    if (page === PagesData.home) {
      const faq = await fetchFaq();
      const teacher = await fetchTeacher();
      const trustTraining = await fetchTrustTraining();
      const studentComment = await fetchStudentComment();

      store.dispatch(setDataFaq([...faq]));
      store.dispatch(setDataTeacher([...teacher]));
      store.dispatch(setDataTrustTraining([...trustTraining]));
      store.dispatch(setDataStudentComment([...studentComment]));
    }

    if (page === PagesData.course) {
      if (!params || typeof params.id !== 'string') {
        return {
          notFound: true,
        };
      }

      const course = await fetchProgramCourse(params.id);
      const teacher = await fetchTeacher();
      const studentComment = await fetchStudentComment();

      store.dispatch(setDataCourse(course!));
      store.dispatch(setDataTeacher([...teacher]));
      store.dispatch(setDataStudentComment([...studentComment]));
    }

    return {
      props: {},
      revalidate: 2000,
    };
  }) satisfies GetStaticProps;

export default getData;
