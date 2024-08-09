import type { NextApiRequest, NextApiResponse } from 'next';

import { routesFront } from '@/config/index';

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== process.env.PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({});
  res.redirect(routesFront.root);
};

export default preview;
