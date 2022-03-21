const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers')
const dev = process.env.NODE_ENV === 'development'

module.exports =
  /* withPWA( */
  {
    // pwa: {
    //   dest: 'public',
    //   disable: dev,
    //   register: true,
    //   scope: '/'
    // },
    poweredByHeader: false,
    i18n: {
      locales: ['ru', 'kz', 'uz'],
      defaultLocale: 'ru',
      localeDetection: false
    },
    images: {
      domains: ['res.cloudinary.com']
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: createSecureHeaders({
            frameGuard: false
          })
          // headers: createSecureHeaders({
          //   contentSecurityPolicy: {
          //     directives: {
          //       defaultSrc: [
          //         "'self'",
          //         'data:',
          //         'https://ssl.gstatic.com',
          //         'https://www.gstatic.com',
          //         'https://fonts.gstatic.com',
          //         'https://www.google-analytics.com',
          //         'https://googleads.g.doubleclick.net',
          //         'https://www.google.com',
          //         'https://bid.g.doubleclick.net',
          //         'https://mc.yandex.ru',
          //         'https://moscow.mba',
          //         'https://www.googleadservices.com',
          //         'https://www.google.ru'
          //       ],
          //       scriptSrc: [
          //         "'self'",
          //         `${dev ? "'unsafe-eval'" : ''}`,
          //         'https://www.googletagmanager.com',
          //         "'sha256-dR9r2B/SmDDIQ6AkSRP1HcZOn6lncQaF7JWgTTTLGTY='",
          //         "'sha256-kxlLwzh8f+NZ3uNSXSPKI+KoxSBTS4AxdH+dXubYARw='",
          //         "'sha256-6g/y+M3Jov37nPvp0FF1vktpRuyTb8EoU5XYgBiqpQY='",
          //         'http://www.googletagmanager.com',
          //         'https://mc.yandex.ru',
          //         'data:',
          //         'https://tagmanager.google.com',
          //         'https://www.google-analytics.com',
          //         'https://ssl.google-analytics.com',
          //         'https://www.googleadservices.com',
          //         'https://www.google.com',
          //         'https://googleads.g.doubleclick.net',
          //         'https://moscow.mba',
          //         'http://www.googleadservices.com'
          //       ],
          //       styleSrc: [
          //         "'self'",
          //         "'unsafe-inline'",
          //         'https://tagmanager.google.com',
          //         'https://fonts.googleapis.com'
          //       ]
          //     }
          //   },
          //   referrerPolicy: 'no-referrer-when-downgrade'
          // })
        }
      ]
    }
    // async redirects() {
    //   return [
    //     {
    //       source: '/programs',
    //       destination: '/programs/mini/online',
    //       permanent: true
    //     },
    //     {
    //       source: '/programs/mini',
    //       destination: '/programs/mini/online',
    //       permanent: true
    //     },
    //     {
    //       source: '/programs/professional',
    //       destination: '/programs/professional/online',
    //       permanent: true
    //     },
    //     {
    //       source: '/programs/industry',
    //       destination: '/programs/industry/online',
    //       permanent: true
    //     }
    //   ]
    // }
  }
