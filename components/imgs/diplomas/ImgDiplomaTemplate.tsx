import stls from '@/styles/components/imgs/diplomas/ImgDiplomaTemplate.module.sass'
import { TypeImg } from '@/types/index'
import { useContext } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { calculateClosestAdmission } from '@/helpers/index'
import programContext from '@/context/program/programContext'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/diplomas/diploma.jpg'

const ImgDiplomaTemplate = ({ classNames = [], width, height }: TypeImg) => {
  const { program } = useContext(programContext)

  const now = new Date()

  const studyPeriod = Number(program?.timenprice?.[0]?.studyMonthsDuration) || 6
  const programName =
    program?.title?.replace(/,/g, encodeURIComponent(',')) ||
    'Наименование программы'
  const qualification = program?.qualification || 'Присваемая квалификация'

  const fromDate = format(
    new Date(
      now.getFullYear(),
      now.getMonth() - studyPeriod,
      now.getDate() < 5 ? 5 : 20
    ),
    'dd LLLL yyyy',
    { locale: ru }
  )
    .replace('январь', 'января')
    .replace('февраль', 'февраля')
    .replace('март', 'марта')
    .replace('апрель', 'апреля')
    .replace('май', 'мая')
    .replace('июнь', 'июня')
    .replace('июль', 'июля')
    .replace('август', 'августа')
    .replace('сентябрь', 'сентября')
    .replace('октябрь', 'октября')
    .replace('ноябрь', 'ноября')

  const toDate = format(
    new Date(now.getFullYear(), now.getMonth(), now.getDate() < 5 ? 5 : 20),
    'dd LLLL yyyy',
    {
      locale: ru
    }
  )
    .replace('январь', 'января')
    .replace('февраль', 'февраля')
    .replace('март', 'марта')
    .replace('апрель', 'апреля')
    .replace('май', 'мая')
    .replace('июнь', 'июня')
    .replace('июль', 'июля')
    .replace('август', 'августа')
    .replace('сентябрь', 'сентября')
    .replace('октябрь', 'октября')
    .replace('ноябрь', 'ноября')

  const PTSerif = encodeURIComponent('PT Serif')
  const EBGaramond = encodeURIComponent('EB Garamond')

  const coma = encodeURIComponent(',')

  const fromDateOff = format(
    new Date(
      now.getFullYear(),
      now.getMonth(),
      (now.getDate() < 5 ? 5 : 20) - 2
    ),
    'dd.MM.yyyy',
    { locale: ru }
  )

  const src = `https://res.cloudinary.com/mipo-msk-ru/image/upload/c_fit,l_text:${PTSerif}_24_center:${encodeURIComponent(
    'Иванов Иван Иванович'
  )},w_410,x_283,y_120,g_north/c_fit,l_text:${EBGaramond}_16_center:${encodeURIComponent(
    'за время обучения в период'
  )},w_410,x_283,y_145,g_north/c_fit,l_text:${PTSerif}_16_center:${encodeURIComponent(
    `с ${fromDate} года по ${toDate} года \n\n прошел профессиональную переподготовку в Научной автономной некоммерческой организации \n «Московский Институт Профессионального Образования» \n\n по программе «${programName}» \n\n Решением \n от ${fromDateOff}${coma} протокол 0000 \n\n Диплом предоставляет право на ведение профессиональной деятельности в сфере \n\n «${programName}» \n\n и подтверждает присвоение квалификации \n ${qualification}`
  )},w_450,x_283,y_169,g_north/diploma_template_806d8478b8.jpg`

  return (
    <ImgTemplate
      classNames={classNames}
      src={src || defaultSrc}
      alt='Диплом МИПО'
      width={width || 1131}
      height={height || 800}
      // brakes without this
      unoptimized
    />
    // <ImgTemplate
    //   classNames={classNames}
    //   src={defaultSrc}
    //   alt='Диплом МИПО'
    //   width={width}
    //   height={height}
    // />
  )
}

// https://res.cloudinary.com/demo/image/upload/l_text:Arial_100_bold:Boston/l_text:Arial_100:%7C/g_west,fl_layer_apply,x_w_add_20/l_text:Arial_100_italic:79%C2%B0F/g_west,fl_layer_apply,x_w_add_20/photo-1430609098125-581618d0482f_xvayby

export default ImgDiplomaTemplate
