import Document, { Html, Head, Main, NextScript } from 'next/document';

import ScriptHead from '@/components/ScriptHead';
import dev from '@/config/dev';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <ScriptHead />
        </Head>
        <body>
          {!dev && (
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WCX7NFX"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
