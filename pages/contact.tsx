import stls from '@/styles/pages/Contact.module.sass'
import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeContact } from '@/data/routes'
import companyName from '@/data/companyName'
import PageTitle from '@/components/layout/PageTitle'
import { Contacts } from '@/components/sections'
import { city, street } from '@/data/location'
import { number, numberAlt } from '@/data/contact'
import { email, emailAlmaty } from '@/data/email'

const LegalPage = ({ programs }: any) => {
  usePageHandleContext({ programs })

  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`Контакты | ${companyName}`}
        description={truncate(
          `${city}, ${street}, ${number}, ${numberAlt}, ${email}`,
          120
        )}
        canonical={`${routesFront.root}${routeContact}`}
      />
      <PageTitle>Контакты</PageTitle>
      <Contacts />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/contact' })

export default LegalPage
