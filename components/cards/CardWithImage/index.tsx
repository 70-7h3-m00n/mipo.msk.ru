import cn from 'classnames'
import stls from './index.module.sass'
import { IconArrowRight } from '@/components/icons'
import Image from 'next/image'

interface Props {
  title: string
  imageSrc: string
  countPrograms?: number
  lintTo?: string
}

const CardWithiImage = ({
  title,
  countPrograms = 0,
  lintTo,
  imageSrc = '/assets/imgs/hardereducation/nofoto.jpeg'
}: Props) => {
  return (
    <a href={lintTo}>
      <div className={stls.component}>
        <div className={stls.image}>
          <Image alt='Факультет' src={imageSrc} layout='fill' />
        </div>
        <div className={stls.container}>
          <h3>{title}</h3>
          <div>{countPrograms} программ</div>
        </div>

        <IconArrowRight classNames={[stls.icon]} />
      </div>
    </a>
  )
}

export default CardWithiImage
