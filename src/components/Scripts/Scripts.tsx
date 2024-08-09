import Script from 'next/script';

import { dev } from '@/config/index';

export const Scripts = () => {
  return (
    <>
      {!dev && (
        <>
          <Script src="https://eddu.pro/getRating.js" />
        </>
      )}

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
          })(window, document, 'script', 'dataLayer', 'GTM-WCX7NFX');`,
            }}
          />
        </>
      )}

      {!dev && (
        <>
          <Script
            id="victorycorp-integration"
            dangerouslySetInnerHTML={{
              __html: `(function (d, w) {
            var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://victorycorp.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
            n.parentNode.insertBefore(s, n);
            })(document, window);`,
            }}
          />
        </>
      )}

      {!dev && (
        <>
          <Script id="af-ckick" src={'https://af.click.ru/af.js?id=16601'} />
        </>
      )}

      {!dev && (
        <>
          <Script
            id="roistat-counter"
            dangerouslySetInnerHTML={{
              __html: `(function(w, d, s, h, id) {
                w.roistatProjectId = id; w.roistatHost = h;
                var p = d.location.protocol == "https:" ? "https://" : "http://";
                var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
                var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
                })(window, document, 'script', 'cloud.roistat.com', '5cfe377c158202483a51ae27717c4045');`,
            }}
          />
        </>
      )}

      {!dev && (
        <Script id={'dmp'} src="https://dmp.one/sync" async charSet="UTF-8" />
      )}

      {!dev && (
        <Script
          id="marquiz-script-start"
          dangerouslySetInnerHTML={{
            __html: `(function(w, d, s, o){ var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';
            j.onload = function() { if (document.readyState !== 'loading') Marquiz.init(o); 
            else document.addEventListener("DOMContentLoaded", function() { Marquiz.init(o); }); }; 
            d.head.insertBefore(j, d.head.firstElementChild); })
            (window, document, 'script', { host: '//quiz.marquiz.ru', region: 'eu', id: '65c3391e3e254300269228bc', 
            autoOpen: false, autoOpenFreq: 'once', openOnExit: false, disableOnMobile: false } );`,
          }}
        />
      )}

      {!dev && (
        <Script
          id="marquiz"
          dangerouslySetInnerHTML={{
            __html: `(function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', 
            function() {Marquiz.add([t, p])})})('Pop', {id: '65c3391e3e254300269228bc', 
            title: 'ПОЛУЧИТЬ ИНДИВИДУАЛЬНОЕ ПРЕДЛОЖЕНИЕ', text: 'ДЛЯ ВАС ПОДАРОК ОТ ИНСТИТУТА', 
            delay: 2, textColor: '#ffffff', bgColor: '#3846c8', svgColor: '#ffffff', closeColor: '#ffffff', bonusCount: 2, 
            bonusText: 'Вам доступны бонусы и скидка', type: 'full', position: 'position_bottom', shadow: 'rgba(56, 70, 200, 0)', 
            blicked: true, pulse: 'rgba(56, 70, 200, 0.4)'})`,
          }}
        />
      )}

      {!dev && (
        <Script
          id="btn-open"
          dangerouslySetInnerHTML={{
            __html: `(function(a,m,o,c,r,m){a[m]={id:"405512",hash:"ef9faaf747dd2aea1f17c8ca21789bcdb42be19ad6d8ba66f2a817bd380c1433",locale:"ru",inline:false,
              setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,
              s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js';d.head&&d.head.appendChild(s)}(window,0,
              'amoSocialButton',0,0,'amo_social_button'))`,
          }}
        />
      )}

      {!dev && (
        <Script
          id="btn-close"
          dangerouslySetInnerHTML={{
            __html: `(function(a,m,o,c,r,m){a[m]={id:"405512",hash:"ef9faaf747dd2aea1f17c8ca21789bcdb42be19ad6d8ba66f2a817bd380c1433",
            locale:"ru",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};
            var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js';
            d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'))`,
          }}
        />
      )}

      {!dev && (
        <>
          <Script
            id="ed-partners"
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

              sclClickPixelFn();`,
            }}
          />
        </>
      )}
    </>
  );
};
