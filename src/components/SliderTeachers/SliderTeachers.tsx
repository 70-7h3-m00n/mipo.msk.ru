import classNames from 'classnames';

import type { IImage } from '@/api/fetchTeacher/types';
import CardTeacher from '@/components/Items/CardTeacher';
import Slider from '@/components/Slider';

import styles from './SliderTeachers.module.scss';

type SliderTeachersProps = {
  list: Array<{
    image: IImage;
    name: string;
    description: string;
  }>;
};

export const SliderTeachers = ({ list }: SliderTeachersProps) => {
  return (
    <>
      <h2 className={classNames('header', styles.header)}>
        преподаватели-наставники
      </h2>

      <div className={styles.wrapperSlider}>
        <Slider stylesBtn={styles.sliderBtn}>
          <>
            {list?.map((item, index) => (
              <CardTeacher
                name={item.name}
                description={item.description}
                imageUrl={item.image?.url}
                key={index}
              />
            ))}
          </>
        </Slider>
      </div>
    </>
  );
};
