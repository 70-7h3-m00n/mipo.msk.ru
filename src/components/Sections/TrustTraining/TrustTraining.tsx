import styles from './TrustTraining.module.scss'
import BlockHelp from '../../BlockHelp'
import { useAppSelector } from '@/state/hooks'
import Image from 'next/image'


export const TrustTraining = () => {
  const { trustTrainingData } = useAppSelector(state => state.trustTrainingReducer)

  if (!trustTrainingData.length) return <></>

  return (
    <section className={'container'}>
      <h2 className={'header'}>Нам доверяют свое обучение</h2>

      <div className={styles.wrapperList}>
        {
          trustTrainingData.map((item, index) => (
            <div className={styles.wrapperCard} key={index}>
              <Image className={styles.wrapperIcon} width={200} height={200} src={item.image[0].url} alt={'icon'} />
            </div>
          ))
        }
      </div>

      <BlockHelp />
    </section>
  )
}
