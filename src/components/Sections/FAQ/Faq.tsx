import styles from './Faq.module.scss'
import Accordion from '../../Accordion'

interface FaqProps {
  faqData: {
    question: string
    answer: string
  }[]
}

export const Faq = ({ faqData }: FaqProps) => {

  if (!faqData.length) return <></>

  return (
    <section className={'container'}>
      <h2 className={'header'}>часто задаваемые вопросы</h2>

      <div className={styles.wrapperList}>
        {
          faqData?.map((item, index) => (
            <Accordion title={item.question} description={item.answer} key={index} />
          ))
        }
      </div>
    </section>
  )
}
