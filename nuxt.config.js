export default {
    server: {
    host:'0.0.0.0',
        port: 3086 
     },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Baleoni",
    htmlAttrs: {
      lang: "az",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,  minimum-scale=1.0, maximum-scale=1.0" },
      { hid: "description", name: "description", content: "baleonie" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

 

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.scss", "~/assets/css/normalize.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/mask.client.js",

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
     '@nuxt/image',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    'nuxt-basic-auth-module',
    '@nuxt/image',

      // Simple usage
      '@nuxtjs/google-gtag',

      // With options
      ['@nuxtjs/google-gtag', { /* module options */ }], 

  ],


  googleAnalytics: {
    // id: 'UA-177331472-1'
    id:'G-GBGQJZP635',
  },

  'google-gtag':{
    id: 'G-GBGQJZP635',
    config:{
      anonymize_ip: true,
      send_page_view: false,
      linker:{
        domains:['baleoni.az']
      }
    },
    debug: false,
    disableAutoPageTrack: false,
    additionalAccounts:[{
      id: 'AW-600951956',
      config:{
        send_page_view: false
      }
    }]
  },



  image: {
    },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://api.baleoni.alv.az/api/",
  },
  
 
  // Build Configuration: https://go.nuxtjs.dev/config-build
  
};
