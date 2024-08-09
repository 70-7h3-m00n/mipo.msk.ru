import { dev } from './index';

type TypeRoutesBack = {
  root: 'http://localhost:1337' | 'https://api.mipo.msk.ru';
  newRoot: 'http://localhost:1337' | 'https://api.instprof.online';
  home: '/';
  programs: '/programs'; // /programs || /programs/:id
  teachers: '/teachers';
  reviews: '/reviews';
  webinars: '/webinars';
  getStaticProps: '/get-static-props'; // /get-static-props/:page
  getStaticPathsStudyFields: '/get-static-paths/study-fields'; // /get-static-paths/study-fields || /get-static-paths/study-fields/:type
  getStaticPathsPrograms: '/get-static-paths/programs'; // /get-static-paths/programs || /get-static-paths/programs/:type
  graphql: '/graphql';
};

const routesBack: TypeRoutesBack = {
  root: 'https://api.mipo.msk.ru',
  newRoot: dev ? 'http://localhost:1337' : 'https://api.instprof.online',
  // newRoot: 'https://api.instprof.online',
  home: '/',
  programs: '/programs', // /programs || /programs/:id
  teachers: '/teachers',
  reviews: '/reviews',
  webinars: '/webinars',
  getStaticProps: '/get-static-props', // /get-static-props/:page
  getStaticPathsStudyFields: '/get-static-paths/study-fields', // /get-static-paths/study-fields || /get-static-paths/study-fields/:type
  getStaticPathsPrograms: '/get-static-paths/programs', // /get-static-paths/programs || /get-static-paths/programs/:type
  graphql: '/graphql',
};

export default routesBack;
