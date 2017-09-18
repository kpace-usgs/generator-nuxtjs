module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'usgs-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'U.S. Geological Survey (USGS) vue.js website made with nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#003366' },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    publicPath: '/_nuxt/',
    extractCSS: true
  },
  generate: {
    routes: [
      '/',
      '/news',
      '/about'
    ],
    minify: {
      removeComments: true
    }
  },
  router: {
    // change according to where on live server the dist folder will live
    base: '/nuxt/dist/'
  },
  plugins: [
    //{ src: '~/plugins/vue-chartjs.js'}
  ],
  modules: [
    '@nuxtjs/font-awesome',
    ['@nuxtjs/bootstrap-vue', {css: false}]
  ]
}
