import { dev } from './index';

const routesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mipo.msk.ru',
  home: '/',
  programs: '/programs',
};

export default routesFront;
