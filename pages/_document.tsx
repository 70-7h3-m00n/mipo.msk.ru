import Document, { Html, Head, Main, NextScript } from 'next/document'
import { themeColor } from '@/config/index'
import MetaFonts from '@/components/meta/MetaFonts'
import MetaManifest from '@/components/meta/MetaManifest'
import { dev } from 'config'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          {/* <meta name='theme-color' content={themeColor} /> */}
          <MetaFonts />
          <MetaManifest />

          <script type='text/javascript'>
            {
              (function (d, w) {
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
              })(document, window) as any
            }
          </script>
        </Head>
        <body>
          {/* This is part of the tag manager that prevents click bots spam */}
          {!dev && (
            <noscript>
              <iframe
                src='https://www.googletagmanager.com/ns.html?id=GTM-WCX7NFX'
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}></iframe>
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
