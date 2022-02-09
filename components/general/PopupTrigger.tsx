import stls from '@/styles/components/general/PopupTrigger.module.sass'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import {
  BtnAlpha,
  BtnBeta,
  BtnGamma,
  BtnDelta,
  BtnEpsilon,
  BtnZeta,
  BtnEta,
  BtnText,
  BtnTheta
} from '@/components/btns'

type PopupTriggerType = {
  btn:
    | 'alpha'
    | 'beta'
    | 'gamma'
    | 'delta'
    | 'epsilon'
    | 'zeta'
    | 'eta'
    | 'theta'
    | 'text'
  cta:
    | 'askQuestion'
    | 'callMeBack'
    | 'signUpForCourse'
    | 'signUpForProfession'
    | 'sighUpForMBA'
    | 'signUp'
    | 'chooseProgram'
    | 'learnAboutUs'
    | 'submitApplication'
    | 'reserve'
    | 'learnAboutTeachers'
    | 'help'
    | 'getFullList'
    | 'seeAllWebinars'
    | 'learnMore'
    | 'consultMe'
    | 'getProgram'
}

const PopupTrigger = ({ btn, cta }: PopupTriggerType) => {
  const question = cta === 'askQuestion'

  const strs = {
    trigger:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на курс'
        : cta === 'sighUpForMBA'
        ? 'Записаться на курс'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Помощь'
        : cta === 'getFullList'
        ? 'Запросить полный список'
        : cta === 'seeAllWebinars'
        ? 'Смотреть все вебинары'
        : cta === 'learnMore'
        ? 'Подробнее'
        : cta === 'consultMe'
        ? 'Хочу консультацию'
        : cta === 'getProgram'
        ? 'Получить программу'
        : '',
    title:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на курс'
        : cta === 'sighUpForMBA'
        ? 'Записаться на курс'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Помощь'
        : cta === 'getFullList'
        ? 'Запросить полный список'
        : cta === 'seeAllWebinars'
        ? 'Смотреть все вебинары'
        : cta === 'learnMore'
        ? 'Узнать подробнее'
        : cta === 'consultMe'
        ? 'Хочу консультацию'
        : cta === 'getProgram'
        ? 'Получить программу'
        : '',
    desc:
      cta === 'askQuestion' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'callMeBack' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'signUpForCourse' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'signUpForProfession' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'sighUpForMBA' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'signUp' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'chooseProgram' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'learnAboutUs' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'submitApplication' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'reserve' ? (
        <>
          {/* У Вас есть вопросы? Оставьте заявку!{' '}
           <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'learnAboutTeachers' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'help' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы, ответим на Ваши
          вопросы и решим проблему
        </>
      ) : cta === 'getFullList' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
          полный список преподавателей
        </>
      ) : cta === 'seeAllWebinars' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
          полный список вебинаров
        </>
      ) : cta === 'learnMore' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и расскажем
          подробнее о вебинаре
        </>
      ) : cta === 'consultMe' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : cta === 'getProgram' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          {/* <br className={stls.phonetablet} /> */}
        </>
      ) : (
        ''
      ),
    cta:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на курс'
        : cta === 'sighUpForMBA'
        ? 'Записаться на курс'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Оставить заявку'
        : cta === 'getFullList'
        ? 'Оставить заявку'
        : cta === 'seeAllWebinars'
        ? 'Оставить заявку'
        : cta === 'learnMore'
        ? 'Узнать подробнее'
        : cta === 'consultMe'
        ? 'Получить консультацию'
        : cta === 'getProgram'
        ? 'Получить программу'
        : ''
  }

  return (
    <Popup
      trigger={
        <div>
          {btn === 'alpha' ? (
            <BtnAlpha text={strs.trigger} />
          ) : btn === 'beta' ? (
            <BtnBeta text={strs.trigger} />
          ) : btn === 'gamma' ? (
            <BtnGamma text={strs.trigger} />
          ) : btn === 'delta' ? (
            <BtnDelta text={strs.trigger} />
          ) : btn === 'epsilon' ? (
            <BtnEpsilon text={strs.trigger} />
          ) : btn === 'zeta' ? (
            <BtnZeta text={strs.trigger} />
          ) : btn === 'eta' ? (
            <BtnEta text={strs.trigger} />
          ) : btn === 'theta' ? (
            <BtnTheta text={strs.trigger} />
          ) : btn === 'text' ? (
            <BtnText text={strs.trigger} ctheta />
          ) : (
            ''
          )}
        </div>
      }
      modal
      nested>
      {close => (
        <PopupCta
          title={strs.title}
          desc={strs.desc}
          cta={strs.cta}
          question={question}
          close={close}
        />
      )}
    </Popup>
  )
}

export default PopupTrigger
