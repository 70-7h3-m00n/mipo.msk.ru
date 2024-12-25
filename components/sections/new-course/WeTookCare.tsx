import styles from '@/styles/components/sections/new-course/WeTookCare.module.sass'
import img from '@/public/assets/imgs/new-course/Коллаж.png'
import { ImgTemplate } from '@/components/imgs'
import { listWeTookCare } from '@/data/lists'
import PlusSvg from '@/components/svg/PlusSvg'
import { Fade } from '@mui/material'
import BootstrapTooltip from '@/components/Tooltip/BootstrapTooltip'

const WeTookCare = () => {
  return (
    <section className={styles.weTookCareBlock}>
      <div className={styles.blockHeader}>
        <h2 className={styles.header}>Мы позаботились </h2>

        <h3 className={styles.subHeader}>
          о том,чтобы вы обучились даже с нуля
        </h3>

        <div className={styles.wrapperImage}>
          <ImgTemplate src={img} alt='img' layout='fill' />
        </div>
      </div>

      <div className={styles.blockInfo}>
        {listWeTookCare.map((item, index) => (
          <div className={styles.card} key={index}>
            <BootstrapTooltip
              title={item.tooltipText}
              arrow
              placement='top-start'
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}>
              <div>
                <PlusSvg />
              </div>
            </BootstrapTooltip>

            <p className={styles.text}>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.imageMedia}>
        <ImgTemplate src={img} alt='img' layout='fill' />
      </div>
    </section>
  )
}

export default WeTookCare
