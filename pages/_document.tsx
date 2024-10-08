// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
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
        {/*//@ts-ignore */}
        <Head>
          <meta charSet="UTF-8" />

          <script id={'flocktory-script'}
                  type="text/javascript"
                  src="https://api.flocktory.com/v2/loader.js?site_id=5594"
                  async
          />

          {/* <meta name='theme-color' content={themeColor} /> */}
          <MetaFonts />
          <MetaManifest />
          <meta name="yandex-verification" content="b001b41939d583ff" />
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
