import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/components/cards/CardMotion.module.sass'
import { ImgTemplate } from '@/components/imgs'
import image3 from '@/public/assets/imgs/new-course/arrow.png'
import image from '@/public/assets/imgs/new-course/check.png'

interface Props {
  title: string
  description: string
}

const CardMotion = ({ title, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  }

  return (
    <motion.div className={styles.wrapper}
                 onMouseEnter={handleHover}
                 onMouseLeave={handleHover}
    >
      <motion.div className={styles.card}
                  initial={{rotateY: 0}}
                  animate={{rotateY: isHovered? 180: 0}}
                  transition={{duration: 0.5}}
      >
        <div className={isHovered ? 'hidden' : styles.front}>
          <div className={styles.arrowIcon}>
            <ImgTemplate src={image3} alt={'image'} layout={'fill'} />
          </div>

          <ImgTemplate src={image} alt={'image'} width={35} height={35} />

          <motion.p className={styles.text}
                    initial={{opacity: 1}}
                    animate={{opacity: isHovered? 0 : 1}}
                    transition={{duration: 0.7}}
          >
            {title}
          </motion.p>
        </div>

        <div className={isHovered? styles.back : 'hidden'}>
          <motion.p className={styles.text}
                    initial={{opacity: 0}}
                    animate={{opacity: isHovered? 1 : 0}}
                    transition={{duration: 0.7}}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>

  )
}

export default CardMotion
