import Document, { Html, Head, Main, NextScript } from 'next/document'
import MetaFonts from '@/components/meta/MetaFonts'
import MetaManifest from '@/components/meta/MetaManifest'
import { dev } from 'config'
import { ScriptHead } from '../src/components/ScriptHead/ScriptHead'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <ScriptHead />
          <MetaFonts />
          <MetaManifest />
        </Head>
        <body>
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
