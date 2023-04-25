import Router from 'next/router'

import { useEffect, useState, useContext } from 'react'
import Script from 'next/script'
import MenuState from '@/context/menu/MenuState'
import ProgramsState from '@/context/programs/ProgramsState'
import ProgramState from '@/context/program/ProgramState'
import FieldsTooltipState from '@/context/fieldsTooltip/FieldsTooltipState'

import TagManager from 'react-gtm-module'

import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { v4 as uuidv4 } from 'uuid'

import { prod, gtmId, routesFront } from '@/config/index'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/styles/app.sass'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyBottom from '@/components/layout/StickyBottom'

import { dev } from 'config'

import { useHandleUtms } from '@/hooks/index'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)

  const userUuid = uuidv4()

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    const referer = sessionStorage.getItem('referrer')
    if (!referer) {
      sessionStorage.setItem('referer', JSON.stringify(document.referrer))
    }

    if (!sessionStorage.getItem('user_uuid')) {
      sessionStorage.setItem('user_uuid', JSON.stringify(userUuid))
    }

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  useHandleUtms()

  if (prod) {
    console.log = function () {}
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo={`${routesFront.root}/assets/imgs/icons/manifest-icon-512.png`}
        url={routesFront.root}
      />
      <ProgramsState pageProps={pageProps}>
        <ProgramState pageProps={pageProps}>
          <MenuState>
            <FieldsTooltipState>
              <div
                style={{
                  opacity: 1
                }}>
                <Header />
                <main>
                  <Component {...pageProps} />
                </main>
                <StickyBottom />
                <Footer />
              </div>
            </FieldsTooltipState>
          </MenuState>
        </ProgramState>
      </ProgramsState>
      <Script src='/assets/js/vendors/swiped-events.min.js' />
      {!dev && (
        <>
          <Script
            id={'gooogle-tag-manager-prevent-click-bot-spam'}
            dangerouslySetInnerHTML={{
              __html: `
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                  'gtm.start':
                      new Date().getTime(),
                  event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-WCX7NFX');`
            }}
          />
        </>
      )}
      {!dev && (
        <>
          <Script
            id='qoopler-integration'
            dangerouslySetInnerHTML={{
              __html: `(function (d, w) {
                var n = d.getElementsByTagName('script')[0],
                  s = d.createElement('script')
                s.type = 'text/javascript'
                s.async = true
                s.src =
                  'https://qoopler.ru/index.php?ref=' +
                  d.referrer +
                  '&page=' +
                  encodeURIComponent(w.location.href)
                n.parentNode.insertBefore(s, n)
              })(document, window)`
            }}
          />
        </>
      )}
    </>
  )
}

export default MyApp
