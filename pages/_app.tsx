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
import '@/public/assets/fonts/alegreya-sans/stylesheet.css'
import '@/public/assets/fonts/neue-machina/stylesheet.css'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyBottom from '@/components/layout/StickyBottom'

import { dev } from 'config'

import { useHandleUtms } from '@/hooks/index'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)
  useHandleUtms()

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

  if (prod) {
    console.log = function () {}
  }

  return (
    <>
      {/*//@ts-ignore */}
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


      <div id="getRatingFromEddu" data-id="72382"></div>
      <Script src='https://eddu.pro/getRating.js' />

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
      {!dev && (
        <>
          <Script
            id='roistat-counter'
            dangerouslySetInnerHTML={{
              __html: `(function(w, d, s, h, id) {
                w.roistatProjectId = id; w.roistatHost = h;
                var p = d.location.protocol == "https:" ? "https://" : "http://";
                var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
                var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
                })(window, document, 'script', 'cloud.roistat.com', '5cfe377c158202483a51ae27717c4045');`
            }}
          />
        </>
      )}

      {!dev && (
        <Script id={'dmp'} src="https://dmp.one/sync" async  charSet="UTF-8" />
      )}

      {!dev && (
        <Script
          id='marquiz-script-start'
          dangerouslySetInnerHTML={{
            __html: `(function(w, d, s, o){ var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';
            j.onload = function() { if (document.readyState !== 'loading') Marquiz.init(o); 
            else document.addEventListener("DOMContentLoaded", function() { Marquiz.init(o); }); }; 
            d.head.insertBefore(j, d.head.firstElementChild); })
            (window, document, 'script', { host: '//quiz.marquiz.ru', region: 'eu', id: '65c3391e3e254300269228bc', 
            autoOpen: false, autoOpenFreq: 'once', openOnExit: false, disableOnMobile: false } );`
          }}
        />
      )}

      {!dev && (
        <Script
          id='marquiz'
          dangerouslySetInnerHTML={{
            __html: `(function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', 
            function() {Marquiz.add([t, p])})})('Pop', {id: '65c3391e3e254300269228bc', 
            title: 'ПОЛУЧИТЬ ИНДИВИДУАЛЬНОЕ ПРЕДЛОЖЕНИЕ', text: 'ДЛЯ ВАС ПОДАРОК ОТ ИНСТИТУТА', 
            delay: 2, textColor: '#ffffff', bgColor: '#3846c8', svgColor: '#ffffff', closeColor: '#ffffff', bonusCount: 2, 
            bonusText: 'Вам доступны бонусы и скидка', type: 'full', position: 'position_bottom', shadow: 'rgba(56, 70, 200, 0)', 
            blicked: true, pulse: 'rgba(56, 70, 200, 0.4)'})`
          }}
        />
      )}

      {!dev && (
        <>
          <Script
            id='ed-partners'
            dangerouslySetInnerHTML={{
              __html: `function sclClickPixelFn() {
                  const url = new URL(document.location.href).searchParams;
                  if (url.get('a')) {
                      const availableParams = ['aff_click_id', 'sub_id1', 'sub_id2', 'sub_id3', 'sub_id4', 'sub_id5', 'aff_param1', 'aff_param2', 'aff_param3', 'aff_param4', 'aff_param5', 'idfa', 'gaid'];
                      const t = new URL('https://edpartners.scaletrk.com/click');
                      const r = t.searchParams;
                      console.log(url);
                      r.append('a', url.get('a'));
                      r.append('o', url.get('o'));
                      r.append('return', 'click_id');
                      if (availableParams?.length > 0) {
                          availableParams.forEach((key) => {
                              const value = url.get(key);
                              if (value) {
                                  r.append(key, value);
                              }
                          });
                      }
                      fetch(t.href).then((e) => e.json()).then((e) => {
                          const c = e.click_id;
                          if (c) {
                              const expiration = 864e5 * 90;
                              const o = new Date(Date.now() + expiration);
                              document.cookie = 'cl_uid=' + c + ';expires=' + o;
                              document.cookie = 'utm_source=' + url.get('utm_source') + ';expires=' + o;
                          }
                      });
                  }
              }

              sclClickPixelFn();`
            }}
          />
        </>
      )}
    </>
  )
}

export default MyApp
