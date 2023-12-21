import stls from '@/styles/components/general/Logo.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { routeHome } from '@/data/routes'
import { IconGeneralLogo } from '@/components/icons'
import colors from '@/config/colors'
import { useRouter } from 'next/router'

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

          <IconGeneralLogo classNames={[stls.icon]} color={colors.nu} />

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
