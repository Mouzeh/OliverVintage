export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // ✅ SSR activado — Google ahora ve el contenido real
  ssr: true,

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
      // ✅ Idioma declarado — corrige el error del SEO
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'description', content: 'Tienda de moda circular y ropa americana en Villarrica, Chile. Descubre prendas únicas, sostenibles y con estilo.' },
        { name: 'keywords', content: 'moda circular, ropa americana, vintage, Villarrica, segunda mano, sostenible' },
        // ✅ Open Graph — para compartir en redes sociales
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Oliver Vintage - Moda Circular & Ropa Americana | Villarrica' },
        { property: 'og:description', content: 'Tienda de moda circular y ropa americana en Villarrica, Chile. Descubre prendas únicas, sostenibles y con estilo.' },
        { property: 'og:url', content: 'https://www.olivervintage.cl' },
        { property: 'og:image', content: 'https://www.olivervintage.cl/images/hero.png' },
        // ✅ Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Oliver Vintage - Moda Circular & Ropa Americana' },
        { name: 'twitter:description', content: 'Tienda de moda circular y ropa americana en Villarrica, Chile.' },
        { name: 'twitter:image', content: 'https://www.olivervintage.cl/images/hero.png' },
        // ✅ Apple Touch Icon (era advertencia en el análisis)
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        // ✅ Apple Touch Icon
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        // ✅ Canonical
        { rel: 'canonical', href: 'https://www.olivervintage.cl' },
      ]
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    // ✅ Prerender páginas estáticas clave
    prerender: {
      routes: ['/', '/productos', '/nosotros', '/contacto', '/envios', '/devoluciones']
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})