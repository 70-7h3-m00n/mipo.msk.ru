import classNames from 'classnames';

import CardTitle from '@/components/Items/CardTitle';
import { tuitionFeesCard } from '@/data/tuitionFees';

import styles from './TuitionFees.module.scss';

export const TuitionFees = () => {
  return (
    <>
      <section className={'container'}>
        <div className={styles.wrapperGeneral}>
          <h1 className={styles.headerGeneral}>
            оплаты обучения <br />
            через сайт
          </h1>

          <p className={styles.descriptionGeneral}>
            Для проведения оплаты обучения, с помощью банковской карты, ниже на
            этой странице необходимо нажать кнопку Оплата банковской картой.
            Оплата происходит через
            <span> ПАО СБЕРБАНК </span> с использованием банковских карт
            следующих платёжных систем:
          </p>
        </div>

        <div className={styles.wrapperCard}>
          {tuitionFeesCard.map((item, index) => (
            <CardTitle title={item.title} key={index} />
          ))}
        </div>
      </section>

      <section className={'container'}>
        <h2 className={'header'}>ознакомьтесь с информацией</h2>

        <div className={styles.wrapperTitle}>
          <p className={classNames(styles.title, styles.one)}>
            Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены
            на платёжный шлюз <span> ПАО СБЕРБАНК. </span> Соединение с
            платёжным шлюзом и передача информации осуществляется в защищённом
            режиме с использованием протокола шифрования SSL. В случае если Ваш
            банк поддерживает технологию безопасного проведения
            интернет-платежей Verified By Visa, MasterCard SecureCode, MIR
            Accept, J-Secure, для проведения платежа также может потребоваться
            ввод специального пароля.
          </p>

          <p className={classNames(styles.title, styles.two)}>
            Настоящий сайт поддерживает
            <span> 256-битное шифрование. </span> Конфиденциальность сообщаемой
            персональной информации обеспечивается ПАО СБЕРБАНК. Введённая
            информация не будет предоставлена третьим лицам за исключением
            случаев, предусмотренных законодательством РФ. Проведение платежей
            по банковским картам осуществляется{' '}
            <span>
              в строгом соответствии с требованиями платёжных систем МИР, Visa
              Int., MasterCard Europe Sprl, JCB.
            </span>
          </p>

          <div className={classNames(styles.wrapper, styles.three)}>
            <p className={styles.title}>
              В случае возврата, срок возврата составляет <span> 30 дней </span>{' '}
              с момента получения образовательных материалов. Возврат
              переведённых средств производится на Ваш банковский счёт в течение
              5-30 рабочих дней (срок зависит от банка, который выдал Вашу
              банковскую карту).
            </p>

            <p className={styles.title}>
              В случае возникновения проблем с оплатой, свяжитесь с нами, в
              рабочие часы (09:00-19:00 МСК), по телефону{' '}
              <span className={styles.nowrap}> +7 (495) 150-99-24 </span>, с
              помощью email
              <span className={styles.nowrap}> info@mipo.msk.ru </span>
            </p>
          </div>
        </div>

        <div className={styles.wrapperBtn}>
          <button className={styles.btn}>Задать вопрос</button>
        </div>
      </section>
    </>
  );
};
