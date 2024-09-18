import type { GetStaticPaths } from 'next';

import { fetchFaculty } from '@/api/fetchFaculty';
import { fetchWebinars } from '@/api/fetchWebinars';
import Webinars from '@/components/pages/Webinars';
import getData, { PagesData } from '@/services/getData';

const WebinarsPage = () => {
  return <Webinars />;
};

export const getStaticProps = getData(PagesData.webinars);

export const getStaticPaths = (async () => {
  const faculty = await fetchFaculty();
  const webinars = await fetchWebinars();

  const pathFaculty = faculty
    .filter(item => webinars.some(elem => elem.faculty.title === item.title))
    .map(item => ({
      params: {
        slugWebinars: item.slug,
      },
    }));

  return {
    paths: [...pathFaculty],
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default WebinarsPage;
