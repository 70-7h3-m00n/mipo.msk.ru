import stls from '@/styles/components/general/ProsList.module.sass'
import { IconCircleCheck } from '@/components/icons'

const ProsList = () => {
  const list = [
    'Можно вернуть 13% НДФЛ',
    'Есть гос. аккредитация и сертификаты',
    'Рассрочка  от института Без переплат',
    'Дистанционное обучение без отрыва от работы',
    'Дипломы котируются по всему миру',
    'Спикеры практики и имеют ученые степени'
  ]

  return (
    <div className={stls.container}>
      <ul className={stls.list}>
        {list.map((item, idx) => (
          <li key={item + idx} className={stls.item}>
            <div className={stls.icon}>
              <IconCircleCheck />
            </div>
            <span className={stls.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProsList
