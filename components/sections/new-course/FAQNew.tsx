import styles from '@/styles//components/sections/new-course/FaqNew.module.sass'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import Accordion from '@/components/cards/Accordion'
import React from 'react'

const list = [
  {
    title: 'Какие документы я получу после окончания обучения?',
    description: 'После успешного прохождения программы вы получаете Диплом о профессиональной переподготовке установленного образца. Это официальный документ, который вносится в реестр ФИС-ФРДО и дает право на осуществление профессиональной деятельности в выбранной сфере.\n' +
      'Международный диплом (ID) / Сертификат о прохождении курса.'
  },
  {
    title: 'Действуют ли какие-нибудь программы рассрочки?',
    description: 'После успешного прохождения программы вы получаете Диплом о профессиональной переподготовке установленного образца. Это официальный документ, который вносится в реестр ФИС-ФРДО и дает право на осуществление профессиональной деятельности в выбранной сфере.\n' +
      'Международный диплом (ID) / Сертификат о прохождении курса.'
  },
  {
    title: 'Что такое налоговый вычет за обучение и как его получить?',
    description: 'После успешного прохождения программы вы получаете Диплом о профессиональной переподготовке установленного образца. Это официальный документ, который вносится в реестр ФИС-ФРДО и дает право на осуществление профессиональной деятельности в выбранной сфере.\n' +
      'Международный диплом (ID) / Сертификат о прохождении курса.'
  }
]

const FaqNew = () => {
  return (
    <section className={'container'}>
      <div className={styles.wrapperBlock}>
        <div className={styles.blockHeader}>
          <h2 className={styles.header}>Часто задаваемые вопросы</h2>

          <h3 className={styles.subHeader}>
            У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!
          </h3>

          <BtnNewCourse text={'Записаться на курс'} className={styles.btn} />
        </div>

        <div className={styles.blockFaq}>
          {
            list.map((item, index) => (
              <Accordion title={item.title} description={item.description} key={index} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default FaqNew
