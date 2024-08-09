import type { NextApiRequest, NextApiResponse } from 'next';

import { routesFront } from '@/config/index';

const clearPreviewModeCookies = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.clearPreviewData();
  res.redirect(routesFront.root);
};

export default clearPreviewModeCookies;
