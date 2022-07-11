import axios from 'axios'
import { routesFront, routesBack } from '@/config/index'

const clearPreviewModeCookies = async (req, res) => {
  res.clearPreviewData()
  res.redirect(routesFront.root)
}

export default clearPreviewModeCookies
