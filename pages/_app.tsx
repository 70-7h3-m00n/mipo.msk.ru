import Router from 'next/router'
import { AppProps } from 'next/app'
import { FC, useEffect, useState } from 'react'
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
import { useHandleUtms } from '@/hooks/index'
import Scripts from '../src/components/Scripts'
import { wrapper } from '@/state/store'
import { Provider } from 'react-redux'
import { LayoutApp } from '../src/components/LayoutApp/LayoutApp'

const App: FC<AppProps> = ({Component, ...rest}) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [loading, setLoading] = useState(false)

  const userUuid = uuidv4()

  useHandleUtms()

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
      <Provider store={store}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
              rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />

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

      <div id="getRatingFromEddu" data-id="72382"></div>
    </>
  )
}

export default App
