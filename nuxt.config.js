const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', {
      detectBrowserLanguage: false,
      parsePages: false,
      pages: {
        'foo/_id': {
          'en': '/foo/:slug-:id(\\d+)',
          'de': '/bar/:slug-:id(\\d+)',
        }
      },
      differentDomains: false,
      // strategy: 'prefix',
      // strategy: 'prefix_and_default', // Results in router-warnings!?
      locales: [
        {
          code: 'en',
          iso: 'en-US',
        },
        {
          code: 'de',
          iso: 'de-DE',
        }
      ],
      defaultLocale: 'de',
      vueI18n: {
        fallbackLocale: 'de',
      },
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
