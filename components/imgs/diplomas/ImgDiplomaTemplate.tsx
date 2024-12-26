import { TypeImg } from '@/types/index'
import { useContext } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import programContext from '@/context/program/programContext'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/diplomas/diploma.jpg'
import defaultSrcMba from '@/public/assets/imgs/diplomas/certificate_mba.png'

const ImgDiplomaTemplate = ({ classNames = [], width, height, src }: TypeImg) => {
  const { program } = useContext(programContext)

  const atMba = program?.category?.type === 'mba'

  const now = new Date()

  const studyPeriod = Number(program?.timenprice?.[0]?.studyMonthsDuration) || 6

  const image = src ? src : (atMba ? defaultSrcMba : defaultSrc);
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

  return (
    <ImgTemplate
      classNames={classNames}
      src={image}
      alt='Диплом МИПО'
      width={width || 1131}
      height={height || 800}
      unoptimized
    />
  )
}


export default ImgDiplomaTemplate
