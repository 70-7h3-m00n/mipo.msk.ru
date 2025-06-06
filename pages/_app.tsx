/* eslint-disable @next/next/no-img-element */
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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

import { dev } from 'config'

import { useHandleUtms } from '@/hooks/index'
import { getCookie } from 'cookies-next'
import NewHeader from '@/components/layout/NewHeader'

function MyApp({ Component, pageProps }) {
  const route = useRouter()
  const [loading, setLoading] = useState(false)

  // Проверяет параметры URL и устанавливает куки
  useHandleUtms()

  const isEdpartners =
    getCookie('utm_source') !== 'edpartners' &&
    !getCookie('cl_uid') &&
    !route.asPath.includes('edpartners')

  const isHigherEducationPage = route.asPath.includes('highereducation')
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
  }, [userUuid])

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
                {isHigherEducationPage ? <Header /> : <NewHeader />}

                <main>
                  <Component {...pageProps} />
                </main>
                {/*<StickyBottom />*/}
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
            id={'informer-script'}
            dangerouslySetInnerHTML={{
              __html: `
          document.addEventListener('DOMContentLoaded', function () {
          var xHttp = new XMLHttpRequest();
          xHttp.open('GET', 'https://kursfinder.ru/informer/7/', true);
          xHttp.responseType = 'json';
          xHttp.getResponseHeader('Content-Type', 'aplication/json', 'charset=utf-8');
          xHttp.send(null);
          xHttp.addEventListener('readystatechange', function () {
          if (xHttp.readyState === 4 && xHttp.status === 200) {
          document.getElementById('informer').innerHTML = xHttp.response.data;
          }});});
        `
            }}
          />
        </>
      )}

      <div id='getRatingFromEddu' data-id='72382'></div>
      {isEdpartners && <Script src='https://eddu.pro/getRating.js' />}

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
      {!dev && isEdpartners && (
        <>
          <Script
            id={'top-mail-Ru-counter'}
            dangerouslySetInnerHTML={{
              __html: `
          var _tmr = window._tmr || (window._tmr = []);
          _tmr.push({id: "3538298", type: "pageView", start: (new Date()).getTime()});
          (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
          })(document, window, "tmr-code");
        `
            }}
          />
          <noscript>
            <div>
              <img
                src='https://top-fwz1.mail.ru/counter?id=3538298;js=na'
                style={{ position: 'absolute', left: '-9999px;' }}
                alt='Top.Mail.Ru'
              />
            </div>
          </noscript>
        </>
      )}

      {!dev && isEdpartners && (
        <Script
          id='victorycorp-integration'
          dangerouslySetInnerHTML={{
            __html: `(function (d, w) {
            var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://victorycorp.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
            n.parentNode.insertBefore(s, n);
            })(document, window);`
          }}
        />
      )}

      {!dev && isEdpartners && (
        <Script id='af-ckick' src={'https://af.click.ru/af.js?id=16601'} />
      )}

      {!dev && (
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
      )}

      {!dev && (
        <Script id={'dmp'} src='https://dmp.one/sync' async charSet='UTF-8' />
      )}

      {!dev && isEdpartners && !isHigherEducationPage && (
        <Script
          id='marquiz-script-start'
          dangerouslySetInnerHTML={{
            __html: `(function(w, d, s, o){
                      var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() {
                        if (document.readyState !== 'loading') Marquiz.init(o);
                        else document.addEventListener("DOMContentLoaded", function() {
                          Marquiz.init(o);
                        });
                      };
                      d.head.insertBefore(j, d.head.firstElementChild);
                    })(window, document, 'script', {
                        host: '//quiz.marquiz.ru',
                        region: 'ru',
                        id: '68400939797a4b001843cfcc',
                        autoOpen: 20,
                        autoOpenFreq: 'always',
                        openOnExit: true,
                        disableOnMobile: false
                      }
                    );`
          }}
        />
      )}

      {!dev && isEdpartners && !isHigherEducationPage && (
        <Script
          id='marquiz'
          dangerouslySetInnerHTML={{
            __html: `(function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Pop', {id: '68400939797a4b001843cfcc', title: 'Поддержка от института МИПО', text: 'Заберите 15.000 бонусов за прохождение опроса', delay: 1, textColor: '#ffffff', bgColor: '#4072d3', svgColor: '#ffffff', closeColor: '#ffffff', bonusCount: 0, bonusText: 'Ваша скидка: до 15 000 ₽', type: 'full', position: 'position_bottom'})`
          }}
        />
      )}

      {!dev && (
        <Script
          id='btn-open'
          dangerouslySetInnerHTML={{
            __html: `(function(a,m,o,c,r,m){a[m]={id:"405512",hash:"ef9faaf747dd2aea1f17c8ca21789bcdb42be19ad6d8ba66f2a817bd380c1433",locale:"ru",inline:false,
              setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,
              s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js';d.head&&d.head.appendChild(s)}(window,0,
              'amoSocialButton',0,0,'amo_social_button'))`
          }}
        />
      )}

      {!dev && (
        <Script
          id='btn-close'
          dangerouslySetInnerHTML={{
            __html: `(function(a,m,o,c,r,m){a[m]={id:"405512",hash:"ef9faaf747dd2aea1f17c8ca21789bcdb42be19ad6d8ba66f2a817bd380c1433",
            locale:"ru",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};
            var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js';
            d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'))`
          }}
        />
      )}

      {!dev && (
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
      )}
    </>
  )
}

export default MyApp
