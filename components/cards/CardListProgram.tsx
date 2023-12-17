import styles from '@/styles/components/cards/CardListProgram.module.sass'
import { ImgTemplate } from '@/components/imgs'
import urlImage from '@/public/assets/imgs/new-course/mingcute_check-fill.png'
import fetchCourse from '../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const CardListProgram = ({data}: Props) => {
  return (
    <ul className={styles.cardListProgram}>
      {
        data.listProgram.map((item, index) => (
          <li key={index}>
            <ImgTemplate src={urlImage} alt={'img'} width={24} height={24} />
            <p>{item.title}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default CardListProgram
