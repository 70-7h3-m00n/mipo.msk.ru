import stls from '@/styles/components/sections/all/ForWhom.module.sass'
import cn from 'classnames'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgForWhom, ImgForWhomPhoneTablet } from '@/components/imgs'

const ForWhom = () => {
  return (
    <section className={cn(stls.container)}
    >
      <Wrapper classNames={[cn(stls.wrapper)]}>
        <div className={cn(stls.left)}>
          <div className={cn(stls.text)}>
            <h2 className={cn(stls.title)}>
              Для кого программа
            </h2>
            <p className={cn(stls.subtitle)}>
              Все программы обучения института МИПО подготовлены практикующими
              экспертами и сертифицированы, а выданные документы вносятся в
              Федеральный реестр ФИС-ФРДО и котируются по всему миру!
            </p>
          </div>
          <ImgForWhom
            classNames={[
              cn(stls.imageLaptopDesktop, {
              })
            ]}
            height={getImageHeight({
              width: 523,
            })}
          />
          <ImgForWhomPhoneTablet
            classNames={[stls.imagePhoneTablet]}
            height={getImageHeight({
              width: 708,
            })}
          />
        </div>
        <div className={stls.right}>
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhom
