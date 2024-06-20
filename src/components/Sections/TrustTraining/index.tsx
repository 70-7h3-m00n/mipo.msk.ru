import styles from './styles.module.scss'
import { company } from '../../../data/Mock/test'
import Image from 'next/image'
import BlockHelp from '../../BlockHelp'

const TrustTraining = () => {
  return (
    <section className={'container'}>
      <h2 className={'header'}>Нам доверяют свое обучение</h2>

      <div className={styles.wrapperList}>
        {
          company.map((item, index) => (
            <div className={styles.wrapperCard} key={index}>
              <Image className={styles.wrapperIcon} src={item.icon} alt={'icon'} />
            </div>
          ))
        }
      </div>

      <BlockHelp />
    </section>
  )
}

export default TrustTraining
