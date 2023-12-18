import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from '@/styles/components/cards/CardMotion.module.sass'
import { ImgTemplate } from '@/components/imgs'
import image3 from '@/public/assets/imgs/new-course/arrow.png'
import image from '@/public/assets/imgs/new-course/check.png'

interface Props {
  title: string
  description: string
}

const variantRotateY: Variants = {
  initial: {
    rotateY: 0
  },
  visible: (isHovered: boolean) => ({
    rotateY: isHovered? 180: 0,
    transition: {
      duration: 0.5
    },
  })
}

const variantOpacity: Variants = {
  initial: {
    opacity: 1
  },
  visible: (isHovered: boolean) => ({
    opacity: isHovered? 0 : 1,
    transition: {
      duration: 0.5
    },
  })
}

const CardMotion = ({ title, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  }

  return (
    <div className={styles.wrapper}
         onMouseEnter={handleHover}
         onMouseLeave={handleHover}
    >
      <motion.div className={styles.card}
                  initial='initial'
                  animate='visible'
                  variants={variantRotateY}
                  custom={isHovered}
      >
        <div className={isHovered ? 'hidden' : styles.front}>
          <div className={styles.arrowIcon}>
            <ImgTemplate src={image3} alt={'image'} layout={'fill'} />
          </div>

          <ImgTemplate src={image} alt={'image'} width={35} height={35} />

          <motion.p className={styles.text}
                    initial='initial'
                    animate='visible'
                    variants={variantOpacity}
                    custom={isHovered}
          >
            {title}
          </motion.p>
        </div>

        <div className={isHovered? styles.back : 'hidden'}>
          <motion.p className={styles.text}
                    initial='initial'
                    animate='visible'
                    variants={variantOpacity}
                    custom={!isHovered}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </div>

  )
}

export default CardMotion
