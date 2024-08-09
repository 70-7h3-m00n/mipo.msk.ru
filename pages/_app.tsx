import type { AppProps } from 'next/app';
import Router from 'next/router';
import { DefaultSeo, LogoJsonLd } from 'next-seo';
import NProgress from 'nprogress';
import type { FC } from 'react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { Provider } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { LayoutApp } from '@/components/LayoutApp/LayoutApp';
import Scripts from '@/components/Scripts';
import { prod, gtmId, routesFront, dev } from '@/config/index';
import SEO from '@/config/seo.config';
import useHandleUtms from '@/hooks/useHandleUtms';
import { wrapper } from '@/state/store';

import '@/styles/global/app.scss';
import '@/public/assets/fonts/manrope/stylesheet.css';
import '@/public/assets/fonts/unbounded/stylesheet.css';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  const userUuid = uuidv4();

  useHandleUtms();

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' });

    const referer = sessionStorage.getItem('referrer');
    if (!referer) {
      sessionStorage.setItem('referer', JSON.stringify(document.referrer));
    }

    if (!sessionStorage.getItem('user_uuid')) {
      sessionStorage.setItem('user_uuid', JSON.stringify(userUuid));
    }

    NProgress.configure({
      showSpinner: false,
    });

    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, [userUuid]);

  if (prod) {
    console.log = function () {};
  }

  return (
    <>
      <Provider store={store}>
        <DefaultSeo {...SEO} />

        <LogoJsonLd
          logo={`${routesFront.root}/assets/imgs/icons/manifest-icon-512.png`}
          url={routesFront.root}
        />
        <LayoutApp>
          <main>
            <Component {...props.pageProps} />
          </main>
        </LayoutApp>
      </Provider>

      <Scripts />

      {!dev && (
        <>
          <div id="getRatingFromEddu" data-id="72382"></div>
        </>
      )}
    </>
  );
};

export default App;
