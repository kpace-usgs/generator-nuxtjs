module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '<%= appName %>',
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
  
  <%if(cms == 'Yes'){%>
  /* set env variables for connecting to CMS */
  // this assumes you're using Cockpit, but you can replace this with whatever headless CMS you choose
  env: {
    cockpit: {
      apiUrl: 'https://' + '<%= cmsUrl %>' + '/index.php/rest/api',
      apiToken: '<%= cmsToken %>',
      baseUrl: 'https://' + '<%= cmsUrl %>'
    }
  }
  <%}%>

  generate: {
    minify: {
      removeComments: true
    }
  },
  router: {
    // change according to where on live server the dist folder will live
    base: '<%= basename %>'
  },
  plugins: [
    <%if(dataViz == 'leaflet'){%>{ src: '~/plugins/vue2-leaflet.js', ssr: false}<%}%>
    <%if(dataViz == 'chart.js'){%>{ src: '~/plugins/vue-chartjs.js'}<%}%>
    <%if(dataViz == 'highcharts'){%>{ src: '~/plugins/vue-highcharts.js', ssr: false }<%}%>

  ],
  modules: [
    <%if(bootstrap == 'Yes'){%>['@nuxtjs/bootstrap-vue', {css: false}]<%}%>,
    <%if(sitemap == 'Yes'){%>'@nuxtjs/sitemap'<%}%>,
    <%if(axios == 'Yes'){%>'@nuxtjs/axios', axios: {}<%}%>,
    <%if(googleAnalytics == 'Yes'){%>['@nuxtjs/google-analytics', {ua: '<%= UA %>'}]<%}%>,
    '@nuxtjs/font-awesome'
  ],
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    publicPath: '/_nuxt/',
    extractCSS: true
  }
}
