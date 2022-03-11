import { TypeGeneralRoutesFront } from '@/types/index'
import { dev } from '@/config/index'

const routesFront: TypeGeneralRoutesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mipo.msk.ru',
  home: '/',
  programs: '/programs'
}

export default routesFront
