import stls from '@/styles/pages/Payment.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routePayment } from '@/data/routes'
import companyName from '@/data/companyName'
import { handleGetStaticProps } from '@/helpers/index'
import PageTitle from '@/components/layout/PageTitle'
import {
  PaymentBtns,
  PaymentDebitCard,
  PaymentInfo,
  SectionPaymentTinkoff
} from '@/components/sections'
import YKassaForm from '@/components/payments/Ykassa'

const PaymentPage = ({ programs }) => {
  usePageHandleContext({ programs })

  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`Оплата | ${companyName}`}
        description={truncate(
          `VISA International, Mastercard Worldwide, JCB, МИР`,
          120
        )}
        canonical={`${routesFront.root}${routePayment}`}
      />
      <PageTitle>Оплата</PageTitle>
      <YKassaForm />
      <PaymentDebitCard />
      <PaymentInfo />
      
      <PaymentBtns />
      {/* <SectionPaymentTinkoff /> */}
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/payment' })

export default PaymentPage
