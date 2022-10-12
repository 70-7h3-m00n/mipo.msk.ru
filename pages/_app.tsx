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

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)

  const userUuid = uuidv4()

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    // console.log(document.referrer)

    const utms = JSON.parse(sessionStorage.getItem('utms')) || {}
    let utmsAreEmpty = false

    for (const key in utms) {
      if (utms.hasOwnProperty(key)) {
        utmsAreEmpty = true
        break
      }
    }

    if (!utmsAreEmpty) {
      const urlUtmsArr = router.asPath.split('?')[1]

      urlUtmsArr &&
        urlUtmsArr.split('&').forEach(utm => {
          utms[utm.split('=')[0]] = utm.split('=')[1]
        })
      sessionStorage.setItem('utms', JSON.stringify(utms))
    }

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
      <ProgramsState>
        <ProgramState>
          <MenuState>
            <FieldsTooltipState>
              <Header />
              <main>
                <Component {...pageProps} />
              </main>
              <StickyBottom />
              <Footer />
            </FieldsTooltipState>
          </MenuState>
        </ProgramState>
      </ProgramsState>
      <Script src='/assets/js/vendors/swiped-events.min.js' />
      {!dev && (
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
      )}
    </>
  )
}

export default MyApp
