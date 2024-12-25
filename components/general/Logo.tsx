import stls from '@/styles/components/general/Logo.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { routeHome } from '@/data/routes'
import { IconGeneralLogo } from '@/components/icons'
import colors from '@/config/colors'
import { useRouter } from 'next/router'
import newLogoUrl from '@/public/assets/imgs/new-course/newLogo.svg'
import logoPhycho from '@/public/assets/imgs/new-course/logo-phycho.svg'
import Image from 'next/image'

const Logo = ({
  atHeader = false,
  withTitle = true,
  isForPhychology = false
}) => {
  const router = useRouter()
  const redirectHeader = router.asPath.includes('new-courses')
  
  console.log('C ryjgrb')
  console.log(isForPhychology)
  return (
    <div className={stls.container}>
      {isForPhychology ? (
        <Link href={routeHome} passHref>
          <a>
            <Image src={logoPhycho} alt='Логотип МИПО Психология' width={233} height={70}/>
          </a>
        </Link>
      ) : (
        <Link href={routeHome}>
          <a
            className={classNames({
              [stls.logo]: true,
              [stls.atHeader]: atHeader
            })}>
            {!redirectHeader ? (
              <IconGeneralLogo classNames={[stls.icon]} color={colors.nu} />
            ) : (
              <div className={stls.newIcon}>
                <Image
                  src={newLogoUrl}
                  width={50}
                  height={75}
                  alt='Логотип МИПО'
                />
              </div>
            )}

            {withTitle && (
              <p
                className={stls.title}
                style={{
                  color: redirectHeader ? 'black' : ''
                }}>
                Московский Институт <br />
                Профессионального <br />
                Образования
              </p>
            )}
          </a>
        </Link>
      )}
    </div>
  )
}

export default Logo
