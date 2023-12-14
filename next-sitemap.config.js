module.exports = {
  siteUrl: 'https://mipo.msk.ru',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/payment'],
  // alternateRefs: [
  //   {
  //     href: 'https://moscow.mba/en-US',
  //     hreflang: 'en'
  //   }
  // ],
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/*?',
        cleanParam: 'some_param_to_clean',
      }
    ]
  }
}
