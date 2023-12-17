import stls from '@/styles/pages/Legal.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeLegal } from '@/data/routes'
import companyName from '@/data/companyName'
import { handleGetStaticProps } from '@/helpers/index'
import PageTitle from '@/components/layout/PageTitle'
import {
  ActiveLicenses,
  Diplomas,
  LegalDocs,
  LegalInfo
} from '@/components/sections'

const LegalPage = ({ programs }) => {
  usePageHandleContext({ programs })

  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`Сведения об образовательной организации | ${companyName}`}
        description={truncate(
          `Действующие лицензии, выдаваемые дипломы
        и сертификаты, основные сведения и нормативные документы`,
          120
        )}
        canonical={`${routesFront.root}${routeLegal}`}
      />
      <PageTitle>
        Сведения <br className={stls.linebrake} /> об организации
      </PageTitle>
      <ActiveLicenses />
      {/* <Diplomas /> */}
      <LegalInfo />
      <LegalDocs />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/legal' })

export default LegalPage
