// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { themeColor } from '@/config/index'
import MetaFonts from '@/components/meta/MetaFonts'
import MetaManifest from '@/components/meta/MetaManifest'
import { dev } from 'config'
// eslint-disable-next-line @next/next/no-script-in-document
import Script from 'next/script'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        {/*//@ts-ignore */}
        <Head>
          <meta charSet='UTF-8' />
          {/* <meta name='theme-color' content={themeColor} /> */}
          <MetaFonts />
          <MetaManifest />
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
          {/*//@ts-ignore */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
