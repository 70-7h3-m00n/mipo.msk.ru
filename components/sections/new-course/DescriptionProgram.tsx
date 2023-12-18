import React from 'react'
import styles from '@/styles/components/sections/new-course/DescriptionProgram.module.sass'
import { ImgTemplate } from '@/components/imgs'
import classNames from 'classnames'
import fetchCourse from '../../../api/fetchCourse'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>>
}

const DescriptionProgram = ({data}:Props) => {
  return (
    <section className={classNames('container', styles.descriptionProgram)}>
      <div className={styles.descriptionProgram_wrapperDescr}>
        <h2 className={styles.header}>{data.descriptionProgram.header}</h2>

        <p className={styles.text}>{data.descriptionProgram.subHeader}</p>

        <h3 className={styles.subHeader}>{data.descriptionProgram.tittle}</h3>

        <p className={styles.text}>{data.descriptionProgram.description}</p>
      </div>

      <div className={styles.descriptionProgram_wrapperImage}>
        <ImgTemplate src={data.descriptionProgram.image} alt={'img'} layout={'fill'} />
      </div>
    </section>
  )
}

export default DescriptionProgram
