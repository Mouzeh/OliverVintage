<template>
  <div id="app" class="min-h-screen bg-vintage-cream">
    <NuxtLoadingIndicator color="#C06E52" />
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    
      href="https://www.instagram.com/olivervintagecl/"
      target="_blank"
      rel="noopener noreferrer"
      style="position:fixed;bottom:28px;right:28px;z-index:99999;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7);color:#fff;text-decoration:none;box-shadow:0 4px 20px rgba(238,42,123,0.5);"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <circle cx="12" cy="12" r="4.5"></circle>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ClothingStore',
        name: 'Oliver Vintage',
        description: 'Tienda de moda circular y ropa americana en Villarrica, Chile.',
        url: 'https://www.olivervintage.cl',
        logo: 'https://www.olivervintage.cl/favicon.png',
        image: 'https://www.olivervintage.cl/images/hero.png',
        telephone: '+56920306235',
        email: 'olivervintagecl@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Pedro Montt 635',
          addressLocality: 'Villarrica',
          addressRegion: 'La Araucania',
          addressCountry: 'CL'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -39.2837022,
          longitude: -72.2277588
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '19:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '14:00'
          }
        ],
        sameAs: [
          'https://www.instagram.com/olivervintagecl/',
          'https://www.facebook.com/profile.php?id=100063597219507'
        ],
        priceRange: '$$',
        currenciesAccepted: 'CLP',
        paymentAccepted: 'Cash, Credit Card, Debit Card',
        hasMap: 'https://www.google.com/maps/place/Oliver+Vintage/@-39.2837022,-72.2277588,21z'
      })
    }
  ]
})

let lenis: any = null

onMounted(async () => {
  const { default: Lenis } = await import('lenis')
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  })
  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})

onBeforeUnmount(() => {
  lenis?.destroy()
})
</script>

<style>
/* Global styles handled by Tailwind */
</style>
