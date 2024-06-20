import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/sections/new-course/TrainingWorks.module.sass'
import { motion, AnimatePresence } from 'framer-motion'
import { ImgTemplate } from '@/components/imgs'
import { StaticImageData } from 'next/image'

interface Props {
  isTime: boolean
  urlIcon: string | StaticImageData
  timer : number
}

const draw = {
  hidden: {
    pathLength: 1,
  },
  visible: (time: any) => {
    return {
      pathLength: 0,
      transition: {
        pathLength: {
          duration: time
        },
      }
    };
  }
}

const IconTime = ({ isTime, urlIcon, timer }:Props) => {
  const [coordinates, setCoordinates] = useState({
    radius: 40,
    cx: 42.5,
    cy: 42.5
  })

  useEffect(() => {
    if (window.document.body.offsetWidth  <= 767) {
      setCoordinates({
        radius: 26,
        cx: 35,
        cy: 42.5
      })
    } else {
      setCoordinates({
        radius: 40,
        cx: 42.5,
        cy: 42.5
      })
    }
  }, [])

  return (
      <div className={styles.wrapperSvg}>
        <AnimatePresence mode={'sync'}>
          {
            isTime ?
              <motion.svg
                className={styles.circle}
                width="85"
                height="85"
                fill="none"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.circle
                  cx={coordinates.cx}
                  cy={coordinates.cy}
                  r={coordinates.radius}
                  stroke="#0788FF"
                  strokeWidth="5px"
                  variants={draw}
                  custom={timer}
                />
              </motion.svg> : <></>
          }
        </AnimatePresence>
        <div className={styles.wrapperIcon}>
          <ImgTemplate src={urlIcon} alt={'imgTest'} layout={'fill'} />
        </div>
      </div>

  )
}

export default IconTime
