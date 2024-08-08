module.exports = {
  poweredByHeader: false,
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
    localeDetection: false
  },
  images: {
    domains: ['res.cloudinary.com', 'api.instprof.online'],
  },
  experimental: {
    turbo: {
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
}
