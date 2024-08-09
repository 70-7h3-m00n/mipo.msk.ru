import FormApplication from '@/components/FormApplication';

import styles from './ApplicationsContent.module.scss';

type Props = {
  title: string;
};

export const ApplicationsContent = ({ title }: Props) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.header}>{title}</h3>

      <p className={styles.description}>
        Остались вопросы или не можете определиться с курсом? Оставьте свои
        контакты, мы свяжемся с вами и все расскажем.
      </p>

      <FormApplication
        className={styles.wrapperForm}
        textBtn={'отправить заявку'}
      />

      <div className={styles.political}>
        Оформляя заявку, я согласен с политикой конфиденциальности и офертой
      </div>
    </div>
  );
};
