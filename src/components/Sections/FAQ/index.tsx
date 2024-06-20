import styles from './styles.module.scss'
import Accordion from '../../Accordion'
import { FAQ } from '../../../data/Mock/test'

const Faq = () => {
  return (
    <section className={'container'}>
      <h2 className={'header'}>часто задаваемые вопросы</h2>

      <div className={styles.wrapperList}>
        {
          FAQ.map((item, index) => (
            <Accordion title={item.title} description={item.description} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Faq
