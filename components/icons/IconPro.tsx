import React from 'react'
import styles from '@/styles/components/icons/IconPro.module.sass'
import StarSvg from '@/components/svg/StarSvg'

const IconPro = () => {
  return (
    <div className={styles.wrapperLogo}>
      <div>
        <StarSvg />
      </div>

      <p>PRO</p>
    </div>
  )
}

export default IconPro