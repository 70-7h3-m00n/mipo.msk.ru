import { themeColor } from '@/config/index'

const MetaManifest = () => {
  return (
    <>
      <meta
        name='application-name'
        content='Московский Институт Профессионального Образования'
      />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta
        name='apple-mobile-web-app-title'
        content='Московский Институт Профессионального Образования'
      />
      {/* <meta name='format-detection' content='telephone=no' /> */}
      <meta name='mobile-web-app-capable' content='yes' />
      {/* <meta
        name='msapplication-config'
        content='/assets/imgs/icons/browserconfig.xml'
      /> */}
      <meta name='msapplication-TileColor' content={themeColor} />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content={themeColor} />

      <meta name={'yandex-verification'} content={'9ff11531d063e792'}/>

      {/* <link
        rel='apple-touch-icon'
        href='/assets/imgs/icons/apple-icon-180.png'
      /> */}
      {/* <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/assets/imgs/icons/touch-icon-ipad.png'
      /> */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/imgs/icons/apple-icon-180.png'
      />
      {/* <link
        rel='apple-touch-icon'
        sizes='167x167'
        href='/assets/imgs/icons/touch-icon-ipad-retina.png'
      /> */}

      {/* <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/assets/imgs/icons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/assets/imgs/icons/favicon-16x16.png'
      /> */}
      <link rel='manifest' href='/manifest.json' />
      {/* <link
        rel='mask-icon'
        href='/assets/imgs/icons/safari-pinned-tab.svg'
        color='#5bbad5'
      /> */}
      <link rel='icon' href='/favicon.ico' />
      <link rel='shortcut icon' href='/favicon.ico' />

      {/* <link
        rel='apple-touch-startup-image'
        href='/assets/imgs/icons/apple-splash-2048-2732.jpg'
        sizes='2048x2732'
      />
      <link
        rel='apple-touch-startup-image'
        href='/assets/imgs/icons/apple-splash-1668-2224.jpg'
        sizes='1668x2224'
      />
      <link
        rel='apple-touch-startup-image'
        href='/assets/imgs/icons/apple-splash-1536-2048.jpg'
        sizes='1536x2048'
      />
      <link
        rel='apple-touch-startup-image'
        href='/assets/imgs/icons/apple-splash-1125-2436.jpg'
        sizes='1125x2436'
      />
      <link
        rel='apple-touch-startup-image'
        href='/assets/imgs/icons/apple-splash-1242-2208.jpg'
        sizes='1242x2208'
      />
      <link
        rel='apple-touch-startup-image'
        href='/assets/imgs/icons/apple-splash-750-1334.jpg'
        sizes='750x1334'
      />
      <link
        rel='apple-touch-startup-image'
        href='/assets/imgs/icons/apple-splash-640-1136.jpg'
        sizes='640x1136'
      /> */}

      {/* <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content='https://yourdomain.com' />
      <meta name='twitter:title' content='PWA App' />
      <meta name='twitter:description' content='Best PWA App in the world' />
      <meta
        name='twitter:image'
        content='https://yourdomain.com/assets/assets/imgs/icons/android-chrome-192x192.png'
      />
      <meta name='twitter:creator' content='@DavidWShadow' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='PWA App' />
      <meta property='og:description' content='Best PWA App in the world' />
      <meta property='og:site_name' content='PWA App' />
      <meta property='og:url' content='https://yourdomain.com' />
      <meta
        property='og:image'
        content='https://yourdomain.com/assets/assets/imgs/icons/apple-touch-icon.png'
      /> */}
    </>
  )
}

export default MetaManifest
