import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'

interface Props {
  title: string
  href: string
  image: string | StaticImageData
  setOpenPopUp(openPopUp: boolean): void
}

const PopularCourse = ({ title, href, image, setOpenPopUp }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapperHeader}>
        <div className={styles.header}>{title}</div>

        <div className={styles.linkCourse}
              onMouseMove={() => setOpenPopUp(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect width="50" height="50" rx="10" fill="#F1F1F9" />
            <path
              d="M35.2858 28.9985L33.0552 29.0137L33.0704 17.0718L21.1285 17.0869L21.1437 14.8564L35.2858 14.8564L35.2858 28.9985Z"
              fill="black" />
            <path d="M33.4558 16.6863L15.0711 35.0711" stroke="black" strokeWidth="2.3" />
          </svg>
        </div>
      </div>

      <Image className={styles.wrapperImage}
             src={image}
             alt={'image'}
             draggable={false}
      />
    </div>
  )
}

export default PopularCourse
