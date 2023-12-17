import React, { useState } from 'react'
import styles from '@/styles/components/cards/Accordion.module.sass'
import { ImgTemplate } from '@/components/imgs'
import plus from '@/public/assets/imgs/new-course/plus.png'
import minus from '@/public/assets/imgs/new-course/minus.png'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  title: string
  description: string
}

const Accordion = ({ title, description }: Props) => {
  const [open, setOpen] = useState(false)

  return (
  <motion.div className={styles.accordion}
              onHoverStart={() => setOpen(true)}
              onHoverEnd={() => setOpen(false)}
              onTouchStart={() => setOpen(true)}
              onTouchEnd={() => setOpen(false)}
  >
    <div className={styles.titleBlock}>
      <h3>{title}</h3>

      <ImgTemplate src={open? minus: plus} width={35} height={35} alt={'icon'} />
    </div>

    <AnimatePresence initial={false} mode={'popLayout'}>
      {
        open && (<motion.div className={styles.descriptionBlock}
                             initial={{
                              translateY: -1000
                             }}
                             animate={{
                              translateY: 0,
                             }}
                             exit={{
                              translateY: -1000
                             }}
                             transition={{
                              duration: 0.7,
                               type: 'spring',
                               damping: 10,
                               stiffness: 100
                             }}

        >
          <p>{description}</p>
        </motion.div>)
      }
    </AnimatePresence>
  </motion.div>
  )
}

export default Accordion
