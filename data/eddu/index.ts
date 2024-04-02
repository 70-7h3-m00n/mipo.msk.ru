import svg1 from './eddu/eddu-counter-white-simple49.svg'
import svg2 from './eddu/eddu-counter-white-simple48.svg'
import svg3 from './eddu/eddu-counter-white-simple47.svg'
import imageEdkurs from '@/public/assets/imgs/edkurs.jpg'

type EdduData = {
  svg : string
  link: string
}

const edduData : EdduData[] = [
  {
    svg : svg1,
    link: 'https://eddu.pro/reviews/mipo-review/'
  },
  {
    svg : imageEdkurs,
    link: '#'
  },
  // {
  //   svg : svg2
  // },
  // {
  //   svg : svg3
  // }
]

export default edduData
