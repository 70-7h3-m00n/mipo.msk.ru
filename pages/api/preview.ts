// https://<your-site>/api/preview?secret=<token>&slug=<path>
import axios from 'axios'
import { routesFront, routesBack } from '@/config/index'

const preview = async (req, res) => {
  if (req.query.secret !== process.env.PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})
  res.redirect(routesFront.root)
}

export default preview
