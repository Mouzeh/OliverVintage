// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  ssr: false,

  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint'
  ],
  
  runtimeConfig: {
    public: {
      wpGraphQLUrl: process.env.WP_GRAPHQL_URL || 'http://wp.olivervintage.test/wp/graphql',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://olivervintage.test'
    }
  },
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Oliver Vintage - Moda Circular & Ropa Americana | Villarrica',
      meta: [
        { name: 'description', content: 'Tienda de moda circular y ropa americana en Villarrica, Chile. Descubre prendas únicas, sostenibles y con estilo.' },
        { name: 'keywords', content: 'moda circular, ropa americana, vintage, Villarrica, segunda mano, sostenible' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  
  typescript: {
    strict: true,
    typeCheck: false
  },
  
  nitro: {
    compressPublicAssets: true,
    minify: true
  },
  
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})