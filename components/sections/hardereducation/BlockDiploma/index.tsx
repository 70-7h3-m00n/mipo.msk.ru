import stls from './index.module.sass'
import Image from 'next/image'
import Title from '@/components/parts/Title'
import cn from 'classnames'

interface Props {
  className?: string
}

const BlockDiploma = ({ className }: Props) => {
  return (
    <div className={cn(stls.component, className)}>
      <Title as='h2' color='black' fontSize={44} className={stls.title}>
        Программы фундаментального образования {' '}
        <span>бакалавриата, магистратуры и колледжа</span>
      </Title>
      <div className={stls.information}>
        <div className={stls.image}>
          <Image
            src='/assets/imgs/hardereducation/diplomas.png'
            alt='diplomas'
            layout='fill'
          />
        </div>
        <div>
          <Title as='h3' color='black' fontSize={32} className={stls.h3}>
            По итогам обучения вы получите диплом государственного образца
          </Title>
          <div className={stls.subtitle}>
            В зависимости от программы вам будет присвоена квалификация магистра
            или бакалавра —{' '}
            <span>диплом выдаётся с приложением на английском языке.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockDiploma
