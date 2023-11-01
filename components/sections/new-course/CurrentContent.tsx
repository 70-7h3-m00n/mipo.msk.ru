import urlImage from '@/public/assets/imgs/new-course/current-content.png'
import urlPresent from '@/public/assets/imgs/new-course/present.png'
import { ImgTemplate } from '@/components/imgs'
import styles from '@/styles/components/sections/new-course/CurrentContent.module.sass'
import BtnNewCourse from '@/components/btns/BtnNewCourse'
import { useForm, SubmitHandler, Form } from 'react-hook-form'
import classNames from 'classnames'

interface FormSending {
  name: string
  phone: string
}

const CurrentContent = () => {
  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit
  } = useForm<FormSending>({
    defaultValues:{
      name: '',
      phone: ''
    },
    mode: 'onTouched'
  })

  const submit: SubmitHandler<FormSending> = async data => {
    console.log(data)
    reset()
  }

  return (
    <section className={'container'}>
      <div className={classNames(styles.blockImage, styles.mobile)}>
        <ImgTemplate src={urlImage} alt={'img'} layout={'fill'} />
      </div>

      <h2 className={styles.header}>Только актуальный контент</h2>

      <div className={styles.blockContent}>
        <div className={styles.leftContent}>
          <p>
            Мы постоянно проводим внутренние исследования, на основе которых обновляем наши программы и актуализируем образовательный контент
          </p>

          <p>
            При составлении программ используем опыт лучших экспертов своего дела со всего мира
          </p>
        </div>

        <div className={classNames(styles.blockImage, styles.decstop)}>
          <ImgTemplate src={urlImage} alt={'img'} layout={'fill'} />
        </div>

        <div className={styles.rightContent}>
          <p>
            Программа разработана специально в онлайн-формате для специалистов и руководителей, которые ценят свое время и хотят пройти обучение без отрыва от работы
          </p>

          <p>
            Благодаря дистанционному формату обучения, мы смогли собрать экспертов российского и зарубежного рынка
          </p>
        </div>
      </div>

      <div id={'formCourse'} className={styles.blockFormContent}>
        <div className={styles.content}>
          <div className={styles.wrapperImagePresent}>
            <ImgTemplate src={urlPresent} alt={'img'} layout={'fill'} />
          </div>

          <h2>До конца акции меньше недели!</h2>

          <h3>Оформите заявку до 29 сентября
            и сэкономьте <span> {'4483'} руб/мес.</span></h3>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <input placeholder={'Имя'}
                 {
                    ...register('name',{
                      required: true,
                      minLength: {
                        value: 2,
                        message: 'Минимальная длинна 2 символа',
                      },
                    })
                 }
          />

          <input placeholder={'Телефон'}
                 {
                   ...register('phone',{
                     required: true,
                     pattern: {
                       value: new RegExp('^((\\+7|7|8)+([0-9]){10})$'),
                       message: 'Телефон не соотвествует номерам телефона РФ',
                     }
                   })
                 }
          />

          <BtnNewCourse text={'Записаться на курс'}
                        className={isValid? styles.btn: styles.disabledBtn}
                        disabled={!isValid}
          />
        </form>
      </div>
    </section>
  )
}

export default CurrentContent
