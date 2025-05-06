import cn from 'classnames'
import stls from './index.module.sass'
import { IconArrowRight } from '@/components/icons'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  title: string
  imageSrc?: string
  countPrograms?: number
  lintTo?: string
  isWithoutCountProgram?: boolean
}

const CardWithiImage = ({
  title,
  countPrograms = 0,
  lintTo,
  imageSrc = '/assets/imgs/hardereducation/nofoto.jpeg',
  isWithoutCountProgram = false
}: Props) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <a href={lintTo}>
      <div className={stls.component}>
        <div className={cn(stls.image, loaded && stls.imageLoaded  )}>
          <Image alt='Факультет' src={imageSrc} layout='fill' onLoad={() => setLoaded(true)}/>
        </div>
        <div className={stls.container}>
          <h3>{title}</h3>
          {!isWithoutCountProgram && <div className={stls.count}>{countPrograms} программ(а)</div>}
        </div>

        <IconArrowRight classNames={[stls.icon]} />
      </div>
    </a>
  )
}

export default CardWithiImage
