<template>
  <div id="app" class="min-h-screen bg-vintage-cream">
    <NuxtLoadingIndicator color="#C06E52" />
    
    <Header />
    
    <main>
      <NuxtPage />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let lenis: any = null

onMounted(async () => {
  const { default: Lenis } = await import('lenis')
  
  // Initialize smooth scroll
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
