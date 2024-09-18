import { createHash } from 'crypto';

import axios from 'axios';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import url from '@/assets/image/puzzles.png';
import ButtonLink from '@/components/ButtonLink';
import { routesFront, UTM_KEYS } from '@/config/index';
import { phoneExp, emailExp } from '@/shared/regExp';

import styles from './BlockHelp.module.scss';

type UTM_KEYS = { [key in (typeof UTM_KEYS)[number]]: string | undefined };

type FormValues = {
  name: string;
  phone: string;
  email: string;
  promocode?: string;
  leadPage?: string;
  utms?: UTM_KEYS;
  referer?: string | undefined;
  ymUid: string | undefined;
};

export const BlockHelp = () => {
  const router = useRouter();
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormValues) => {
    const id = createHash('sha256').update(data.phone).digest('hex');
    data.leadPage = router.asPath;
    data.utms = UTM_KEYS.reduce(
      (acc, cur) => ({ ...acc, [cur]: getCookie(cur) }),
      {} as UTM_KEYS
    );
    data.referer = JSON.parse(sessionStorage.getItem('referer')!);
    data.ymUid = JSON.parse(localStorage.getItem('_ym_uid')!);

    try {
      await axios.post(`${routesFront.root}/api/lead`, {
        ...data,
        id,
      });
      reset();
    } catch (e) {
      console.log(e, 'submit');
    }

    try {
      await axios.post(`${routesFront.root}/api/webhook`, data.utms);
    } catch (e) {
      console.log(e, 'submit-webhook');
    }
  };

  return (
    <div className={styles.blockHelp}>
      <h3 className={styles.header}>ПОМОЧЬ В ПОДБОРЕ ПРОГРАММЫ</h3>

      <form
        className={styles.form}
        onSubmit={handleSubmit(data => onSubmit(data))}
      >
        <input
          className={styles.input}
          placeholder={'Ваше имя'}
          type={'text'}
          {...register('name', {
            maxLength: {
              value: 32,
              message: `*Не больше 32 символов`,
            },
          })}
        />

        <input
          className={styles.input}
          type="number"
          placeholder={'+7 (999) 99-999-99'}
          {...register('phone', {
            required: `Номер телефона обязателен`,
            pattern: {
              value: phoneExp,
              message: 'Телефон не соотвествует номерам телефона РФ',
            },
          })}
        />

        <input
          className={styles.input}
          placeholder={'Ваш email'}
          type={'email'}
          {...register('email', {
            pattern: {
              value: emailExp,
              message: 'email введен не коректно ',
            },
          })}
        />

        <input placeholder={'Промокод'} />

        <ButtonLink
          text={'подобрать программу'}
          className={styles.btnSubmit}
          styleOption={'square'}
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
          disabled={!isValid}
        />
      </form>

      <div className={styles.textPolitic}>
        Оформляя заявку, я согласен &nbsp;
        <Link
          className={styles.linkPolitic}
          href={'/policies/privacy.pdf'}
          target={'_blank'}
        >
          с политикой конфиденциальности и офертой
        </Link>
      </div>

      <div className={styles.wrapperImage}>
        <Image sizes={''} src={url} alt={'image'} fill />
      </div>
    </div>
  );
};
