import { routesFront, routesBack } from '../../src/config'
import type { NextApiRequest, NextApiResponse } from 'next'

const clearPreviewModeCookies = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.redirect(routesFront.root)
}

export default clearPreviewModeCookies
