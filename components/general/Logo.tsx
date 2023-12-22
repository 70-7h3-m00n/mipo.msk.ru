import stls from '@/styles/components/general/Logo.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { routeHome } from '@/data/routes'
import { IconGeneralLogo } from '@/components/icons'
import colors from '@/config/colors'
import { useRouter } from 'next/router'
import newLogoUrl from '@/public/assets/imgs/new-course/newLogo.svg'
import Image from 'next/image'

const Logo = ({ atHeader = false, withTitle = true }) => {
  const router = useRouter()
  const redirectHeader = router.asPath.includes('new-courses')

  return (
    <div className={stls.container}>
      <Link href={routeHome}>
        <a
          className={classNames({
            [stls.logo]: true,
            [stls.atHeader]: atHeader
          })}>
          {
            !redirectHeader?
            <IconGeneralLogo classNames={[stls.icon]} color={colors.nu} />
              :
            <div className={stls.newIcon}>
              <Image src={newLogoUrl} width={50} height={75} />
            </div>
          }

          {withTitle && (
            <p className={stls.title} style={{
              color: redirectHeader? 'black': ''
            }}>
              Московский Институт <br />
              Профессионального <br />
              Образования
            </p>
          )}
        </a>
      </Link>
    </div>
  )
}

export default Logo
