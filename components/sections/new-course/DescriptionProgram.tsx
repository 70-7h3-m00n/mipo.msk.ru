import React from 'react'
import styles from '@/styles/components/sections/new-course/DescriptionProgram.module.sass'
import { ImgTemplate } from '@/components/imgs'
import classNames from 'classnames'
import fetchCourse from '../../../api/fetchCourse'
import routesBack from '@/config/routesBack'

interface Props {
  data: Awaited<ReturnType<typeof fetchCourse>> | any
}

const DescriptionProgram = ({data}:Props) => {
  const image = routesBack.newRoot + data?.descriptionProgram.image.data.attributes.url || ''

  return (
    <section className={classNames('container', styles.descriptionProgram)}>
      <div className={styles.descriptionProgram_wrapperDescr}>
        <h2 className={styles.header}>{data.descriptionProgram.header}</h2>

        <p className={styles.text}>{data.descriptionProgram.subHeader}</p>

        <h3 className={styles.subHeader}>{data.descriptionProgram.tittle}</h3>

        <p className={styles.text}>{data.descriptionProgram.description}</p>
      </div>

      <div className={styles.descriptionProgram_wrapperImage}>
        <ImgTemplate src={image} alt={'img'} layout={'fill'} />
      </div>
    </section>
  )
}

export default DescriptionProgram
