import { routesFront, routesBack } from '@/config/index'
import type { NextApiRequest, NextApiResponse } from 'next'

const clearPreviewModeCookies = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.redirect(routesFront.root)
}

export default clearPreviewModeCookies
