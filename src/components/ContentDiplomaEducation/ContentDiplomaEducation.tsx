import classNames from 'classnames';
import Image from 'next/image';

import urlDiploma from '@/assets/image/diploma.png';
import urlDirectory from '@/assets/image/directory.png';
import urlStudent2 from '@/assets/image/student-2.png';
import urlStudent1 from '@/assets/image/student.png';

import styles from './ContentDiplomaEducation.module.scss';

export const ContentDiplomaEducation = () => {
  return (
    <div className={styles.listItem}>
      <div className={classNames(styles.itemText, styles.item1)}>
        <h3 className={styles.header}>Официальное образование</h3>

        <p className={styles.description}>
          Все наши программы лицензированы, а дипломы имеют международные
          приложения, поэтому они ценятся клиентами и профессиональным
          психологическим сообществом как в России, так и за рубежом! По
          окончании программ профессиональной переподготовки и курсов повышения
          квалификации выпускники института получают официальный документ
          установленного образца, который вносится в реестр ФРДО, а в дополнение
          — сертификат Московского Института
        </p>
      </div>

      <div className={classNames(styles.itemImage, styles.item2)}>
        <Image
          className={styles.image}
          src={urlDiploma}
          alt={'image'}
          sizes={''}
        />
      </div>

      <div className={classNames(styles.itemImage, styles.item3)}>
        <Image
          className={styles.image}
          src={urlDirectory}
          alt={'image'}
          sizes={''}
        />
      </div>

      <div className={classNames(styles.itemImages, styles.item4)}>
        <Image
          sizes={''}
          className={styles.image}
          src={urlStudent1}
          alt={'image'}
        />

        <Image
          sizes={''}
          className={styles.image}
          src={urlStudent2}
          alt={'image'}
        />
      </div>
    </div>
  );
};
