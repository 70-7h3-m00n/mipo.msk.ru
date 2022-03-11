import { dev } from '@/config/index'

type TypeRoutesBack = {
  root: 'http://localhost:1337' | 'https://api-mipo-msk-ru.herokuapp.com'
  home: '/'
  programs: '/programs' // /programs || /programs/:id
  teachers: '/teachers'
  reviews: '/reviews'
  webinars: '/webinars'
  getStaticProps: '/get-static-props' // /get-static-props/:page
  getStaticPathsStudyFields: '/get-static-paths/study-fields' // /get-static-paths/study-fields || /get-static-paths/study-fields/:type
  getStaticPathsPrograms: '/get-static-paths/programs' // /get-static-paths/programs || /get-static-paths/programs/:type
  graphql: '/graphql'
}

const routesBack: TypeRoutesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-mipo-msk-ru.herokuapp.com',
  home: '/',
  programs: '/programs', // /programs || /programs/:id
  teachers: '/teachers',
  reviews: '/reviews',
  webinars: '/webinars',
  getStaticProps: '/get-static-props', // /get-static-props/:page
  getStaticPathsStudyFields: '/get-static-paths/study-fields', // /get-static-paths/study-fields || /get-static-paths/study-fields/:type
  getStaticPathsPrograms: '/get-static-paths/programs', // /get-static-paths/programs || /get-static-paths/programs/:type
  graphql: '/graphql'
}

export default routesBack
