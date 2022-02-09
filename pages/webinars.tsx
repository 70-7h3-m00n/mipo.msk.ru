import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeWebinars } from '@/data/routes'
import companyName from '@/data/companyName'
import { WebinarsAlt } from '@/components/sections'

const WebinarsPage = ({ programs, webinars }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <NextSeo
        title={`Вебинары | ${companyName}`}
        description={truncate(
          `${webinars[webinars.length - 1]?.title}, ${
            webinars[webinars.length - 1]?.name
          } | ${webinars[webinars.length - 2]?.title}, ${
            webinars[webinars.length - 2]?.name
          }`,
          120
        )}
        canonical={`${routesFront.root}${routeWebinars}`}
      />
      <WebinarsAlt webinars={webinars} />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/webinars' })

export default WebinarsPage
