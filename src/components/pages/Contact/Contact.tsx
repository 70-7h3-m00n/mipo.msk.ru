import BlockHelp from '@/components/BlockHelp';
import Faq from '@/components/Sections/FAQ';
import { contactData } from '@/data/contact';
import { useAppSelector } from '@/state/hooks';

import styles from './Contact.module.scss';

export const Contact = () => {
  const { faqData } = useAppSelector(state => state.faqReducer);

  return (
    <>
      <section className={'container'}>
        <h1 className={styles.header}>КОНТАКТЫ</h1>

        <div className={styles.wrapperContact}>
          {contactData.map((item, index) => (
            <div className={styles.itemContact} key={index}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.descrBlock}>
                {item.description.map((desc, i) => (
                  <div className={styles.infoCard} key={i}>
                    <div className={styles.header}>{desc.title}</div>
                    <div className={styles.description}>{desc.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={'container'}>
        <BlockHelp />
      </section>

      <Faq faqData={faqData} />
    </>
  );
};
