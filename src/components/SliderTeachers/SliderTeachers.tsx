import styles from './SliderTeachers.module.scss'
import Slider from '../Slider'
import CardTeacher from '../Items/CardTeacher'
import classNames from 'classnames'
import { IImage } from '@/api/fetchTeacher/types'

interface SliderTeachersProps {
  list: {
    image: IImage
    name: string
    description: string
  }[]
}

export const SliderTeachers = ({ list }:SliderTeachersProps) => {
  return (
    <>
      <h2 className={classNames('header', styles.header)}>преподаватели-наставники</h2>

      <div className={styles.wrapperSlider}>
        <Slider stylesBtn={styles.sliderBtn}>
          <>
            {
              list?.map((item, index) => (
                <CardTeacher name={item.name}
                             description={item.description}
                             imageUrl={item.image?.url}
                             key={index}
                />
              ))
            }
          </>
        </Slider>
      </div>
    </>
  )
}
